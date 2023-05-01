import '../css/Nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><a href='/#'>Menu</a></li>
                <li><Link to='/reservation'>Reservations</Link></li>
                <li><a href='/#'>Order Online</a></li>
                <li><a href='/#'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;