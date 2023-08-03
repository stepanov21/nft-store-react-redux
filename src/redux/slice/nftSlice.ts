import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import type { RootState } from '../store'

type TParams = {
  filter?: string;
  direction?: string;
  search?: string;
}

export const fetchNft = createAsyncThunk(
  'nft/fetchNft',
  async (params: TParams) => {
    const {filter, direction, search} = params;
    const { data }: {data: TNft[]} = await axios.get(`https://63d0fdd8120b32bbe8eeaa66.mockapi.io/nfts/?sortBy=${filter}&order=${direction}&search=${search}`)
    return data
  }
)

export type TNft = {
  id: string; 
  order: number;
  imgUrl: string;
  price: number;
  author: string;
  views: number;
}

interface INft {
  items: TNft[],
  isLoading: boolean,
  isError: boolean,
  page: number
}

const initialState: INft = {
  items: [],
  isLoading: false,
  isError: false,
  page: 0
}

export const counterSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    nextPage: (state) => {
      state.page++
    },
    previosPage: (state) => {
      state.page--
    }
  },
  extraReducers: {
    [fetchNft.pending.type]: (state, action) => {
      state.items = action.payload
      state.isLoading = false
      state.isError = false
    },
    [fetchNft.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.isLoading = true
      state.isError = false
      state.page = 0
    },
    [fetchNft.rejected.type]: (state, action) => {
      state.items = action.payload
      state.isLoading = false
      state.isError = true
    }
  }
})

export const { setPage, nextPage, previosPage } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNfts = (state: RootState) => state.nft
export const selectPage = (state: RootState) => state.nft.page

export default counterSlice.reducer