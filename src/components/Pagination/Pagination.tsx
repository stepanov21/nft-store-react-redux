import React from "react";
import { useSelector } from "react-redux";
import { nextPage, previosPage, selectPage, setPage, TNft } from "../../redux/slice/nftSlice";
import { useAppDispatch } from "../../redux/store";
import style from "./Pagination.module.scss";

type TPagination = {
  items: number;
  maxItemsOnPage: number;
};

const Pagination: React.FC<TPagination> = ({ items, maxItemsOnPage }) => {
  // if(items && items.length < 8) {
  //   return
  // }
  const dispatch = useAppDispatch();
  const currentPage = useSelector(selectPage);

  const countPage = Math.ceil(items / maxItemsOnPage);

  const pageArr = [];

  for (let i = 1; i <= countPage; i++) {
    pageArr.push(i);
  }

  console.log(pageArr);

  return (
    <div className={style.wrapper}>
        <button onClick={() => dispatch(previosPage())}  disabled={currentPage < 1 ? true : false} className={style.control}>
          <img src="./prev.svg" alt="prev" />
        </button>
      {pageArr.map((item, id) => {
        return <button className={currentPage === id ? style.activePage : ''} onClick={() => dispatch(setPage(id))}>{item}</button>;
      })}
        <button onClick={() => dispatch(nextPage())} disabled={currentPage >= (pageArr.length - 1) ? true : false} className={style.control}>
          <img src="./next.svg" alt="next" />
        </button>
    </div>
  );
};

export default Pagination;
