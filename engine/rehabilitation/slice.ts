// Modules
import { createSlice } from "@reduxjs/toolkit";

// Actions
import asyncActions from "./async-actions";

const { getRehabillitationsAsync } = asyncActions;

const initialState = {
  rehabillitations: [],
  pending: false,
};

const rehabillitationTabSlice = createSlice({
  name: "rehabillitationTab",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getRehabillitationsAsync.pending,
        (state: { pending: boolean }) => {
          state.pending = true;
        }
      )
      .addCase(
        getRehabillitationsAsync.fulfilled,
        (
          state: { pending: boolean; rehabillitations: Array<any>[any] },
          action
        ) => {
          state.pending = false;
          state.rehabillitations = action.payload;
        }
      )
      .addCase(getRehabillitationsAsync.rejected, (state) => {
        state.pending = false;
      });
  },
});

export default rehabillitationTabSlice;