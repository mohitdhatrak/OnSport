// All local imports
import { useProducts } from "../context/products-context";

export function numOfProductsInCart() {
    const { cart } = useProducts();

    return cart.reduce(
        (totalProductsQuantity, currObj) =>
            currObj.quantityInCart + totalProductsQuantity,
        0
    );
}
