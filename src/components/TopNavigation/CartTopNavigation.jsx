// All module imports
import { Link } from "react-router-dom";

// All local imports
import "./TopNavigation.css";
import logo from "../../assets/website-logo.png";

export function CartTopNavigation() {
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
                <button className="button button-warn">Logout</button>
            </div>
        </nav>
    );
}
