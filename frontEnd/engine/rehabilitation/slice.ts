// Modules
import { createSlice } from '@reduxjs/toolkit';

// Actions
import asyncActions from './async-actions';

const {
  getRehabillitationsAsync,
  getCurrentRehabillitationAsync,
  getFilteredRehabillitationAsync,
} = asyncActions;

const initialState = {
  currentExercise: null,
  rehabillitations: [],
  pending: false,
};

const rehabillitationTabSlice = createSlice({
  name: 'rehabillitationTab',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRehabillitationsAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getRehabillitationsAsync.fulfilled,
        (state: { pending: boolean; rehabillitations: Array<any>[any] }, action) => {
          state.pending = false;
          state.rehabillitations = action.payload?.rows;
        },
      )
      .addCase(getRehabillitationsAsync.rejected, (state) => {
        state.pending = false;
      })
      .addCase(getCurrentRehabillitationAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getCurrentRehabillitationAsync.fulfilled,
        (state: { pending: boolean; currentExercise: any }, action) => {
          state.pending = false;
          state.currentExercise = action.payload?.rows;
        },
      )
      .addCase(getCurrentRehabillitationAsync.rejected, (state) => {
        state.pending = false;
      })
      .addCase(getFilteredRehabillitationAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getFilteredRehabillitationAsync.fulfilled,
        (state: { pending: boolean; rehabillitations: Array<any>[any] }, action) => {
          state.pending = false;
          state.rehabillitations = action.payload?.rows;
        },
      );
  },
});

export default rehabillitationTabSlice;
