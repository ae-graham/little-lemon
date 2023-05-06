import '../css/Nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
  
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
    
  function closeNav() {
    if (window.innerWidth < 769) {
        document.getElementById("myNav").style.width = "0%";
    } else {
        document.getElementById("myNav").style.width = "auto";
    }
  } 

  return (
    <>
      <nav id="myNav" className="overlay">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <ul className='main-nav'>
          <li><Link to='/' onClick={closeNav}>Home</Link></li>
          <li><Link to='/about' onClick={closeNav}>About</Link></li>
          <li><a href='/#' onClick={closeNav}>Menu</a></li>
          <li><Link to='/reservation' onClick={closeNav}>Reservations</Link></li>
          <li><a href='/#' onClick={closeNav}>Order Online</a></li>
          <li><a href='/#' onClick={closeNav}>Login</a></li>
        </ul>
      </nav>
      <span className="lines" onClick={openNav}>&#9776;</span>
    </>
  )
}

export default Nav;