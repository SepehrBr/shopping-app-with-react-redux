import { useSelector } from "react-redux"
import CartItem from "./CartItem";

export default function CartContainer() {
    const { cartItems, total, amount } = useSelector(state => state.cart);

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
                    <ul>
                        {
                            cartItems.map(item => {
                                <CartItem key={item.id} item={item} />
                            })
                        }
                    </ul>
                    <footer>
                        <hr />
                        <div className="cart-total">
                            <h4>
                                Total <span>$ {total}</span>
                            </h4>
                        </div>
                        <button className="btn clear-btn">Clear Cart</button>
                    </footer>
                </section>
            }
        </>
    )
}
