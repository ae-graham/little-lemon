import './App.css';
import Homepage from './components/Homepage'
import About from './components/About'
import Reservations from './components/Reservations'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
