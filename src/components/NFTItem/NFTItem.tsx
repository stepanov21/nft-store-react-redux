import React from "react"
import { useSelector } from "react-redux"
import {
  addToCart,
  cartSelector,
  deleteFromCart
} from "../../redux/slice/cartSlice"
import { useAppDispatch } from "../../redux/store"
import style from "./NFTItem.module.scss"

type TNft = {
  id: string
  order: number
  imgUrl: string
  price: number
  author: string
  views: number
}

const NFTItem: React.FC<TNft> = ({
  id,
  order,
  imgUrl,
  price,
  author,
  views
}) => {
  const { items: itemsInCart } = useSelector(cartSelector)
  const isActive = itemsInCart.some(item => item.id === id)

  const dispatch = useAppDispatch()

  return (
    <>
      {/* <Tilt options={{ max : 25, scale: 1.05, perspective: 1000, speed: 300}} className={style.tilt}> */}
      <div className={style.wrapper}>
        <div className={style.img}>
          <img src={imgUrl} alt='NFT-Preview' />
        </div>
        <div className={style.descr}>
          <div className={style.order}>#{order}</div>
          <div className={style.price}>{price} ETH</div>
        </div>
        <div className={style.postDescr}>
          <div className={style.author}>
            Owned by <span>{author}</span>
          </div>
          <div className={style.watcher}>{views} views</div>
        </div>
        {!isActive ? (
          <button
            onClick={() => dispatch(addToCart({ id, imgUrl, order, price }))}
          >
            Add to cart
          </button>
        ) : (
          <button
            className={style.checked}
            onClick={() => dispatch(deleteFromCart(id))}
          >
            <svg
              width='15'
              height='15'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 10L8.70536 13.75L15 6.25'
                stroke='#4DDFBC'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Allready in cart
          </button>
        )}
      </div>
      {/* </Tilt> */}
    </>
  )
}

export default NFTItem
