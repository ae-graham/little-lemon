import logo from '../assets/Asset 20@4x.png';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className='footer' style={{maxWidth: '1125px'}}>
      <div id='cell_1'>
        <img src={logo} alt="logo" width='68' height='120'/>
      </div>
      <div id='cell_2'>
        <article className=''>
          <h3 style={{fontSize: '1rem'}}>Doormat Navigation</h3>
          <ul>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </article>
      </div>
      <div id='cell_3'>
        <article>
          <h3 style={{fontSize: '1rem'}}>Contact Info</h3>
          <address>
            <p>Sydney</p>
            <p>Australia NSW</p>
          </address>
        </article>
      </div>
      <div>
        <article className="">
          <h3 style={{fontSize: '1rem'}}>Social Media</h3>
          <ul>
            <li><a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </article>
      </div>
    </footer>
  )
}

export default Footer;