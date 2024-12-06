/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/carSlice";

export default function ArrowDown({ item }) {
    const cartDispatcher = useDispatch();

    return (
        <svg
            onClick={() => cartDispatcher(removeItem(item))}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
    );
};
