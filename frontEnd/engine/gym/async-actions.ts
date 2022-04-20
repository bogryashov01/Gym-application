// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

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

const getFilteredGymAsync = createAsyncThunk(
  '/get-search-gym',
  async (name: string, { rejectWithValue }) => {
    try {
      const data =
        name !== ''
          ? await fetch(`http://localhost:8000/get-search-gym/${name.toLowerCase()}`).then((res) =>
              res.json(),
            )
          : await fetch(`http://localhost:8000/get-gym-exercise`).then((res) => res.json());
      return data;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  },
);
const getCurrentGymExerciseAsync = createAsyncThunk(
  '/get-current-rehabillitation-exercise',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await fetch(`http://localhost:8000/get-rehabillitation-exercise/${id}`).then(
        (res) => res.json(),
      );
      return data;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  },
);

const gymActionsAsync = {
  getGymExerciseAsync,
  getFilteredGymAsync,
  getCurrentGymExerciseAsync,
};

export default gymActionsAsync;
