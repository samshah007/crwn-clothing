import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItems = (item) => ({
    type:cartActionTypes.ADD_ITEMS,
    payload:item
});
export const removeItemFromCart = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
});
export const removeItem = (item) => ({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
});