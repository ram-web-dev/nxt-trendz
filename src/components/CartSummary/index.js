import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      let noOfItems = 0

      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
        noOfItems += eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
          </div>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button d-sm-none">
                Checkout
              </button>
            }
          >
            <PaymentPopup noOfItems={noOfItems} total={total} />
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
