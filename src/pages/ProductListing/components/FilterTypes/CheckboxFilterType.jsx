// All local imports
import checkbox from "../FilterContainer/FilterContainer.module.css";

export function CheckboxFilterType({ type }) {
    return (
        <li className={checkbox["list-item"]}>
            <input
                type="checkbox"
                name={type}
                id={type.split(" ").join("-")}
                className={checkbox["input-checkbox"]}
            />
            <label
                className={checkbox["checkbox-label"]}
                htmlFor={type.split(" ").join("-")}
            >
                {type}
            </label>
        </li>
    );
}
