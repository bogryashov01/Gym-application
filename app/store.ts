// Modules
import { configureStore } from "@reduxjs/toolkit";

// Engine
import rehabillitationReducer from "../engine/rehabilitation";
import gymReducer from "../engine/gym";


const store = configureStore({
  reducer: {
    rehabillitationReducer,
    gymReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
