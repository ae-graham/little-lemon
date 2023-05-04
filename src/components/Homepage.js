import '../css/Homepage.css'
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials'
import Hero from './Hero'
import {ReactComponent as Logo} from '../assets/Logo.svg';

const Homepage = (props) => {
    return (
        <>
            <header className='header'>
                <Logo />
                <Nav />
            </header>
            <Hero />
            <Specials specials={props.specials}/>
            <Footer />
        </>
    )
}

export default Homepage;