import Review from "./Review"

const Testimonials = () => {
  const testimonials = [
    {
      avatar: 'https://i.pravatar.cc/100?img=51',
      name: 'Leon W.',
      rating: 5,
      review: 'Best experience ever! The waitress did an excellent job. After my meal, I was knocked into a food coma. The food was cooked to perfection. Easily earned their 5 stars!',
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=9',
      name: 'Elisa M.',
      rating: 4,
      review: 'This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! There were a lot of interesting decorations on the walls. Everything was mostly decadent. I could see myself being a regular here.'
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=12',
      name: 'Juan A.',
      rating: 2,
      review: "This place was just ok. The waitress was mediocre at best. I asked for my steak medium-well, but it was burnt to a crisp. I shouldn't have to pay good money to be served vegetables from a can. Overall experience: 2 stars."
    }
  ]
  
  return(
    <section style={{width: '90%', margin: '0 auto', maxWidth: '1125px'}}>
      <h2 style={{fontSize: '40px'}}>What our customers say!</h2>
      <div className='card-testimonial'>
        {testimonials.map((element, index) => {
          return(
            <Review 
              key={index}
              avatar={element.avatar}
              name={element.name}
              rating={element.rating}
              review={element.review}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials;