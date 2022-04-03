// All module imports
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// All local imports
import home from "./Home.module.css";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation.jsx";
import { CategoryCard } from "./components/CategoryCard/CategoryCard.jsx";
import mainBanner from "../../assets/main-banner.jpg";

export function Home() {
    const [categoriesArr, setCategoriesArr] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { categories },
                } = await axios.get("/api/categories");
                setCategoriesArr(categories);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            <TopNavigation />

            <main>
                <section className={home["main-banner"]}>
                    <div className={home["image-container"]}>
                        <img
                            src={mainBanner}
                            alt="Sports theme banner"
                            className={home.image}
                        />
                        <div className={home["overlay-text-container"]}>
                            <p className={home["overlay-text"]}>
                                Get best deals on sports merchandise! Flat 50%
                                off on first order!
                            </p>
                            <Link
                                to="product-listing"
                                className={home["overlay-button"]}
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={home["cards-container"]}>
                    {categoriesArr.map((category) => (
                        <CategoryCard key={category._id} category={category} />
                    ))}
                </section>
            </main>
        </>
    );
}
