import { createSlice } from "@reduxjs/toolkit";

const Sample_data = ["18", "19", "20", "2019", "2021", "2022", "2023"];

type InitialStateType = {
  Sample_data: string[];
  selected_tab: string | null;
  movies: any[];
  sheduled_movies: any[];
};

let initialState: InitialStateType = {
  Sample_data,
  selected_tab: Sample_data[2],
  movies: [],
  sheduled_movies: [],
};

export const SheduledMoviesReducer = createSlice({
  name: "SheduledMoviesReducer",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      let sheduled_movies = state.movies.filter((item) =>
        item.release_date.includes(state.selected_tab)
      );
      state.sheduled_movies = sheduled_movies;
    },
    setActiveTab: (state, action) => {
      state.selected_tab = action.payload;
      let sheduled_movies = state.movies.filter((item) =>
        item.release_date.includes(state.selected_tab)
      );
      state.sheduled_movies = sheduled_movies;
    },
  },
});

export const { setMovies, setActiveTab } = SheduledMoviesReducer.actions;

export default SheduledMoviesReducer.reducer;
