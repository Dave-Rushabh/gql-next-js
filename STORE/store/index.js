import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../reducers/characters";
import individualCharacterReducer from "../reducers/character";

const store = configureStore({
  reducer: { charactersReducer, individualCharacterReducer },
});

export default store;
