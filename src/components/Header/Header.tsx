import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  let activeClassName = {color: 'var(--primary-color)'}

  const isActiveLink = ({ isActive } : {isActive: boolean}) => isActive ? activeClassName : undefined
  
  return (
    <header className={style.wrapper}>
      <div>
        <Link to='/'><img src="./logo.png" alt="logo" /></Link>
      </div>
      <ul>
        <NavLink
          style={isActiveLink}
          to="/"
        >
          Collection
        </NavLink>
        <NavLink
          style={isActiveLink}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={isActiveLink}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </ul>
      <div className={style.icons}>
        <svg
          className={style.heart}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.3078 17.3975C2.6983 12.3725 4.5793 6.62898 9.8548 4.92948C12.6298 4.03398 15.6928 4.56198 17.9998 6.29748C20.1823 4.60998 23.3578 4.03998 26.1298 4.92948C31.4053 6.62898 33.2983 12.3725 31.6903 17.3975C29.1853 25.3625 17.9998 31.4975 17.9998 31.4975C17.9998 31.4975 6.8968 25.4555 4.3078 17.3975Z"
            stroke="#4DDFBC"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M24 10.05C25.605 10.569 26.739 12.0015 26.8755 13.683"
            stroke="#4DDFBC"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Link to='/cart'>
          <svg
            className={style.buy}
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6338 29.7305C12.2668 29.7305 12.7813 30.245 12.7813 30.878C12.7813 31.511 12.2668 32.024 11.6338 32.024C11.0008 32.024 10.4878 31.511 10.4878 30.878C10.4878 30.245 11.0008 29.7305 11.6338 29.7305Z"
              stroke="#4DDFBC"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5122 29.7305C29.1452 29.7305 29.6597 30.245 29.6597 30.878C29.6597 31.511 29.1452 32.024 28.5122 32.024C27.8792 32.024 27.3647 31.511 27.3647 30.878C27.3647 30.245 27.8792 29.7305 28.5122 29.7305Z"
              stroke="#4DDFBC"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.625 4.875L7.745 5.415L9.1895 22.6245C9.3065 24.027 10.478 25.104 11.885 25.104H28.253C29.597 25.104 30.737 24.117 30.9305 22.785L32.354 12.948C32.5295 11.7345 31.589 10.6485 30.3635 10.6485H8.246"
              stroke="#4DDFBC"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M21.6882 16.1925H25.8477"
              stroke="#4DDFBC"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
