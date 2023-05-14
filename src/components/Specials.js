import {Link} from 'react-router-dom';
import Card from './Card'

const Specials = (props) => {
  return (
    <section className='specials' style={{maxWidth: '1125px'}}>
      <h2 style={{fontSize:'40px'}}>This week's specials!</h2>
      <Link to='/#'><strong>Online Menu</strong></Link>
      <div className='card'>
        {props.specials.map((element, index) => {
          return(
            <Card 
              key={index}
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