import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface RandomMoviesState {
	value: string[];
}

// Define the initial state using that type
const initialState: RandomMoviesState = {
	value: [],
};

export const randomMoviesSlice = createSlice({
	name: 'randomMovies',
	initialState,
	reducers: {
		setRandomMovies: (state, action: PayloadAction<string[]>) => {
			state.value = action.payload;
		},
	},
});

export const { setRandomMovies } = randomMoviesSlice.actions;
export default randomMoviesSlice.reducer;