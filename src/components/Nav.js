import '../css/Nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
  
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
    
  function closeNav() {
    if (window.innerWidth < 830) {
        document.getElementById("myNav").style.width = "0%";
    } else {
        document.getElementById("myNav").style.width = "auto";
    }
  } 

  window.addEventListener("resize", () => {
    if (window.innerWidth > 829) {
        document.getElementById("myNav").style.width = "auto";
    } else {
        document.getElementById("myNav").style.width = "0%"
    }
  });

  return (
    <>
      <nav id="myNav" className="overlay">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <ul className='main-nav'>
          <li><Link to='/' onClick={closeNav}><strong>Home</strong></Link></li>
          <li><Link to='/about' onClick={closeNav}><strong>About</strong></Link></li>
          <li><Link to='/menu' onClick={closeNav}><strong>Menu</strong></Link></li>
          <li><Link to='/reservation' onClick={closeNav}><strong>Reservations</strong></Link></li>
        </ul>
      </nav>
      <span className="lines" onClick={openNav}>&#9776;</span>
    </>
  )
}

export default Nav;