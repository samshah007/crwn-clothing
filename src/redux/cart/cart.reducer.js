import { cartActionTypes } from "./cart.types";
import { addItemsToCart,removeItemFromCart, removeItem } from "./cart.utils";
const INITIAL_STATE = {
    hidden : true,
    addItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEMS:
            return{
                ...state,
                addItems: addItemsToCart(state.addItems,action.payload)
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                addItems: removeItemFromCart(state.addItems,action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                addItems: removeItem(state.addItems,action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;