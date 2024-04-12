import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesState {
	value: string[];
}

const initialState: MoviesState = {
	value: [],
};

export const dynamicMoviesSlice = (name: string, actionName: string) => {
	return createSlice({
		name,
		initialState,
		reducers: {
			[actionName]: (state: MoviesState, action: PayloadAction<string[]>) => {
				state.value = action.payload;
			},
		},
	});
};

const moviesSlice = dynamicMoviesSlice('randomMovies', 'setRandomMovies');
export const { setMovies: setNowShowingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;