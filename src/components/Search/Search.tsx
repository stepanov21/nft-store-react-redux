import React, { useRef, useState } from "react";
import { clearSearchValue, setSearchValue } from "../../redux/slice/searchSlice";
import { useAppDispatch } from "../../redux/store";
import style from "./Search.module.scss";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch();

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
    setInput(e.target.value);
  };

  const clearInputAndFocus = () => {
    dispatch(clearSearchValue())
    setInput('')
    inputRef.current && inputRef.current.focus();
  }

  return (
    <div className={style.wrapper}>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => changeInput(e)}
        type="text"
        placeholder="Find something..."
        maxLength={15}
      />
      {input ? (
        <svg
          onClick={() => clearInputAndFocus()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2442 11.5779C21.6612 11.5779 22.0002 11.2389 22.0002 10.8219V8.2529C22.0002 4.3919 19.5902 1.9999 15.7532 1.9999H8.25321C4.39221 1.9999 2.00021 4.3919 2.00021 8.2559V15.7559C2.00021 19.6079 4.39221 21.9999 8.25321 21.9999H15.7562C19.6082 21.9999 22.0002 19.6079 21.9972 15.7529C21.9972 15.3309 21.6542 14.9879 21.2322 14.9879C20.8092 14.9879 20.4672 15.3309 20.4672 15.7529C20.4672 18.7869 18.7962 20.4669 15.7532 20.4669H8.25321C5.21021 20.4669 3.53021 18.7869 3.53021 15.7529V8.2529C3.53021 5.2099 5.21021 3.5299 8.25621 3.5299H15.7562C18.8002 3.5299 20.4702 5.1999 20.4702 8.2529V10.7949V10.7969C20.4712 11.2189 20.8132 11.5599 21.2352 11.5599V11.5779H21.2442ZM9.81501 13.1453L9.13101 13.8293C8.82601 14.1193 8.80901 14.6003 9.09301 14.9113L9.11501 14.9273C9.40701 15.2193 9.87701 15.2273 10.178 14.9453L10.859 14.2643C11.168 13.9763 11.185 13.4923 10.897 13.1823C10.608 12.8743 10.124 12.8563 9.81501 13.1453ZM15.1428 14.8032C14.8488 15.0962 14.3738 15.1022 14.0728 14.8152L14.0348 14.7782L9.25481 9.9992C8.96281 9.6892 8.95681 9.2072 9.24181 8.8912C9.53381 8.5922 10.0118 8.5862 10.3108 8.8782C10.3138 8.8802 10.3158 8.8822 10.3188 8.8852L12.1838 10.7512L13.8808 9.0532C14.1858 8.7622 14.6668 8.7652 14.9688 9.0602C15.0228 9.1142 15.0688 9.1752 15.1038 9.2432C15.2768 9.5442 15.2268 9.9222 14.9818 10.1682L13.2918 11.8572L15.1298 13.6962C15.4398 13.9892 15.4518 14.4782 15.1578 14.7872C15.1555 14.7906 15.1526 14.7934 15.1496 14.7962C15.1473 14.7984 15.145 14.8006 15.1428 14.8032Z"
            fill="#4DDFBC"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.7666"
            cy="11.7666"
            r="8.98856"
            stroke="#4DDFBC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M18.0183 18.4851L21.5423 22"
            stroke="#4DDFBC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
