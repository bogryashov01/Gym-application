// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

import { mockGymExercise } from '../../constants/mockGymExercise';

const getGymExerciseAsync = createAsyncThunk('gym/get-gymExercise', async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: 'Push up',
          imageUrl: 'https://reactjs.org/logo-og.png',
          descriptions: 'Push ups',
          shortDesctiption: 'short Description',
        },
        {
          id: 2,
          name: 'body lifting',
          imageUrl: 'https://reactjs.org/logo-og.png',
          descriptions: 'body lifting',
          shortDesctiption: 'body lifting',
        },
      ]);
    }, 700);
  }).then((res) => res);
});

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

const gymActionsAsync = {
  getGymExerciseAsync,
  getFilteredGymExerciseAsync,
};

export default gymActionsAsync;
