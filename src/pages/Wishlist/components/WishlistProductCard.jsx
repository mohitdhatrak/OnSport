// All module imports
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// All local imports
import "../../ProductListing/components/ProductCard/ProductCard.css";
import { useProducts } from "../../../context/products-context";
import { displayRatingStars } from "../../../utils/displayRatingStars";

export function WishlistProductCard({ product }) {
    const {
        imageSrc,
        imageAlt,
        bestSeller,
        title,
        description,
        price,
        percentDiscount,
    } = product;

    const navigate = useNavigate();
    const { cart, dispatch } = useProducts();
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);

    const isBestseller = () =>
        bestSeller ? <span className="card-badge">Bestseller</span> : "";

    function removeFromWishlist(event) {
        event.stopPropagation();

        setWishlistLoading(true);

        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });

        setWishlistLoading(false);
    }

    const removeFromWishlistBtn = () =>
        wishlistLoading ? (
            "..."
        ) : (
            <i className="material-icons card-svg-icons">highlight_off</i>
        );

    function moveToCart(event) {
        event.stopPropagation();

        setCartLoading(true);

        if (!isPresentInCart()) {
            dispatch({ type: "ADD_TO_CART", payload: product });
        }

        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });

        setCartLoading(false);
    }

    const isPresentInCart = () => cart.some((obj) => obj._id === product._id);

    return (
        <li
            className="card-item"
            onClick={() => navigate(`/product-detail/${product._id}`)}
        >
            <div className="card card-vertical card-with-dismiss">
                <div className="card-body">
                    <div className="card-image-header-container">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="card-image"
                        />
                        {isBestseller()}
                        <div className="card-secondary-buttons-container">
                            <button
                                className="card-button"
                                onClick={(event) => removeFromWishlist(event)}
                                disabled={wishlistLoading || cartLoading}
                            >
                                {removeFromWishlistBtn()}
                            </button>
                        </div>
                        <header className="card-header-container">
                            <h1 className="card-heading">{title}</h1>
                            <p className="card-subheading">{description}</p>
                            <p className="card-rating">
                                <span>Rating:</span>
                                <span className="rating rating-filled">
                                    {displayRatingStars(product)}
                                </span>
                            </p>
                        </header>
                    </div>
                    <p className="card-text">
                        <span>₹{(price * (100 - percentDiscount)) / 100}</span>
                        <s className="mrp">
                            <small>₹{price}</small>
                        </s>
                    </p>
                </div>
                <div className="card-footer">
                    <div className="card-primary-buttons-container">
                        <button
                            className="card-button"
                            onClick={(event) => moveToCart(event)}
                            disabled={cartLoading || wishlistLoading}
                        >
                            {cartLoading ? "Moving..." : "Move to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
