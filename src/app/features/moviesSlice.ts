import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  searchTerm: string;
  userSelectedGenres: Array<string>;
}

const initialState: MoviesState = {
  searchTerm: "",
  userSelectedGenres: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setUserSelectedGenres(state, action: PayloadAction<string[]>) {
      state.userSelectedGenres = action.payload;
    },
  },
});

export const { setSearchTerm, setUserSelectedGenres } = moviesSlice.actions;
export default moviesSlice.reducer;
