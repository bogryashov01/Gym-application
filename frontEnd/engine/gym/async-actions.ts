// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants
import { mockGymExercise } from '../../constants/mockGymExercise';

const getGymExerciseAsync = createAsyncThunk(
  '/get-gym-exercise',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetch('http://localhost:8000/get-gym-exercise').then((res) => res.json());
      return data;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  },
);

const getFilteredGymExerciseAsync = createAsyncThunk(
  'gym/filter-gymExercise',
  async (name: any) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(
          mockGymExercise.filter((exercise) => {
            if (name === '') {
              return exercise;
            } else if (exercise.name.toLowerCase().includes(name.toLowerCase())) {
              return exercise;
            }
          }),
        );
      }, 100);
    }).then((res) => res);
  },
);
const getGymExerciseByIdAsync = createAsyncThunk('gym/getGymExerciseById', async (id: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(
        mockGymExercise.filter((exercise) => {
          if (exercise.id === id) {
            return exercise;
          } else null;
        }),
      );
    }, 100);
  }).then((res) => res);
});

const gymActionsAsync = {
  getGymExerciseAsync,
  getFilteredGymExerciseAsync,
  getGymExerciseByIdAsync,
};

export default gymActionsAsync;
