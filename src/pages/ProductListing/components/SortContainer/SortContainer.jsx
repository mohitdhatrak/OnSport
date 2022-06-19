// All local imports
import sortStyles from "./SortContainer.module.css";
import { sortData } from "../../../../data";

export function SortContainer() {
    return (
        <div className={sortStyles["sort-container"]}>
            <button>
                <ul className={sortStyles["sort-selected"]}>
                    <li>Sort by :</li>
                    <li className={sortStyles["dropdown-item"]}>
                        <b>Best selling</b>
                    </li>
                    <li>
                        <i
                            className={`material-icons ${sortStyles["dropdown-icon"]}`}
                        >
                            arrow_drop_down
                        </i>
                    </li>
                </ul>
            </button>
            <ul className={sortStyles["sort-options"]}>
                {sortData.map((type) => (
                    <button key={type} className={sortStyles["dropdown-item"]}>
                        {type}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export function SortFooterContainer() {
    return (
        <footer className={sortStyles["footer-container"]}>
            <div className={sortStyles["small-screen-footer"]}>
                <button className={sortStyles["footer-buttons"]}>
                    <i
                        className={`material-icons ${sortStyles["footer-icons"]}`}
                    >
                        filter_alt
                    </i>
                    <span>Filter</span>
                </button>
                <button className={sortStyles["footer-buttons"]}>
                    <i
                        className={`material-icons ${sortStyles["footer-icons"]}`}
                    >
                        sort
                    </i>
                    <span>Sort</span>
                </button>
            </div>
        </footer>
    );
}
