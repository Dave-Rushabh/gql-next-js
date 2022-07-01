import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  character: {},
};

export const character = createAsyncThunk("Character", async (id) => {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await resp.json();
  return data;
});

const individualCharacterSlice = createSlice({
  name: "Individual Character Reducer",
  initialState,
  reducers: {},
  extraReducers: {
    [character.pending]: () => {
      console.log("Response Pending");
    },
    [character.rejected]: () => {
      console.log("Response Rejected");
    },
    [character.fulfilled]: (state, { payload }) => {
      state.character = payload;
    },
  },
});

export default individualCharacterSlice.reducer;
