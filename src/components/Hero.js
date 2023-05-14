import panini from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className='outter-hero'>
      <div className='hero'>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to='/reservation'><strong>Reserve a Table</strong></Link>
        </div>
        <img src={panini} alt='Restaurant dish containing paninis' />
      </div>
    </section>
  )
}

export default Hero;