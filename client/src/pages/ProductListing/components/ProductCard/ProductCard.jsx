// All module imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// All local imports
import "./ProductCard.css";
import { useProducts } from "../../../../context/products-context";
import { displayRatingStars } from "../../../../utils/displayRatingStars";

export function ProductCard({ product }) {
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
    const { wishlist, cart, dispatch } = useProducts();
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);

    const isBestseller = () =>
        bestSeller ? <span className="card-badge">Bestseller</span> : "";

    const isAddedToWishlist = () =>
        wishlist.some((obj) => obj._id === product._id);

    function wishlistAddOrRemove(event) {
        event.stopPropagation();

        setWishlistLoading(true);

        isAddedToWishlist()
            ? dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
            : dispatch({ type: "ADD_TO_WISHLIST", payload: product });

        setWishlistLoading(false);
    }

    const wishlistIcon = () => {
        return isAddedToWishlist() ? (
            <i className="material-icons card-svg-icons wishlist-icon">
                favorite
            </i>
        ) : (
            <i className="material-icons card-svg-icons">favorite_border</i>
        );
    };

    const isAddedToCart = () => cart.some((obj) => obj._id === product._id);

    const cartButtonText = () => (cartLoading ? "Adding..." : "Add to cart");

    const cartButtons = () =>
        isAddedToCart() ? (
            <Link
                to="/cart"
                className="card-button"
                onClick={(event) => event.stopPropagation()}
            >
                Go to cart
            </Link>
        ) : (
            <button
                className="card-button"
                onClick={(event) => addOrGoToCart(event)}
                disabled={cartLoading}
            >
                {cartButtonText()}
            </button>
        );

    function addOrGoToCart(event) {
        event.stopPropagation();

        setCartLoading(true);

        dispatch({ type: "ADD_TO_CART", payload: product });

        setCartLoading(false);
    }

    return (
        <li
            className="card-item"
            onClick={() => navigate(`/product-detail/${product._id}`)}
        >
            <div className="card card-vertical card-with-badge">
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
                                onClick={(event) => wishlistAddOrRemove(event)}
                                disabled={wishlistLoading}
                            >
                                {wishlistLoading ? "..." : wishlistIcon()}
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
                        {cartButtons()}
                    </div>
                </div>
            </div>
        </li>
    );
}
