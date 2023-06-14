import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count=state.count<11?state.count+1:state.count;
    },

    decrement: (state, action) => {
      state.count = state.count - 1;
    },

    reset: (state, action) => {
      state.count = 0;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export { store };
export const { increment, decrement, reset } = counterSlice.actions;
