// All module imports
import { createContext, useContext, useReducer } from "react";

// All local imports
import { productsReducerFn } from "../reducer/productsReducerFn.jsx";

const productsInitialState = {
    wishlist: [],
    cart: [],
};

const ProductsContext = createContext(productsInitialState);

export const ProductsProvider = ({ children }) => {
    const [{ wishlist, cart }, dispatch] = useReducer(
        productsReducerFn,
        productsInitialState
    );

    return (
        <ProductsContext.Provider value={{ wishlist, cart, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
