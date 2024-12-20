import cart_icon from "./assets/cart_icon.svg"
//import "./layout/navbar/navbar.css"

const CartIcon = ({ value }: { value: number }) => {
  return (
    <>
      {/* <i className="fa fa-shopping-cart" aria-hidden="true"></i> */}

      <img src={cart_icon} className="nav-login-cart__icon" alt="cart-icon" />
      <span className="nav-cart-count">{value}</span>

      {/* <div className="nav-login-cart__icon ">
        <i className="fa fa-shopping-cart fa-1x" ></i>
        <span className="nav-cart-count">{value}</span>
      </div> */}
    </>
  )
}

export default CartIcon
