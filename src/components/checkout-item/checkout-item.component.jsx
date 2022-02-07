import React from "react";

import { connect } from "react-redux";
import { removeItemFromCart , addItems, removeItem} from "../../redux/cart/cart.actions";

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItem, addItems, removeItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt={name} src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItems(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem:(item) => dispatch(removeItemFromCart(item)),
    addItems:(item) => dispatch(addItems(item)),
    removeItem:(item) => dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);