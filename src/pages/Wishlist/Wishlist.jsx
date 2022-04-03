// All local imports
import wishList from "./Wishlist.module.css";
import wishlistEmpty from "../../assets/empty-wishlist.jpg";
import { useProducts } from "../../context/products-context";
import { WishlistTopNavigation } from "../../components/TopNavigation/WishlistTopNavigation";
import { WishlistProductCard } from "./components/WishlistProductCard";

export function Wishlist() {
    const { wishlist } = useProducts();

    return (
        <>
            <WishlistTopNavigation />

            <main className={wishList["main-content"]}>
                <h2 className={wishList["wishlist-heading"]}>
                    My Wishlist ({wishlist.length}{" "}
                    {wishlist.length === 1 ? "item" : "items"})
                </h2>
                {wishlist.length === 0 ? (
                    <div>
                        <img
                            src={wishlistEmpty}
                            alt="Empty wishlist"
                            className={wishList["wishlist-empty-image"]}
                        />
                        <h2 className={wishList["wishlist-empty-text"]}>
                            Wishlist is empty!
                        </h2>
                    </div>
                ) : (
                    <ul className={wishList["card-container"]}>
                        {wishlist.map((product) => (
                            <WishlistProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
}
