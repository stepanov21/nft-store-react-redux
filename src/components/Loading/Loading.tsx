import React from 'react'
import style from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <img width={150} src="./giphy.webp" alt="gif" />
    </div>
  )
}

export default Loading