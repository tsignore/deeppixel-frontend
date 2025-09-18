import { createSlice } from "@reduxjs/toolkit";

interface MockState {
  value: number;
}

const initialState: MockState = { value: 0 };

const mockSlice = createSlice({
  name: "mock",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = mockSlice.actions;
export default mockSlice.reducer;
