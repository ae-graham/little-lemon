
import BookingForm from './BookingForm';
import '../css/Reservations.css'

const Reservations = (props) => {
  return (
    <>
      <h1 id='booking-title'>Bookings</h1>
      <BookingForm availableTimes={props.availableTimes} setavailableTimes={props.setavailableTimes}/>
    </>
  )
}

export default Reservations;