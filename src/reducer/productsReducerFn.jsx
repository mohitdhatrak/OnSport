// All local imports
import { changeQuantityInCart } from "../utils/changeQuantityInCart";

export function productsReducerFn(state, action) {
    const { wishlist, cart } = state;
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...wishlist, { ...payload }],
            };

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: wishlist.filter((obj) => obj._id !== payload._id),
            };

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...cart, { ...payload, quantityInCart: 1 }],
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: cart.filter((obj) => obj._id !== payload._id),
            };

        case "INCREMENT_QUANTITY_IN_CART":
            return {
                ...state,
                cart: changeQuantityInCart(cart, payload, "increment"),
            };

        case "DECREMENT_QUANTITY_IN_CART":
            return {
                ...state,
                cart: changeQuantityInCart(cart, payload, "decrement"),
            };

        default:
            return state;
    }
}
