import '../css/About.css';
import chefs from '../assets/Mario and Adrian b.jpg';
import Hero from './Hero';

const About = () => {
  return (
    <>
      <Hero />
      <div style={{width: '90%', margin: '0 auto', maxWidth: '1125px'}}><h1 id='about-h1'>About Little Lemon</h1></div>
      <section className='about'>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. The bussiness is primarly being run by my brother and I. We take pride in the quality and the choice of our food.</p>
        <img src={chefs} alt='Chefs laughing' width='341' height='287'></img>
      </section>
    </>
  )
}

export default About;