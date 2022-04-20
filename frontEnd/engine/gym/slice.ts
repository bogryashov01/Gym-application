// Modules
import { createSlice } from '@reduxjs/toolkit';

// Actions
import asyncActions from './async-actions';

const { getGymExerciseAsync, getFilteredGymAsync, getCurrentGymExerciseAsync } = asyncActions;

const initialState = {
  gymExercise: [],
  currentExercise: null,
  pending: false,
};

const gymTabSlice = createSlice({
  name: 'gymTab',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGymExerciseAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getGymExerciseAsync.fulfilled,
        (state: { pending: boolean; gymExercise: Array<any>[any] }, action) => {
          state.pending = false;
          state.gymExercise = action.payload?.rows;
        },
      )
      .addCase(getGymExerciseAsync.rejected, (state) => {
        state.pending = false;
      })
      .addCase(getFilteredGymAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getFilteredGymAsync.fulfilled,
        (state: { pending: boolean; gymExercise: Array<any>[any] }, action) => {
          state.pending = false;
          state.gymExercise = action.payload?.rows;
        },
      )
      .addCase(getCurrentGymExerciseAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getCurrentGymExerciseAsync.fulfilled,
        (state: { pending: boolean; currentExercise: any }, action) => {
          state.pending = false;
          state.currentExercise = action.payload?.rows;
        },
      );
  },
});

export default gymTabSlice;
