

const Card = (props) => {
    return (
        <div>
            <img src={props.photo} alt='photograph of food dish' width='228' height='200' />
            <h2>{props.dish}</h2>
            <p style={{color: '#ee9972'}}>{`$${props.price}`}</p>
            <p style={{padding: '0 10px'}}>{props.description}</p>
            <br></br>
            <p><b>Order a delivery &#128757;</b></p>
        </div>
    )
}

export default Card;