import { Link } from "react-router-dom";

export function CategoryCard({ category }) {
    return (
        <div className="clickable-card">
            <Link to="product-listing">
                <div className="card card-vertical card-text-overlay">
                    <div className="card-body">
                        <div className="card-image-header-container">
                            <img
                                src={category.imageSrc}
                                alt={category.imageAlt}
                                className="card-image"
                            />
                            <header className="card-header-container">
                                <h1 className="card-heading">
                                    {category.text}
                                </h1>
                                <p className="card-subheading">
                                    {category.subText}
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
