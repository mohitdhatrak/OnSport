// All module imports
import { Link } from "react-router-dom";

// All local imports
import "./TopNavigation.css";
import logo from "../../assets/website-logo.png";

export function WishlistTopNavigation() {
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
                <div className="button-with-badge badge-medium">
                    <Link to="/cart" className="badge-button">
                        <i className="material-icons-outlined navigation-svg-icons">
                            shopping_cart
                        </i>
                        <span className="navigation-button-text">Cart</span>
                        <div className="badge-badge2">8</div>
                    </Link>
                </div>
                <button className="button button-warn">Logout</button>
            </div>
        </nav>
    );
}
