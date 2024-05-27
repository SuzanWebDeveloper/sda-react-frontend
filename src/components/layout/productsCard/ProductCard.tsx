import { Link } from "react-router-dom"

import { Product } from "@/types"
import "./productCard.css"
import { AppDispatch } from "@/toolkit/store"
import { useDispatch } from "react-redux"
import { addToCart } from "@/toolkit/slices/cartSlice"

const ProductCard = (props: { product: Product }) => {

  const { product } = props // destructure
  const dispatch: AppDispatch = useDispatch()

  const handleAddToCart = (product: Product) =>
    {
      dispatch(addToCart(product))
    }

  return (
    <article className="product card">
      <img src={product.image} alt={product.name} className="product__img" />
      <div className="product__body">
        <h4> {product.name}</h4>
        <p>
          Price:{" "}
          {product.price.toLocaleString("en-us", {
            style: "currency",
            currency: "USD"
          })}
        </p>
        <div>
          <Link to={`/products/${product.slug}`}>
            <button className="btn product__btn">
              Show Details &nbsp;<i className="fa fa-eye" aria-hidden="true"></i>
            </button>
          </Link>

          <button className="btn product__btn" onClick={() => handleAddToCart(product)}>
            Add To Cart &nbsp;<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
