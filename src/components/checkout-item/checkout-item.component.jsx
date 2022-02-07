import React from "react";
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem: {name, imageUrl, quantity, price}}) => {
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt={name} src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}
export default CheckoutItem;