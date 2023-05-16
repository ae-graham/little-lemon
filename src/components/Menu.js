import '../css/Menu.css';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import Hero from './Hero';


const Menu = () => {
  return(
    <>
      <Hero />
      <div id='menu-container'>
        <img src={menu1} alt='Menu page 1' width='411' height='706' />
        <img src={menu2} alt='Menu page 2' width='415' height='706' />
      </div>
      <p>This menu belongs to <cite>'Mamma Barone Italian Kitchen'.</cite></p>
    </>
  )
}

export default Menu;