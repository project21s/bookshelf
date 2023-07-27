import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMobileNavigate: false,
};

const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setOpenNavigation: (state, action) => {
      state.openMobileNavigate = action.payload;
    },
  },
});

export const { actions: appActions, reducer: appReducer } = appSlice;
