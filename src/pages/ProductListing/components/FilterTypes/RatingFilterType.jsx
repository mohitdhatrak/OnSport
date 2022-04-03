// All local imports
import radio from "../FilterContainer/FilterContainer.module.css";
import { displayRatingStars } from "../../../../utils/displayRatingStars";

export function RatingFilterType({ typeObj }) {
    const { numOfStars, name } = typeObj;

    return (
        <li className={radio["list-item"]}>
            <div className={radio["rating-filter"]}>
                <input
                    type="radio"
                    name={name}
                    id={`${name}${numOfStars}`}
                    className={radio["input-checkbox"]}
                />
                <label
                    htmlFor={`${name}${numOfStars}`}
                    className={radio["checkbox-label"]}
                >
                    {displayRatingStars(typeObj)}
                    <span className={radio["rating-filter-text"]}>& above</span>
                </label>
            </div>
        </li>
    );
}
