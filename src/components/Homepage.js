import '../css/Homepage.css'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials'
import Hero from './Hero'

const Homepage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <Specials />
            <Footer />
        </>
    )
}

export default Homepage;