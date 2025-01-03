import {Component} from 'react'

import './index.css'

class PaymentPopup extends Component {
  state = {
    paymentMethod: '',
    isOrderPlaced: false,
  }

  onChangePaymentMethod = e => {
    this.setState({paymentMethod: e.target.value})
  }

  onOrderPlace = () => {
    this.setState({isOrderPlaced: true})
  }

  render() {
    const {paymentMethod, isOrderPlaced} = this.state
    const {noOfItems, total} = this.props
    return (
      <div className="popup-container">
        <h1 className="payment-heading">Payment Summary</h1>
        <div>
          <p className="payment-details-text">
            Number of Items :
            <span className="payment-details-text-dark">{noOfItems}</span>
          </p>
          <p className="payment-details-text">
            Total Amount :
            <span className="payment-details-text-dark">{total}</span>
          </p>
        </div>
        <div>
          <label className="payment-details-text" htmlFor="paymentMethod">
            Payment Method:{' '}
          </label>
          <select
            className="payment-methods"
            value={paymentMethod}
            onChange={this.onChangePaymentMethod}
            id="paymentMethod"
          >
            <option value="">Choose your method</option>
            <option value="CREDIT_CARD" disabled>
              💳 Credit Card
            </option>
            <option value="NET_BANKING" disabled>
              🌐 Net Banking
            </option>
            <option value="UPI" disabled>
              📲 UPI
            </option>
            <option value="CASH_ON_DELIVERY">💵 Cash on Delivery</option>
          </select>
        </div>
        {paymentMethod === 'CASH_ON_DELIVERY' && !isOrderPlaced && (
          <button className="confirm-button" onClick={this.onOrderPlace}>
            Confirm Order
          </button>
        )}
        {isOrderPlaced && (
          <p className="success-message">
            Your order has been placed successfully
          </p>
        )}
      </div>
    )
  }
}

export default PaymentPopup
