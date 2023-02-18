import { getTotal } from './../../utils/getTotal';
import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';



type TCartItem = {
  id: string;
  imgUrl: string;
  order: number;
  price: number;
}

interface ICart {
  items: TCartItem[],
  totalPrice: number
}

const initialState: ICart = {
  items: [],
  totalPrice: 0
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if(state.items.find(item => item.id === action.payload.id))return;
      state.items.push(action.payload);
      getTotal(state)
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      getTotal(state)
    },
    clearAllCart: (state) => {
      state.items = []
      getTotal(state)
    }
  }
})

export const {addToCart, deleteFromCart, clearAllCart} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart

export default cartSlice.reducer