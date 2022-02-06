import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({addItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                addItems.length ?
                addItems.map(addItem => <CartItem key={addItem.id} item={addItem}></CartItem>)
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({
    addItems:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));