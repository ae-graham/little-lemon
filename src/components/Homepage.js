import '../css/Homepage.css'
import Specials from './Specials'
import Hero from './Hero'

const Homepage = (props) => {
  return (
    <>
      <Hero />
      <Specials specials={props.specials}/>
    </>
  )
}

export default Homepage;