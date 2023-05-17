import logo from '../assets/Asset 20@4x.png';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='outter-footer'>
      <footer className='footer'>
        <div id='footer-img' style={{margin: '20px 0'}}>
          <img src={logo} alt="logo" width='68' height='120' />
        </div>
        <div id='cell_2'>
          <article className=''>
            <h3 style={{fontSize: '1.2rem'}}>Doormat Navigation</h3>
            <ul>
              <li><Link to='/about' >About</Link></li>
              <li><Link to='/menu' >Menu</Link></li>
              <li><Link to='/reservation' >Reservations</Link></li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </article>
        </div>
        <div id='cell_3'>
          <article>
            <h3 style={{fontSize: '1.2rem'}}>Contact Info</h3>
            <address>
              <p>150 N Michigan Ave Ste 700, Chicago, IL<br></br>
              Zip: 60601-0003</p>
            </address>
          </article>
        </div>
        <div id='cell_4'>
          <article>
            <h3 style={{fontSize: '1.2rem'}}>Social Media</h3>
            <ul>
              <li><a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </article>
        </div>
      </footer>
    </div>
  )
}

export default Footer;