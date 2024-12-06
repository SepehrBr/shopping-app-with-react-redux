/* eslint-disable react/prop-types */
import  ArrowDown  from "../../icons/ArrowDown"
import  ArrowUp  from "../../icons/ArrowUp"
export default function CartItem({ item }) {

    return (
        <article className="cart-item">
            <img src="" alt="" />
            <div>
                <h4>{item.title}</h4>
                <h4 className="item-price">$ {item?.price}</h4>
                <button className="remove-btn">Remove From Cart</button>
            </div>
            <div>
                <button className="amount-btn">
                    <ArrowUp />
                </button>
                <p className="amount">{item?.amount}</p>
                <button className="amount-btn">
                    <ArrowDown />
                </button>
            </div>
        </article>
    )
}
