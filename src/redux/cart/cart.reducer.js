import { cartActionTypes } from "./cart.types";
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
                addItems: [...state.addItems,action.payload]
            }
        default:
            return state;
    }
}
export default cartReducer;