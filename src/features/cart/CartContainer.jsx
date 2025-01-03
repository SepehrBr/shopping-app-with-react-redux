import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import { clearCart } from "./carSlice";

export default function CartContainer() {
    const { cartItems, total, amount } = useSelector(state => state.cart);
    const cartDispatcher = useDispatch();

    return (
        <>
            {
                (amount < 1)
                ?
                <section className="cart">
                    <header>
                        <h2>Your Bag</h2>
                        <h4 className="empty-cart">Is Currently Empty</h4>
                    </header>
                </section>
                :
                <section className="cart">
                    <header>
                        <h2>Your Bag</h2>
                    </header>
                    <div>
                        {
                            cartItems.map(item => <CartItem key={item.id} item={item} />)
                        }
                    </div>
                    <footer>
                        <hr />
                        <div className="cart-total">
                            <h4>
                                Total <span>$ {total}</span>
                            </h4>
                        </div>
                        <button className="btn clear-btn" onClick={() => cartDispatcher(clearCart())}>Clear Cart</button>
                    </footer>
                </section>
            }
        </>
    )
}
