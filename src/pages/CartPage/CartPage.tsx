import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { cartSelector, clearAllCart } from "../../redux/slice/cartSlice";
import { useAppDispatch } from "../../redux/store";
import style from "./CartPage.module.scss";

const CartPage: React.FC = () => {
  const { items: cartItems, totalPrice } = useSelector(cartSelector);

  const dispatch = useAppDispatch();

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <div className={style.header}>
            <h1>Cart</h1>
            <div
              onClick={() => dispatch(clearAllCart())}
              className={style.clear}
            >
              <span>CLEAR ALL</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M28.9877 14.2023C28.9877 14.2023 28.1732 24.3048 27.7007 28.5603C27.4757 30.5928 26.2202 31.7838 24.1637 31.8213C20.2502 31.8918 16.3322 31.8963 12.4202 31.8138C10.4417 31.7733 9.20717 30.5673 8.98667 28.5708C8.51117 24.2778 7.70117 14.2023 7.70117 14.2023"
                  stroke="#4DDFBC"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.0625 9.35955H5.62549"
                  stroke="#4DDFBC"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.1609 9.35955C24.9834 9.35955 23.9694 8.52705 23.7384 7.37355L23.3739 5.54955C23.1489 4.70805 22.3869 4.12605 21.5184 4.12605H15.1689C14.3004 4.12605 13.5384 4.70805 13.3134 5.54955L12.9489 7.37355C12.7179 8.52705 11.7039 9.35955 10.5264 9.35955"
                  stroke="#4DDFBC"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {cartItems && cartItems.map((item) => <CartItem {...item} />)}
          <div className={style.total_wrapper}>
            <span className={style.want}>
              You want to buy <span>{cartItems.length}</span> NFT’s cards
            </span>
            <span className={style.total}>
              Total Price: <span>{totalPrice} ETH</span>
            </span>
          </div>
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default CartPage;
