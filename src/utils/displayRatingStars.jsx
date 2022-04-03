// All local imports
import radio from "../pages/ProductListing/components/FilterContainer/FilterContainer.module.css";
import "../pages/ProductListing/components/ProductCard/ProductCard.css";

function numOfStars(num) {
    const arr = [];
    for (let index = num; index > 0; index--) arr.push(index);
    return arr;
}

export function displayRatingStars(obj) {
    const ratingNum = obj.numOfStars ?? obj.rating;

    return [...numOfStars(ratingNum)].map((num, index) => (
        <i
            key={`${obj._id}${index}`}
            className={`material-icons ${
                obj.rating
                    ? "rating-svg-icons"
                    : radio["rating-filter-svg-icons"]
            }`}
        >
            star
        </i>
    ));
}
