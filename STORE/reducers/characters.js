import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersData } from "../../GraphQL";

const initialState = {
  characters: {},
};

export const allCharacters = createAsyncThunk("AllCharacters", async () => {
  return getCharactersData();
});

const characterSlice = createSlice({
  name: "Character Reducer",
  initialState,
  reducers: {},
  extraReducers: {
    [allCharacters.pending]: () => {
      console.log("Response Pending");
    },
    [allCharacters.rejected]: () => {
      console.log("Response Rejected");
    },
    [allCharacters.fulfilled]: (state, { payload }) => {
      state.characters = payload;
    },
  },
});

export default characterSlice.reducer;
