import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMDB } from "@/imdb-sdk/imdb";
import _ from "lodash";

interface MovieState {
	movies: MovieItem[],
	status: 'idle' | 'loading' | 'failed'
}

const initialState: MovieState = {
	movies: [],
	status: 'idle',
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

// interface Movie {
// 	ok: boolean;
// 	description: MovieItem[];
// 	error_code: number;
// }

// export const fetchMovies = createAsyncThunk(
// 	'movies/fetchMovies',
// 	async (query: string) => {
// 		return await IMDB.searchMovies( query );
// 	}
// );

/** ------------------------------------------------------
 * @TODO:
 * Handle undefined and empty strings
 * ------------------------------------------------------
 * Structure the search results as an array of objects
 * Each object representing a movie and it's details
 * ------------------------------------------------------*/

export const fetchMovies = createAsyncThunk(
	'movies/fetchMovies',

	async (queries: string[]) => {
		const promises = queries.map(query => IMDB.searchMovies(query));
		const results = await Promise.all(promises);
		let moviesArray: MovieItem[] = _.chain(results)
										.filter(_.isObject)
										.map(item => item?.description || [])
										.flatten() // Removing 2 dimension array
										.compact() // Remove 'undefined' values
										.value() || []; // Return an empty array as a default value in case the result is 'undefined':

		// Filter out any object with null, undefined, or empty string key value pair using lodash
		moviesArray = _.filter( moviesArray, result => !_.some( result, val => val === null || val === undefined || val === '' ) );

		// Further filter to ensure "#IMG_POSTER" is a valid URL
		moviesArray = _.filter( moviesArray, movie => {
			let url;
			try {
				url = new URL( movie["#IMG_POSTER"] )
			} catch ( _ ) {
				return false;
			}
			return url.protocol === "http:" || url.protocol === "https:";
		});

		return moviesArray;
	}
);

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.movies = action.payload;
				state.status = 'idle';
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export default movieSlice.reducer;