import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  carts: [],
};

const shoppingSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map(product => ({
        ...product,
        isFav: false,
      }));
    },
    addToCart: (state, action) => {
      const findExistingProduct = state.carts.find(
        c => c.id === action.payload.id,
      );
      if (findExistingProduct) {
        if (action.payload.quantity === 0) {
          state.carts = state.carts.filter(c => c.id !== action.payload.id);
        } else {
          findExistingProduct.quantity = action.payload.quantity;
        }
      } else {
        state.carts.push(action.payload);
      }
    },
    addToFavourite: (state, action) => {
      const productIndex = state.products.findIndex(
        p => p.id === action.payload.id,
      );
      if (productIndex !== -1) {
        state.products[productIndex].isFav =
          !state.products[productIndex].isFav;
      }
    },
  },
});

export const {setProducts, addToCart, addToFavourite} = shoppingSlice.actions;

export default shoppingSlice.reducer;
