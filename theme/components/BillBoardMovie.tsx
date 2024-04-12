import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from '@/store/store';
import { getMovieDetails } from '@/store/billBoardMovieSlice';
import { VideoPlayer } from '@/theme/components/VideoPlayer/VideoPlayer';
import { MediaPlayerInstance } from "@vidstack/react";
import { InfoIcon, PlayIcon, } from '@vidstack/react/icons';
import styles from "@/theme/scss/BillBoardMovie.module.scss"
import { setBillBoardMovie } from "@/store/featuredMovieSlice";


const BillBoardMovie: React.FC = () => {
	const dispatch = useAppDispatch();

	const billBoardMovieID = useAppSelector((state: RootState) => state.billBoardMovieID);
	const billBoardMovieDetails = useAppSelector(state => state.billBoardMovieDetails);
	const current  = useRef<MediaPlayerInstance>( null ), [src, setSrc] = useState('');
	useEffect(() => { if (billBoardMovieID) { dispatch( getMovieDetails( billBoardMovieID.value )) } }, [dispatch, billBoardMovieID]);

	const MoreInfo = ( event: React.MouseEvent<HTMLButtonElement> ) => {

	};

	const Play = ( event: React.MouseEvent<HTMLButtonElement> ) => {

	};

	useEffect(() => {
		if (billBoardMovieID.value === "" || undefined) {
			dispatch( setBillBoardMovie( "tt3359350" ) ); // Billboard movie ID
		}
		if (billBoardMovieDetails && billBoardMovieDetails.movie && billBoardMovieDetails.movie.length > 0) {
			setSrc(billBoardMovieDetails.movie[0]?.previewURLs?.url);
		}
	}, [billBoardMovieDetails, dispatch, billBoardMovieID]);

	return (
		<section className={styles.bill_board_video}>
			<div className={styles.bill_board_movie}>
				<div className={styles.movie_heading_container}>
					<h1 className={styles.movie_heading_title}>Fallout</h1>
					<div className={styles.movie_details}>
						<p>In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must
							live in underground bunkers to protect themselves from radiation, mutants and bandits.</p>

						<div className={styles.call_to_action}>
							<button onClick={Play} className={`${styles.btn} ${styles.icon_btn} ${styles.primary}`}><PlayIcon size={32}/> <span>Play</span></button>
							<button onClick={MoreInfo} className={`${styles.btn} ${styles.icon_btn} ${styles.secondary}`}><InfoIcon size={32}/> <span>More Info</span></button>
						</div>
					</div>
				</div>
				<VideoPlayer src={src} poster={billBoardMovieDetails.movie[0]?.poster} description={billBoardMovieDetails.movie[0]?.playbackURLs?.videoDefinition} thumbnails="" controlsHidden={true}/>
			</div>
		</section>
	)
}

export default BillBoardMovie;