// All module imports
import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// All local imports
import "./index.css";
import { App } from "./App";
import { ProductsProvider } from "./context/products-context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
