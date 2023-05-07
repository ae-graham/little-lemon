import React from 'react'
import { useLocation } from 'react-router-dom'

const Confirmation = () => {
  const location = useLocation()
  const reservation = location.state.reservation
  return(
    <div className='confirmation'>
        <h3>Congrats, your order has been placed!</h3>
        <div className='confirmation--main__div'>
          <p>Name: <strong>{reservation.firstname}</strong></p>
          <p>Surname: <strong>{reservation.lastname}</strong></p>
          <p>Email: <strong>{reservation.email}</strong></p>
          <p>Date: <strong>{reservation.date}</strong></p>
          <p>Time: <strong>{reservation.time}</strong></p>
          <p>Guests: <strong>{reservation.guests}</strong></p>
        </div>

    </div>
  )
}

export default Confirmation;
