// All module imports
import axios from "axios";
import { useEffect, useState } from "react";

// All local imports
import productList from "./ProductListing.module.css";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import { FilterContainer } from "./components/FilterContainer/FilterContainer.jsx";
import {
    SortContainer,
    SortFooterContainer,
} from "./components/SortContainer/SortContainer.jsx";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";

export function ProductListing() {
    const [productsArr, setProductsArr] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { products },
                } = await axios.get("/api/products");
                setProductsArr(products);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            <TopNavigation />

            <main className={productList["main-container"]}>
                <section className={productList["side-drawer"]}>
                    <FilterContainer />
                </section>

                <section className={productList["main-content"]}>
                    <SortContainer />

                    <ul className={productList["card-container"]}>
                        {productsArr.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </ul>
                </section>
            </main>

            <SortFooterContainer />
        </>
    );
}
