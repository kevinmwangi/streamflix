import { createAsyncThunk } from '@reduxjs/toolkit';
import { filter, includes, toLower } from 'lodash';
import { RootState } from "@/store/store"

interface Movie {
	'#TITLE': string;
	[key: string]: any;
}

// interface State {
// 	allMovies: {
// 		movies: Movie[];
// 		status: string;
// 	};
// 	[key: string]: any;
// }

interface State {
	allMovies: {
		movies: Movie[],
		status: string;
	};
	billBoardMovieDetails: {
		movie: [], status: string
	}
	billBoardMovieID: {
		value: string
	};
	showingMovies: {
		value: []
	},
	watchList: {
		value: []
	}
}

export const searchMovies = createAsyncThunk(
	'movies/search',
	async (title: string, { getState }) => {
		const state = getState() as RootState; // Provide the type explicitly
		const movies = state.allMovies.movies;
		const lowerCaseTitle = toLower(title);
		const filteredMovies = filter(movies, (movie) => includes(toLower(movie['#TITLE']), lowerCaseTitle));

		return filteredMovies;
	}
);