import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchMovies } from '@/store/searchReducer';

interface MoviesState {
	movies: MovieItem[],
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: MoviesState = {
	movies: [],
	status: 'idle',
	error:  ''
};

interface MovieItem {
	"#TITLE": string;
	"#YEAR": number;
	"#IMDB_ID": string;
	"#RANK": number;
	"#ACTORS": string;
	"#AKA": string;
	"#IMDB_URL": string;
	"#IMDB_IV": string;
	"#IMG_POSTER": string;
	"photo_width": number;
	"photo_height": number;
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(searchMovies.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(searchMovies.fulfilled, (state, action: PayloadAction<MovieItem[]>) => {
				state.status = 'succeeded';
				state.movies = action.payload;
			})
			.addCase(searchMovies.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || '';
			});
	},
});

export default moviesSlice.reducer;