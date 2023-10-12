import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status:'idle'
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchproducts(state, action) {
    //   state.data = action.payload;
    // }
  },
  extraReducers:(builder) => {
    builder
    .addCase(getProducts.pending,(state,action) =>{
      state.status ="pending"
    })
    .addCase(getProducts.fulfilled,(state,action) =>{
      state.data =action.payload;
      state.status ="idle"
    })
    .addCase(getProducts.rejected,(state,action) =>{
      state.data =action.payload;
      state.status="error"
    })
  }
});

export const { fetchproducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async() =>{
      const data = await fetch('https://fakestoreapi.com/products');
      const result = await data.json();
      return result;
})

// export function getProducts() {
//   return async function getProductThunk(dispatch) {  // dispatch is passed in as the first argument to thunks
//     const data = await fetch('https://fakestoreapi.com/products');
//     const result = await data.json();
//     dispatch(fetchproducts(result));
//   }
// }
