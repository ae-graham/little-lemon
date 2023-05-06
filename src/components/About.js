import Nav from './Nav';
import Footer from './Footer';
import {ReactComponent as Logo} from '../assets/Logo.svg';

const About = () => {
  return (
    <>
      <header>
        <Logo />
        <Nav />
      </header>
      <h1>This is my About page</h1>
      <Footer />
    </>
  )
}

export default About;