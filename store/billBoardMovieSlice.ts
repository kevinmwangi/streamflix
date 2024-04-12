import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { IMDB } from "@/imdb-sdk/imdb";
import { ResponseData } from "@/imdb-sdk/types";


interface Movie {
	poster: string;
	imdbId: string;
	name: string;
	releaseYear: number;
	genre: string[];
	playbackURLs: {
		url: string;
		mimeType: string;
		videoDefinition: string;
	};
	previewURLs: {
		url: string;
		mimeType: string;
		videoDefinition: string;
	};
}

interface BillBoardMovieState {
	movie: Movie[];
	status: 'idle' | 'loading' | 'failed'
}

const initialState: BillBoardMovieState = {
	movie: [],
	status: 'idle',
};

export const getMovieDetails = createAsyncThunk(
	'movies/getMovieDetails',
	async (query: string) => {
		return await IMDB.getMovieDetails( query );
	}
);

export const billBoardMovieObj = ( { vidObj }: { vidObj: any } ) => {
	let movieObj = _.get(vidObj, 'top.primaryVideos.edges', []);
	return movieObj.map( ( data: any ) => {
		let playbackURLs = _.get( data, 'node.playbackURLs[0]', {} );
		let previewURLs = _.get( data, 'node.previewURLs[0]', {} );
		return {
			poster: _.get( data, 'node.thumbnail.url', '' ),
			imdbId: _.get(vidObj, 'imdbId', ''),
			name: _.get(vidObj, 'short.name', ''),
			releaseYear: _.get(vidObj, 'top.releaseYear.year', ''),
			genre: _.get( vidObj, 'short.genre', []),
			playbackURLs: {
				url: _.get( playbackURLs, 'url', '' ),
				mimeType: _.get( playbackURLs, 'videoMimeType', '' ),
				videoDefinition: _.get( playbackURLs, 'videoDefinition', '' )
			}, previewURLs: {
				url: _.get( previewURLs, 'url', '' ),
				mimeType: _.get( previewURLs, 'videoMimeType', '' ),
				videoDefinition: _.get( previewURLs, 'videoDefinition', '' )
			}
		};
	} );
};


export const BillBoardMovieSlice = createSlice({
	name: 'BillBoardMovie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMovieDetails.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMovieDetails.fulfilled, (state, action) => {
				// console.log(billBoardMovieObj({ vidObj: action.payload }));

				state.movie = billBoardMovieObj({ vidObj: action.payload }) //action.payload;
				state.status = 'idle';
			})
			.addCase(getMovieDetails.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default BillBoardMovieSlice.reducer;