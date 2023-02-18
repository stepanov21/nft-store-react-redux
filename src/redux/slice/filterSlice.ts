import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface IFilter {
  filter: number;
  direction: number;
}

const initialState: IFilter = {
  filter: 0,
  direction: 0
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    toggleDirection: (state) => {
      if (state.direction === 0) {
        state.direction = 1
      } else {
        state.direction = 0
      }
    }
  }
})

export const {setFilter, toggleDirection} = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer;