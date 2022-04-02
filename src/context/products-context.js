// All module imports
import { createContext, useContext, useReducer } from "react";

// All local imports
import { productsReducerFn } from "../reducer/productsReducerFn.jsx";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducerFn, {
        cart: [],
        wishlist: [],
    });

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
