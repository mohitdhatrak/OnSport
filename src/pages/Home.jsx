import {
    accessoriesBanner,
    apparelBanner,
    equipmentBanner,
    jerseysBanner,
    mainBanner,
    shoesBanner,
    trophiesBanner,
} from "../assets/home";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { TopNavigation } from "../components/TopNavigation.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";

export function Home() {
    const productCategories = [
        {
            imageSrc: equipmentBanner,
            imageAlt: "Sports equipment banner",
            text: "Sports equipment",
            subText: "Upto 30% off",
        },
        {
            imageSrc: apparelBanner,
            imageAlt: "Sports apparel banner",
            text: "Sports apparel",
            subText: "Upto 40% off",
        },
        {
            imageSrc: shoesBanner,
            imageAlt: "Sports shoes banner",
            text: "Sports shoes",
            subText: "Upto 25% off",
        },
        {
            imageSrc: jerseysBanner,
            imageAlt: "Original team jerseys banner",
            text: "Original team jerseys",
            subText: "Upto 20% off",
        },
        {
            imageSrc: accessoriesBanner,
            imageAlt: "Sports accessories banner",
            text: "Sports accessories",
            subText: "Upto 50% off",
        },
        {
            imageSrc: trophiesBanner,
            imageAlt: "Sports trophies banner",
            text: "Trophies and medals",
            subText: "Upto 30% off",
        },
    ];

    return (
        <>
            <TopNavigation />

            <main>
                <section className="main-banner">
                    <div className="image-container">
                        <img
                            src={mainBanner}
                            alt="Sports theme banner"
                            className="image"
                        />
                        <div className="overlay-text-container">
                            <p className="overlay-text">
                                Get best deals on sports merchandise! Flat 50%
                                off on first order!
                            </p>
                            <Link
                                to="product-listing"
                                className="overlay-button"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="cards-container">
                    {productCategories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </section>
            </main>
        </>
    );
}
