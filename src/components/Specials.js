import {Link} from 'react-router-dom';
import Card from './Card'

const Specials = (props) => {
  return (
    <section className='specials' style={{maxWidth: '1125px'}}>
      <h2 style={{fontSize:'40px'}}>This week's specials!</h2>
      <Link to='/#'>Online Menu</Link>
      <div className='card'>
        {props.specials.map(element => {
          return(
            <Card 
              photo={element.photo}
              dish={element.dish}
              price={element.price}
              description={element.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Specials;