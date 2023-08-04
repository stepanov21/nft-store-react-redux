import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"

import NFTItem from "../../components/NFTItem/NFTItem"
import Search from "../../components/Search/Search"
import Filter from "../../components/Filter/Filter"
import Loading from "../../components/Loading/Loading"

import style from "./CollectionPage.module.scss"

import { useAppDispatch } from "../../redux/store"
import { fetchNft, selectNfts, TNft } from "../../redux/slice/nftSlice"
import { selectFilter } from "../../redux/slice/filterSlice"
import { searchSelector } from "../../redux/slice/searchSlice"
import Pagination from "../../components/Pagination/Pagination"

const CollectionPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items: nfts, isLoading, page } = useSelector(selectNfts)

  const search = useSelector(searchSelector)

  const { filter, direction } = useSelector(selectFilter)

  useEffect(() => {
    dispatch(
      fetchNft({
        filter,
        direction,
        search
      })
    )
    // eslint-disable-next-line
  }, [filter, direction, search])

  return (
    <>
      <h1>
        Discover <br /> Collect <span>NFTs</span>
      </h1>
      <div className={style.wrapper_filters}>
        <Search />
        <Filter />
      </div>
      <div className={style.wrapper_cards}>
        {isLoading
          ? nfts.slice(0 + page * 8, 8 + page * 8).map((item: TNft, index) => {
              return <NFTItem key={index} {...item} />
            })
          : [...Array(4)].map((item, index) => <Loading key={index} />)}
      </div>
      <Pagination items={nfts?.length} maxItemsOnPage={8} />
    </>
  )
}

export default CollectionPage
