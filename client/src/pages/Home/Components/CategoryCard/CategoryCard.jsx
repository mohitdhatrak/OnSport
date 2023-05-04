// All module imports
import { Link } from "react-router-dom";

// All local imports
import "./CategoryCard.css";

export function CategoryCard({ category }) {
    const { imageSrc, imageAlt, text, subText } = category;

    return (
        <div className="clickable-category-card">
            <Link to="product-listing">
                <div className="category-card category-card-vertical category-card-text-overlay">
                    <div className="category-card-body">
                        <div className="category-card-image-header-container">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="category-card-image"
                            />
                            <header className="category-card-header-container">
                                <h1 className="category-card-heading">
                                    {text}
                                </h1>
                                <p className="category-card-subheading">
                                    {subText}
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
