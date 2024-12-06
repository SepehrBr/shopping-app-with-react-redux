/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import  ArrowDown  from "../../icons/ArrowDown"
import  ArrowUp  from "../../icons/ArrowUp"
import { clearCart } from "./carSlice";
export default function CartItem({ item }) {
    const cartDispatcher = useDispatch();

    return (
        <article className="cart-item">
            <img src="" alt="" />
            <div>
                <h4>{item.title}</h4>
                <h4 className="item-price">$ {item?.price}</h4>
                <button className="remove-btn" onClick={() => cartDispatcher(clearCart(item.id))}>Remove From Cart</button>
            </div>
            <div>
                <button className="amount-btn">
                    <ArrowUp item={item} />
                </button>
                <p className="amount">{item?.amount}</p>
                <button className="amount-btn">
                    <ArrowDown item={item} />
                </button>
            </div>
        </article>
    )
}
