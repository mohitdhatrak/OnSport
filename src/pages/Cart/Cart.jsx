// All local imports
import cartStyles from "./Cart.module.css";
import cartEmpty from "../../assets/empty-cart.jpg";
import { CartTopNavigation } from "../../components/TopNavigation/CartTopNavigation";
import { useProducts } from "../../context/products-context";
import { CartProductCard } from "./components/CartProductCard";
import { CartPriceModal } from "./components/CartPriceModal";
import { numOfProductsInCart } from "../../utils/numOfProductsInCart";

export function Cart() {
    const { cart } = useProducts();

    function CartHeading() {
        return (
            <h2 className={cartStyles["cart-heading"]}>
                My Cart ({numOfProductsInCart()}{" "}
                {numOfProductsInCart() === 1 ? "item" : "items"})
            </h2>
        );
    }

    return (
        <>
            <CartTopNavigation />

            {numOfProductsInCart() === 0 ? (
                <main className={cartStyles["main-container"]}>
                    <CartHeading />

                    <div>
                        <img
                            src={cartEmpty}
                            alt="Empty cart"
                            className={cartStyles["cart-empty-image"]}
                        />
                        <h2 className={cartStyles["cart-empty-text"]}>
                            Cart is empty!
                        </h2>
                    </div>
                </main>
            ) : (
                <main className={cartStyles["grid-container"]}>
                    <CartHeading />

                    <ul className={cartStyles["cart-container"]}>
                        {cart.map((product) => (
                            <CartProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </ul>

                    <section className={cartStyles["price-modal"]}>
                        <CartPriceModal />
                    </section>
                </main>
            )}
        </>
    );
}
