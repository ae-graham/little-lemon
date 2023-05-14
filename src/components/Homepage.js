import '../css/Homepage.css'
import Specials from './Specials'
import Hero from './Hero'
import Testimonials from './Testimonials'

const Homepage = (props) => {
  return (
    <>
      <Hero />
      <Specials specials={props.specials}/>
      <Testimonials />
    </>
  )
}

export default Homepage;