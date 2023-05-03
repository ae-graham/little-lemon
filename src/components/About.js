import Nav from './Nav';
import Footer from './Footer';
import {ReactComponent as Logo} from '../assets/Logo.svg';

const About = () => {
    return (
        <>
            <Logo />
            <Nav />
            <p>This is my About page</p>
            <Footer />
        </>
    )
}

export default About;