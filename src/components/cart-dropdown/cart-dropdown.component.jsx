import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CartDropdown = ({addItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                addItems.map(addItem => <CartItem key={addItem.id} item={addItem}></CartItem>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({
    addItems:selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);