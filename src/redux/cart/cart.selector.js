import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.addItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    addItems => addItems.reduce((accumalatedQuantity,addItem) => accumalatedQuantity + addItem.quantity,0)
);

export const selectCartItemHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);