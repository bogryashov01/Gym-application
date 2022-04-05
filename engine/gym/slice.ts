// Modules
import { createSlice } from '@reduxjs/toolkit';

// Actions
import asyncActions from './async-actions';

const { getGymExerciseAsync, getFilteredGymExerciseAsync, getGymExerciseByIdAsync } = asyncActions;

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
          state.gymExercise = action.payload;
        },
      )
      .addCase(getGymExerciseAsync.rejected, (state) => {
        state.pending = false;
      })
      .addCase(getFilteredGymExerciseAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getFilteredGymExerciseAsync.fulfilled,
        (state: { pending: boolean; gymExercise: Array<any>[any] }, action) => {
          state.pending = false;
          state.gymExercise = action.payload;
        },
      )
      .addCase(getGymExerciseByIdAsync.pending, (state: { pending: boolean }) => {
        state.pending = true;
      })
      .addCase(
        getGymExerciseByIdAsync.fulfilled,
        (state: { pending: boolean; currentExercise: any }, action) => {
          state.pending = false;
          state.currentExercise = action.payload;
        },
      );
  },
});

export default gymTabSlice;
