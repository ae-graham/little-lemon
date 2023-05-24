
const Star = (props) => {

  return(
    <div>
      {[...Array(props.rating)].map(() => {return <span>&#9733;</span>})}
    </div>
  )
}
export default Star;