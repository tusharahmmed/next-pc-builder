const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
  processor: null,
  motherboard: null,
  ram: null,
  power: null,
  storage: null,
  monitor: null,
  others: null,
};

const pcBuileSlice = createSlice({
  name: "pc-builder",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const category = action.payload.category;
      // update state
      state[category] = action.payload;
    },
    removeItem: (state, action) => {
      const category = action.payload.category;
      // update state
      state[category] = null;
    },
  },
});

export const {addItem, removeItem} = pcBuileSlice.actions;
export const pcBuilderReducer = pcBuileSlice.reducer;
