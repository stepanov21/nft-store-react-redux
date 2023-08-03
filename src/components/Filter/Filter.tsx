import React, { memo, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import {
  IFilter,
  selectFilter,
  setFilter,
  TFilterValues,
  toggleDirection
} from "../../redux/slice/filterSlice"
import { useAppDispatch } from "../../redux/store"
import style from "./Filter.module.scss"

const filter: TFilterValues[] = ["order", "price", "views"]

const Filter: React.FC = () => {
  const [open, setOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)
  const dirRef = useRef<SVGSVGElement>(null)
  const dispatch = useAppDispatch()

  const { filter: activeFilter } = useSelector(selectFilter)

  useEffect(() => {
    const closeOut = (e: MouseEvent) => {
      if (filterRef.current && !e.composedPath().includes(filterRef.current)) {
        console.log(e)
        setOpen(false)
      }
    }
    document.body.addEventListener("click", closeOut)
    return () => {
      document.body.removeEventListener("click", closeOut)
    }
  }, [])

  const changeFilter = (filterName: TFilterValues) => {
    dispatch(setFilter(filterName))
    setOpen(false)
  }
  const changeDirection = () => {
    dispatch(toggleDirection())
    dirRef.current && dirRef.current.classList.toggle(style.dirAnim)
  }

  return (
    <div ref={filterRef} className={style.wrapper}>
      <svg
        onClick={() => changeDirection()}
        className={style.direction}
        ref={dirRef}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          d='M16.8396 20.1642V6.54645'
          stroke='#4DDFBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M20.9172 16.0681L16.8394 20.1648L12.7617 16.0681'
          stroke='#4DDFBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M6.91112 3.83289V17.4507'
          stroke='#4DDFBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.83344 7.929L6.91121 3.83234L10.989 7.929'
          stroke='#4DDFBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <div onClick={() => setOpen(prev => !prev)} className={style.filter}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.56517 3C3.70108 3 3 3.71286 3 4.5904V5.52644C3 6.17647 3.24719 6.80158 3.68936 7.27177L8.5351 12.4243L8.53723 12.4211C9.47271 13.3788 9.99905 14.6734 9.99905 16.0233V20.5952C9.99905 20.9007 10.3187 21.0957 10.584 20.9516L13.3436 19.4479C13.7602 19.2204 14.0201 18.7784 14.0201 18.2984V16.0114C14.0201 14.6691 14.539 13.3799 15.466 12.4243L20.3117 7.27177C20.7528 6.80158 21 6.17647 21 5.52644V4.5904C21 3.71286 20.3 3 19.4359 3H4.56517Z'
            stroke='#4DDFBC'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            opacity='0.4'
            d='M10 7H20.5'
            stroke='#4DDFBC'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span>Filter:</span>
        <span className={style.name_filter}>{activeFilter}</span>
      </div>
      {open && (
        <ul>
          {filter.map((item, id) => {
            return (
              <li
                key={id}
                className={item === activeFilter ? style.active : ""}
                onClick={() => changeFilter(item)}
              >
                {item}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default memo(Filter)
