import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../reducers/characters";

const store = configureStore({
  reducer: { charactersReducer },
});

export default store;
