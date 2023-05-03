import panini from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='/reservation'>Reserve a Table</Link>
            <img src={panini} alt='Restaurant dish containing paninis' width='228' height='344' />
        </section>
    )
}

export default Hero;