import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  return(
    <form style={{display: 'grid', maxWidth: '260px', gap: '20px'}}>    {/*Remember inline styles are written differently in React*/}
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " value={props.availableTimes} onChange={props.setavailableTimes}>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
          <option value='21:00'>21:00</option>
          <option value='22:00'>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option value=''>--Please choose an occasion--</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm;