// All module imports
import { useNavigate } from "react-router-dom";

// All local
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
    const { dispatch } = useProducts();

    return (
        <li
            className="card-item"
            onClick={() => navigate(`/product-detail?id=${product._id}`)}
        >
            <div className="card card-vertical card-with-dismiss">
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
                                    dispatch({
                                        type: "REMOVE_FROM_WISHLIST",
                                        payload: product,
                                    });
                                }}
                            >
                                <i className="material-icons card-svg-icons">
                                    highlight_off
                                </i>
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
                        <button className="card-button">Move to cart</button>
                    </div>
                </div>
            </div>
        </li>
    );
}
