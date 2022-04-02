// All module imports
import { Routes, Route } from "react-router-dom";

// All local imports
import {
    Cart,
    Home,
    Login,
    ProductDetail,
    ProductListing,
    Signup,
    Wishlist,
} from "./pages";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}
