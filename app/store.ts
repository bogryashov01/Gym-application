// Modules
import { configureStore } from "@reduxjs/toolkit";

// Engine
import rehabillitationReducer from "../engine/rehabilitation";

const store = configureStore({
  reducer: {
    rehabillitationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
