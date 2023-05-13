import { useState } from "react";
import { useEffect } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";


const BookingForm = () => {
  const [isConfirmed, setConfirmed] = useState(false)
  const [availableTimes, setavailableTimes] = useState([]);

  //-----------API DATA-----------//
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());
      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  
  const submitAPI = function(formData) {
      return true;
  };
  //-----API DATA FINISH------//

  

  const {values, handleBlur, handleChange, handleSubmit, touched, errors} = useFormik({
    initialValues: {
        date: "",
        time: "",
        guests: "",
        occasion: "",
        firstname: "",
        lastname: "",
        email: ""
    },
    validationSchema: Yup.object({
        firstname: Yup.string()
            .max(12, "Must be 12 charachters or less")
            //.min(4, "Must be at least 4 charachters")
            .required("Required"),
        lastname: Yup.string()
            .max(15, "Must be less than 15 charachters")
            //.min(5, "Must be at least 5 charachters")
            .required("Required"),
        email: Yup.string().email("Invalid email adress").required("Required")
    }),
    onSubmit: (values) => {
      const isSubmitted = submitAPI(values)
      if(isSubmitted){
          setConfirmed(true);
      } else {
          alert("An error ocurred, please try again later")
      }
    }
  })

  useEffect(() => {
    const fetchData = () => {
        const date = new Date(values.date) //takes the date selected and with this it creates a new Date object
        const times = fetchAPI(date)
        setavailableTimes(times)
    }
    fetchData(); // eslint-disable-next-line
  }, [values.date]) // I track the date selected, so when it changes the useEffect hook is invoked

  const isdisabled = () => {
    if(values.date  && values.time && values.guests && values.firstname && values.lastname && values.email && !errors.email){
        return false
    } else {
        return true
    }
  }

  return(
    <>
    <form style={!isConfirmed ? {display: 'grid', gap: '20px'} : {display: 'none'}} onSubmit={handleSubmit}>    {/*Remember inline styles are written differently in React*/}
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={values.date} onChange={handleChange}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " name='time' value={values.time} onChange={handleChange}>
        {availableTimes.length > 0 ? availableTimes.map((time, index) => {
          return <option key={index} value={time}>{time}</option>
          }): <option value=''>--Please choose a date to see available times--</option>
        }
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={values.guests} onChange={handleChange}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={values.occasion} onChange={handleChange}>
          <option value=''>--Please choose an occasion--</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
      </select>
      <label htmlFor="firstname">Name</label>
      <input
        type="text"
        placeholder='Name'
        id='firstname'
        name='firstname'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstname}
      />
      {touched.firstname && errors.firstname ? (<div className='error--field'>{errors.firstname}</div>) : null}
      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        name='lastname'
        placeholder='Lastname'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastname}
      />
      {touched.lastname && errors.lastname ? (<div className='error--field'>{errors.lastname}</div>) : null}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name='email'
        className='email'
        placeholder='John@....'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email ? (<div className='error--field'>{errors.email}</div>) : null}
      <input className='submit-form' type="submit" value="Make Your Reservation" data-testid="submit-button" disabled={isdisabled()} />
    </form>
    {isConfirmed ? 
      <div className='confirmed'>
        <h1>Your booking is confirmed!</h1>
        <p>Name: <strong>{values.firstname}</strong></p>
        <p>Surname: <strong>{values.lastname}</strong></p>
        <p>Email: <strong>{values.email}</strong></p>
        <p>Date: <strong>{values.date}</strong></p>
        <p>Time: <strong>{values.time}</strong></p>
        <p>Guests: <strong>{values.guests}</strong></p>
      </div>
      : null
    }
    </>
  )
}

export default BookingForm;