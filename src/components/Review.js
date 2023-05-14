

const Review = (props) => {
  const star_rating = new Array(props.rating);
  console.log(star_rating);
  
  return (
    <div className="review">
      <img src={props.avatar} alt='Avatar' width={100}/>
      <h2 style={{margin: '5px 0'}}>{props.name}</h2>
      <p style={{padding: '0 20px'}}>{props.review}</p>
      <div>
        {[...star_rating].map(element => {return (
          <span>&#9733;</span>
        )})}
      </div>
    </div>
  )
}

export default Review;