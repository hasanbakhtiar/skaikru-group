import SingleCard from "./SingleCard"
import phoneProducts from "../data/phones"

const Products = () => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        {phoneProducts.map(item=>(
          <SingleCard
          title={item.name}
          price={item.price}
          />

        ))}

      </div>
    </div>
  )
}

export default Products





