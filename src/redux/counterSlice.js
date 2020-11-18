import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setsNumber: 1,
  workingSeconds: 1,
  restSeconds: 1
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addSets(state) {
      state.setsNumber++;
    }
  }
});

export const { addSets } = counterSlice.actions;

export default counterSlice.reducer;
