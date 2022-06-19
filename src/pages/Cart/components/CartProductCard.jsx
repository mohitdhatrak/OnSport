// All module imports
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// All local imports
import "./CartProductCard.css";
import { displayRatingStars } from "../../../utils/displayRatingStars";
import { useProducts } from "../../../context/products-context";

export function CartProductCard({ product }) {
    const {
        imageSrc,
        imageAlt,
        title,
        sellerName,
        price,
        percentDiscount,
        quantityInCart,
    } = product;

    const navigate = useNavigate();
    const { wishlist, dispatch } = useProducts();
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [quantityLoading, setQuantityLoading] = useState(false);

    function removeFromCart(event) {
        event.stopPropagation();

        setCartLoading(true);

        dispatch({ type: "REMOVE_FROM_CART", payload: product });

        setCartLoading(false);
    }

    function moveToWishlist(event) {
        event.stopPropagation();

        setWishlistLoading(true);

        if (!isPresentInWishlist()) {
            dispatch({ type: "ADD_TO_WISHLIST", payload: product });
        }

        dispatch({ type: "REMOVE_FROM_CART", payload: product });

        setWishlistLoading(false);
    }

    const isPresentInWishlist = () =>
        wishlist.some((obj) => obj._id === product._id);

    function updateQuantityInCart(event, type) {
        event.stopPropagation();

        setQuantityLoading(true);

        switch (type) {
            case "increment":
                if (quantityInCart < 10) incrementQuantity();
                // else "display a toast saying, sorry you can't order a quantity more than 10 of a single product, to avoid reselling... or max quantity per order limit reached!"
                break;

            case "decrement":
                if (quantityInCart > 1) decrementQuantity();
                // else "display a toast saying, minimum quantity is 1 (can't be zero)"
                // writing else can be better since it gives user feedback why button not working, though its obvious over here
                // or write a condition when quan === 1 , disable decrement button, done below check
                break;

            default:
                break;
        }

        setQuantityLoading(false);
    }

    const incrementQuantity = () =>
        dispatch({ type: "INCREMENT_QUANTITY_IN_CART", payload: product });

    const decrementQuantity = () =>
        dispatch({ type: "DECREMENT_QUANTITY_IN_CART", payload: product });

    return (
        <li
            className="cart-card-item"
            onClick={() => navigate(`/product-detail/${product._id}`)}
        >
            <div className="cart-card cart-card-horizontal">
                <div className="cart-card-body">
                    <div className="cart-card-image-header-container">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="cart-card-image"
                        />
                        <header className="cart-card-header-container">
                            <h1 className="cart-card-heading">{title}</h1>
                            <p className="cart-card-subheading">
                                <small>Sold by: {sellerName} </small>
                            </p>
                            <p className="cart-card-subheading">
                                <span className="cart-discount-price">
                                    ₹{(price * (100 - percentDiscount)) / 100}
                                </span>
                                <s className="cart-mrp">
                                    <small>₹{price}</small>
                                </s>
                            </p>
                            <p className="cart-card-subheading">
                                <span>Rating:</span>
                                <span className="rating rating-outline">
                                    {displayRatingStars(product)}
                                </span>
                            </p>
                            <p className="cart-card-subheading">
                                <span>Quantity: </span>
                                <button
                                    className="cart-quantity-button"
                                    onClick={(event) =>
                                        updateQuantityInCart(event, "decrement")
                                    }
                                    disabled={
                                        quantityLoading || quantityInCart === 1
                                            ? true
                                            : false
                                    }
                                >
                                    <i className="material-icons cart-quantity-icons">
                                        remove_circle_outline
                                    </i>
                                </button>
                                <input
                                    type="text"
                                    className="cart-quantity-display"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    value={
                                        quantityLoading ? "..." : quantityInCart
                                    }
                                />
                                <button
                                    className="cart-quantity-button"
                                    onClick={(event) =>
                                        updateQuantityInCart(event, "increment")
                                    }
                                    disabled={quantityLoading}
                                >
                                    <i className="material-icons cart-quantity-icons">
                                        control_point
                                    </i>
                                </button>
                            </p>
                        </header>
                    </div>
                </div>
                <div className="cart-card-footer">
                    <div className="cart-card-primary-buttons-container">
                        <button
                            className="cart-card-button"
                            onClick={(event) => removeFromCart(event)}
                            disabled={cartLoading || wishlistLoading}
                        >
                            {cartLoading ? "Removing..." : "Remove"}
                        </button>
                        <button
                            className="cart-card-button"
                            onClick={(event) => moveToWishlist(event)}
                            disabled={wishlistLoading || cartLoading}
                        >
                            {wishlistLoading ? "Moving..." : "Move to wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
