// All module imports
import { Link } from "react-router-dom";

// All local imports
import "./TopNavigation.css";
import logo from "../../assets/website-logo.png";
import { useProducts } from "../../context/products-context";
import { numOfProductsInCart } from "../../utils/numOfProductsInCart";

export function TopNavigation() {
    const { cart } = useProducts();

    return (
        <nav
            aria-label="Top navigation"
            className="navigation navigation-fixed navigation-standard"
        >
            <div className="navigation-left-container">
                <Link to="/" className="left-link">
                    <img src={logo} alt="Website logo" className="logo" />
                    <h3 className="navigation-title">OnSport</h3>
                </Link>
            </div>
            <div className="center-container">
                <button className="material-icons search-icon">search</button>
                <input
                    type="search"
                    placeholder="Search"
                    name=""
                    id=""
                    className="search-input"
                />
            </div>
            <div className="navigation-right-buttons-container">
                <Link to="/wishlist" className="navigation-button">
                    <i className="material-icons navigation-svg-icons">
                        favorite_border
                    </i>
                    <span className="navigation-button-text">Wishlist</span>
                </Link>
                <div className="button-with-badge badge-medium">
                    <Link to="/cart" className="badge-button">
                        <i className="material-icons-outlined navigation-svg-icons">
                            shopping_cart
                        </i>
                        <span className="navigation-button-text">Cart</span>
                        {cart.length === 0 ? (
                            ""
                        ) : (
                            <div className="badge-badge2">
                                {numOfProductsInCart()}
                            </div>
                        )}
                    </Link>
                </div>
                {/* <button className="button button-secondary">
                    <Link to="/login" className="login-signup-link">
                        Login
                    </Link>
                </button> */}
            </div>
        </nav>
    );
}
