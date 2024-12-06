/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/carSlice";

export default function ArrowUp({ item }) {
    const cartDispatcher = useDispatch();

    return (
        <svg
            onClick={() => cartDispatcher(addItem(item))}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
        </svg>
    )
}
