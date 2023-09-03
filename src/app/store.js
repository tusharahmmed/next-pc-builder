import {configureStore} from "@reduxjs/toolkit";
import {pcBuilderReducer} from "./features/pc-builder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
