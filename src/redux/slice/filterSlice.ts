import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

export type TFilterValues = "order" | "price" | "views"
export type TDirecValues = "desc" | "asc"

export interface IFilter {
  filter: TFilterValues;
  direction: TDirecValues;
}

const initialState: IFilter = {
  filter: "order",
  direction: "desc"
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action:PayloadAction<TFilterValues>) => {
      state.filter = action.payload;
    },
    toggleDirection: (state) => {
      if (state.direction === 'desc') {
        state.direction = 'asc'
      } else {
        state.direction = 'desc'
      }
    }
  }
})

export const {setFilter, toggleDirection} = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer;