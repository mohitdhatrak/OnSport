export function productsReducerFn(state, action) {
    const { wishlist } = state;
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

        default:
            return state;
    }
}
