import '../css/About.css';
import chefs from '../assets/Mario and Adrian b.jpg';
import Hero from './Hero';

const About = () => {
  return (
    <>
      <Hero />
      <section className='about'>
        <p>We are a proud bussiness family which primarly is being run by my brother and I. We take pride in the quality and the choice of our food.</p>
        <img src={chefs} alt='Chefs laughing' width='389' height='260'></img>
      </section>
    </>
  )
}

export default About;