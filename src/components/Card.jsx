import rainbowSalad from './assets/rainbow-salad.jpg';

const Card = () => {
  return (
    <div className="card">
        <div className='card-img'>
            <img src={rainbowSalad} alt='Rainbow Salad' />
        </div>
        <div className="card-descript">
            <h3>Rainbow Salad</h3>
            <p>Naturally vegan and gluten-free with bright and colourful mix of vegetables.</p>
        </div>
    </div>
  )
}

export default Card;