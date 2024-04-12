import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface FeaturedMovieState {
	value: string;
}

// Define the initial state using that type
const initialState: FeaturedMovieState = {
	value: '',
};

export const FeaturedMovieSlice = createSlice({
	name: 'billBoardMovie',
	initialState,
	reducers: {
		setBillBoardMovie: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { setBillBoardMovie } = FeaturedMovieSlice.actions;
export default FeaturedMovieSlice.reducer;