// All local imports
import sortStyles from "./SortContainer.module.css";

export function SortContainer() {
    return (
        <div className={sortStyles["sort-container"]}>
            <ul className={sortStyles["sort-options"]}>
                <li>Sort by :</li>
                <li className={sortStyles["dropdown-item"]}>
                    <b>Price: Low to High</b>
                </li>
                <button>
                    <i
                        className={`material-icons ${sortStyles["dropdown-icon"]}`}
                    >
                        arrow_drop_down
                    </i>
                </button>
            </ul>
            <ul></ul>
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
