import Star from "./Star";

const Review = (props) => {
  
  return (
    <div className="review">
      <img src={props.avatar} alt='Avatar' width={100}/>
      <h2 style={{margin: '5px 0'}}>{props.name}</h2>
      <p style={{padding: '0 20px'}}>{props.review}</p>
      <Star rating={props.rating} />
    </div>
  )
}

export default Review;