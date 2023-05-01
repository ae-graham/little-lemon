import panini from '../assets/restauranfood.jpg';

const Hero = () => {
    return (
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <img src={panini} alt='Restaurant dish containing paninis' width='342' height='517' />
        </section>
    )
}

export default Hero;