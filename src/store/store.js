import { configureStore } from '@reduxjs/toolkit'
import createSlice from './createSlice'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
    cart:createSlice,
    product:productSlice
  },
})