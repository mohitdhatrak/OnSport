// All module imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const { wishlist, dispatch } = useProducts();
    const [wishlistLoading, setWishlistLoading] = useState(false);

    const isAddedToWishlist = () =>
        wishlist.some((obj) => obj._id === product._id);

    const wishlistIcon = () => {
        return isAddedToWishlist() ? (
            <i className="material-icons card-svg-icons wishlist-icon">
                favorite
            </i>
        ) : (
            <i className="material-icons card-svg-icons">favorite_border</i>
        );
    };

    return (
        <li
            className="card-item"
            onClick={() => navigate(`/product-detail?id=${product._id}`)}
        >
            <div className="card card-vertical card-with-badge">
                <div className="card-body">
                    <div className="card-image-header-container">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="card-image"
                        />
                        {bestSeller ? (
                            <span className="card-badge">Bestseller</span>
                        ) : (
                            ""
                        )}
                        <div className="card-secondary-buttons-container">
                            <button
                                className="card-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setWishlistLoading(true);
                                    isAddedToWishlist()
                                        ? dispatch({
                                              type: "REMOVE_FROM_WISHLIST",
                                              payload: product,
                                          })
                                        : dispatch({
                                              type: "ADD_TO_WISHLIST",
                                              payload: product,
                                          });
                                    setWishlistLoading(false);
                                }}
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
                        <button className="card-button">Add to cart</button>
                    </div>
                </div>
            </div>
        </li>
    );
}
