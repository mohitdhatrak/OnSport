// All local imports
import "./CartPriceModal.css";
import { useProducts } from "../../../context/products-context";
import { numOfProductsInCart } from "../../../utils/numOfProductsInCart";

export function CartPriceModal() {
    const { cart } = useProducts();

    const findTotalPrice = () =>
        cart.reduce((totalPrice, currObj) => {
            const { price, quantityInCart } = currObj;
            return price * quantityInCart + totalPrice;
        }, 0);

    const findTotalDiscount = () =>
        cart.reduce((totalDiscount, currObj) => {
            const { price, quantityInCart, percentDiscount } = currObj;
            return (
                ((price * percentDiscount) / 100) * quantityInCart +
                totalDiscount
            );
        }, 0);

    return (
        <div className="modal confirmation-modal">
            <h2 className="modal-title">
                Cart details ({numOfProductsInCart()}{" "}
                {numOfProductsInCart() === 1 ? "item" : "items"})
            </h2>
            <div className="modal-body">
                <div className="money-details">
                    <span className="modal-text">Total MRP:</span>
                    <span>₹{findTotalPrice()}</span>
                </div>
                <div className="money-details">
                    <span className="modal-text">Total discount:</span>
                    <span className="highlight-item">
                        - ₹{findTotalDiscount()}
                    </span>
                </div>
                <div className="money-details">
                    <span className="modal-text">Delivery charge:</span>
                    <span className="highlight-item">Free</span>
                </div>
                <hr className="divider-line" />
                <div className="money-details total-amount">
                    <span className="modal-text">Total amount:</span>
                    <span>₹{findTotalPrice() - findTotalDiscount()}</span>
                </div>
            </div>
            <div className="modal-buttons-container">
                <button className="modal-button">Place order</button>
            </div>
        </div>
    );
}
