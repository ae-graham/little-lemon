import './App.css';
import {ReactComponent as Logo} from './assets/Logo.svg';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage'
import About from './components/About'
import Reservations from './components/Reservations'
import {Routes, Route} from 'react-router-dom';
import salad from './assets/greek salad.jpg';
import bruschetta from './assets/bruchetta.jpg';
import dessert from './assets/lemon dessert.jpg'
import { useState } from "react";

function App() {
  const [availableTimes, setavailableTimes] = useState('17:00');

  const handleAvailableTimes = (e) => {
    setavailableTimes(e.target.value);
  }
  
  const specials = [
    {
      photo: salad,
      dish: 'Greek Salad',
      price: 12.99,
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
      photo: bruschetta,
      dish: 'Bruschetta',
      price: 5.99,
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
      photo: dessert,
      dish: 'Lemon Dessert',
      price: 5.00,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];
  return (
    <>
      <header>
        <Logo />
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Homepage specials={specials} />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<Reservations availableTimes={availableTimes} setavailableTimes={handleAvailableTimes}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
