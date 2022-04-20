// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRehabillitationsAsync = createAsyncThunk(
  '/get-rehabillitation-exercise',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetch('http://localhost:8000/get-rehabillitation-exercise').then((res) =>
        res.json(),
      );
      return data;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  },
);

const getCurrentRehabillitationAsync = createAsyncThunk(
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

const rehabillitationActionsAsync = {
  getRehabillitationsAsync,
  getCurrentRehabillitationAsync,
};

export default rehabillitationActionsAsync;
