import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "./slices/mockSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      mock: mockReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
