
import BookingForm from './BookingForm';
import '../css/Reservations.css'

const Reservations = () => {
  return (
    <>
      <h1 id='booking-title'>Reservations</h1>
      <div id='flex-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', margin: '0 auto', maxWidth: '1125px'}}>
        <BookingForm />
        <div id='reservation-img'></div>
      </div>
    </>
  )
}

export default Reservations;