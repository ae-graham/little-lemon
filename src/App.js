import './App.css';
import {ReactComponent as Logo} from './assets/Logo.svg';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage'
import About from './components/About'
import Reservations from './components/Reservations'
//import Confirmation from './components/Confirmation'
import {Routes, Route} from 'react-router-dom';
import salad from './assets/greek salad.jpg';
import bruschetta from './assets/bruchetta.jpg';
import dessert from './assets/lemon dessert.jpg'


function App() {
  
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
      <header style={{width: '90%', margin: '20px auto', maxWidth: '1125px'}}>
        <Logo />
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Homepage specials={specials} />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
