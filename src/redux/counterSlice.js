import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setsNumber: 1,
  workSeconds: 1,
  restSeconds: 1,
  remainingSets: 1,
  remainingWorkSeconds: 1,
  remainingRestSeconds: 1,
  hasCounterStarted: false,
  isCounterPaused: false
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addSets(state) {
      state.setsNumber++;
    },
    removeSets(state) {
      decrement(state, "setsNumber");
    },
    addWorkSeconds(state) {
      state.workSeconds++;
    },
    removeWorkSeconds(state) {
      decrement(state, "workSeconds");
    },
    addRestSeconds(state) {
      state.restSeconds++;
    },
    removeRestSeconds(state) {
      decrement(state, "restSeconds");
    },
    updateRemainingSets(state) {
      decrement(state, "remainingSets");
    },
    updateRemainingWorkSecods(state) {
      decrement(state, "remainingWorkSeconds");
    },
    updateRemainingRestSeconds(state) {
      decrement(state, "remainingRestSeconds");
    },
    setHasCounterStarted(state, { payload }) {
      state.hasCounterStarted = payload;
    },
    toggleIsCounterPaused(state) {
      state.isCounterPaused = !state.isCounterPaused;
    }
  }
});

function decrement(state, propertyName) {
  if (state[propertyName] === 1) {
    return state;
  }
  state[propertyName]--;
}

export const {
  addSets,
  removeSets,
  addRestSeconds,
  removeRestSeconds,
  addWorkSeconds,
  removeWorkSeconds,
  updateRemainingRestSeconds,
  updateRemainingSets,
  updateRemainingWorkSecods,
  setHasCounterStarted,
  toggleIsCounterPaused
} = counterSlice.actions;

export default counterSlice.reducer;
