import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

type TSeacrh = {
  value: string;
}

const initialState = {
  value: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload
    },
    clearSearchValue: (state) => {
      state.value = ''
    }
  }
})

export const {setSearchValue, clearSearchValue} = searchSlice.actions

export const searchSelector = (state: RootState) => state.search.value

export default searchSlice.reducer