import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./reducers/AppReducer";

export const store = configureStore({
  reducer: {
    appReducer,
    form: formReducer,
  },
});
