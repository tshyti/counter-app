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
      state.remainingSets--;
    },
    updateRemainingWorkSecods(state) {
      state.remainingWorkSeconds--;
    },
    updateRemainingRestSeconds(state) {
      state.remainingRestSeconds--;
    },
    startCounter(state) {
      return {
        ...state,
        remainingSets: state.setsNumber,
        remainingWorkSeconds: state.workSeconds,
        remainingRestSeconds: state.restSeconds,
        hasCounterStarted: true
      };
    },
    stopCounter(state) {
      state.hasCounterStarted = false;
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
  startCounter,
  stopCounter,
  toggleIsCounterPaused
} = counterSlice.actions;

export default counterSlice.reducer;
