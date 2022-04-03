// All local imports
import filterStyles from "./FilterContainer.module.css";
import { filtersData, ratingFilter } from "../../../../data";
import { CheckboxFilterType } from "../FilterTypes/CheckboxFilterType";
import { RatingFilterType } from "../FilterTypes/RatingFilterType";

export function FilterContainer() {
    return (
        <aside
            aria-label="Filter options"
            className={filterStyles["filter-container"]}
        >
            <ul className={filterStyles["header-partition"]}>
                <li className={filterStyles["list-item"]}>
                    <h3 className={filterStyles["heading"]}>Filters</h3>
                </li>
                <li className={filterStyles["list-item"]}>
                    <button className={filterStyles["clear-button"]}>
                        Clear All
                    </button>
                </li>
            </ul>

            {filtersData.map((filterPartition) => (
                <ul
                    key={filterPartition.title}
                    className={filterStyles["filter-partition"]}
                >
                    <li className={filterStyles["list-item"]}>
                        <h3 className={filterStyles["sub-heading"]}>
                            {filterPartition.title}
                        </h3>
                    </li>
                    {filterPartition.types.map((type) => (
                        <CheckboxFilterType key={type} type={type} />
                    ))}
                </ul>
            ))}

            <ul className={filterStyles["filter-partition"]}>
                <li className={filterStyles["list-item"]}>
                    <h3 className={filterStyles["sub-heading"]}>Rating</h3>
                </li>
                {ratingFilter.map((typeObj) => (
                    <RatingFilterType
                        key={typeObj.numOfStars}
                        typeObj={typeObj}
                    />
                ))}
            </ul>
        </aside>
    );
}
