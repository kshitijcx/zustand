import products from "./products"

const ProductList = () => {
  return (
    <div>
        <ul>
            {products.map((item)=>(
                <li key={item.id}>
                    <h3>{item.product_name}</h3>
                    <p>{item.description}</p>
                    <button>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default ProductList