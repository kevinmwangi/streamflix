import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '@/store/movieSlice';
import billBoardMovieReducer from '@/store/billBoardMovieSlice';
import featuredMovieReducer from '@/store/featuredMovieSlice';
import { dynamicMoviesSlice } from "@/store/dynamicMoviesSlice";

// Generate the dynamic slice and reducer
const moviesSlice = dynamicMoviesSlice('nowShowingMovies', 'setRandomMovies');
const moviesReducer = moviesSlice.reducer;

const watchListSlice = dynamicMoviesSlice('watchList', 'setWatchList');
const watchListReducer = watchListSlice.reducer;

export const store = configureStore( {
	reducer: {
		allMovies: movieReducer,
		billBoardMovieDetails: billBoardMovieReducer,
		billBoardMovieID: featuredMovieReducer,
		showingMovies: moviesReducer,
		watchList: watchListReducer
	},
} )

// Infer the type of store
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']