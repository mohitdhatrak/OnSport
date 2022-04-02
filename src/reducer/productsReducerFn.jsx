export function productsReducerFn(state, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, { ...payload }],
            };

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...payload }],
            };

        default:
            return state;
    }
}
