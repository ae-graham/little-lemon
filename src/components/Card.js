

const Card = (props) => {
    return (
        <div className="card-item">
            <img src={props.photo} alt='Pictures of dishes' />
            <h2>{props.dish}</h2>
            <p style={{color: '#ee9972'}}>{`$${props.price}`}</p>
            <p style={{padding: '0 10px'}}>{props.description}</p>
            <br></br>
            <p><b>Order a delivery &#128757;</b></p>
        </div>
    )
}

export default Card;