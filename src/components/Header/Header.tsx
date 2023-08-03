import React, { memo } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { cartSelector } from "../../redux/slice/cartSlice"
import style from "./Header.module.scss"

const navs = [
  {
    name: "Collection",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact Us",
    path: "/contact"
  }
]

const Header: React.FC = () => {
  let activeClassName = { color: "var(--primary-color)" }
  const { items } = useSelector(cartSelector)

  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClassName : undefined

  return (
    <header className={style.wrapper}>
      <div>
        <Link to='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <ul>
        {navs.map(nav => {
          return (
            <NavLink style={isActiveLink} to={nav.path}>
              {nav.name}
            </NavLink>
          )
        })}
      </ul>
      <div className={style.icons}>
        <Link to='/cart'>
          <svg
            className={style.buy}
            width='37'
            height='36'
            viewBox='0 0 37 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.4'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11.6338 29.7305C12.2668 29.7305 12.7813 30.245 12.7813 30.878C12.7813 31.511 12.2668 32.024 11.6338 32.024C11.0008 32.024 10.4878 31.511 10.4878 30.878C10.4878 30.245 11.0008 29.7305 11.6338 29.7305Z'
              stroke='#4DDFBC'
              stroke-width='2.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              opacity='0.4'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M28.5122 29.7305C29.1452 29.7305 29.6597 30.245 29.6597 30.878C29.6597 31.511 29.1452 32.024 28.5122 32.024C27.8792 32.024 27.3647 31.511 27.3647 30.878C27.3647 30.245 27.8792 29.7305 28.5122 29.7305Z'
              stroke='#4DDFBC'
              stroke-width='2.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M4.625 4.875L7.745 5.415L9.1895 22.6245C9.3065 24.027 10.478 25.104 11.885 25.104H28.253C29.597 25.104 30.737 24.117 30.9305 22.785L32.354 12.948C32.5295 11.7345 31.589 10.6485 30.3635 10.6485H8.246'
              stroke='#4DDFBC'
              stroke-width='2.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              opacity='0.4'
              d='M21.6882 16.1925H25.8477'
              stroke='#4DDFBC'
              stroke-width='2.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <div>{items.length}</div>
        </Link>
      </div>
    </header>
  )
}

export default memo(Header)
