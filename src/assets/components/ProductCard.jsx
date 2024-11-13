

const Card = ({name , category, brand, price}) => {


  return (
    <div className="m-4">
    <div className="bg-red-300 text-center">
    <h2 className="text-2xl text-red-100 mb-3">{name}</h2>
    <div>{category}</div>
    <div>{brand}</div>
    <div className="text-xl text-yellow-600">${price}</div>
    <button className="bg-black text-white px-5 py-2 rounded mb-2">Shop Now</button>

    
    </div>

    </div>
  )
}

export default Card