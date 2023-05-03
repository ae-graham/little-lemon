import '../css/Homepage.css'
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials'
import Hero from './Hero'
import {ReactComponent as Logo} from '../assets/Logo.svg';

const Homepage = () => {
    return (
        <>
            <header className='header'>
                <Logo />
                <Nav />
            </header>
            <Hero />
            <Specials />
            <Footer />
        </>
    )
}

export default Homepage;