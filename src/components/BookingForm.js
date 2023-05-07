import { useState } from "react";
import { useEffect } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";


const BookingForm = () => {
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

  useEffect(() => {
      const fetchData = async() => {
          const date = new Date()
          const times = await fetchAPI(date)
          setavailableTimes(times)
      }
      fetchData() // eslint-disable-next-line
  }, [])

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
            .min(4, "Must be at least 4 charachters")
            .required("Required"),
        lastname: Yup.string()
            .max(15, "Must be less than 15 charachters")
            .min(5, "Must be at least 5 charachters")
            .required("Required"),
        email: Yup.string().email("Invalid email adress").required("Required")
    }),
    onSubmit: async(values, actions) => {
        const isSubmitted = await submitAPI(values)
        if(isSubmitted){
            alert("Reservation submitted successfully")
            actions.resetForm()
        } else {
            alert("An error ocurred, please try again later")
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))
        document.getElementById("res-date").value = ""
        document.getElementById("res-time").value = ""
        document.getElementById("guests").value = ""
        document.getElementById("occasion").value = ""
        actions.resetForm()
    }
  })

  const isdisabled = () => {
    if(values.date  && values.time && values.guests && values.name && values.surname && values.email){
        return false
    } else {
        return true
    }
  }

  return(
    <form style={{display: 'grid', gap: '20px'}} onSubmit={handleSubmit}>    {/*Remember inline styles are written differently in React*/}
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={values.date} onChange={handleChange}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " name='time' value={values.time} onChange={handleChange}>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
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
      <input type="submit" value="Make Your Reservation" data-testid="submit-button" disabled={isdisabled()}/>
    </form>
  )
}

export default BookingForm;