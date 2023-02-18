import searchSlice from './slice/searchSlice';
import filterSlice from './slice/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import nftSlice from './slice/nftSlice';
import cartSlice from './slice/cartSlice';


export const store = configureStore({
  reducer: {
    nft: nftSlice,
    filter: filterSlice,
    cart: cartSlice,
    search: searchSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch