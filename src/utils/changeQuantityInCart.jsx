export function changeQuantityInCart(cart, product, type) {
    // finding index of current product in cart array
    const positionInArr = cart.findIndex((obj) => obj._id === product._id);

    // creating a copy of cart array, without the current product
    const cartArrCopy = [...cart.filter((obj) => obj._id !== product._id)];

    // adding the current product in the above array copy, at the position it was earlier, and updating quantity depending on type
    switch (type) {
        case "increment":
            cartArrCopy.splice(positionInArr, 0, {
                ...product,
                quantityInCart: product.quantityInCart + 1,
            });
            return cartArrCopy;

        case "decrement":
            cartArrCopy.splice(positionInArr, 0, {
                ...product,
                quantityInCart: product.quantityInCart - 1,
            });
            return cartArrCopy;

        default:
            return;
    }
}
