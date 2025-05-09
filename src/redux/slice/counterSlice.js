import {createSlice} from '@reduxjs/toolkit';

// Initial state
const initialState = {
  count: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter', // Slice name
  initialState, // Initial state
  reducers: {
    increment: state => {
      state.count += 1; // Immer lets us "mutate" the state directly
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload; // Using action.payload to add custom value
    },
  },
});

// Export actions
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// Export reducer to configure the store later
export default counterSlice.reducer;
