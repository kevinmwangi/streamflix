import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from '@/store/store';
import { fetchMovies } from '@/store/movieSlice';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import styles from "@/theme/scss/MovieSlider.module.scss";
import Image from "next/image";

type MovieSliderProps = {
	isFeatured: boolean | false;
};

const MoviesSliders: React.FC<MovieSliderProps> = ({ isFeatured } ) => {
	const dispatch = useAppDispatch();
	const { movies, status } = useAppSelector( state => state.allMovies );
	const nowShowingMovies = useAppSelector((state: RootState) => state.showingMovies);
	const randomKey = () => { return Math.random().toString(36).substring(2, 8) } // Generating random CHAR for key

	// Moved dispatch inside useEffect
	useEffect(() => {
		if ( nowShowingMovies ) {
			dispatch( fetchMovies( nowShowingMovies.value ) )
		}

		const Flicking = ({
			hanger: "50%",
			anchor: "50%"
		});
	},[dispatch, nowShowingMovies]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	return (
		<div className={`${styles.movies_grid} ${isFeatured ? `${styles.top}` : `${styles.top_0}`}`}>
			<section className={styles.latest_movies}>
				<div className={styles.container}>
					<div className={styles.section_header}>
						<h3 className={styles.section_heading}>Now Showing</h3>
					</div>

					<div className={styles.slider_container}>
						<Flicking
							align="prev"
							circular={false}
							bound={false}
							autoResize={true}
							circularFallback="bound"
							onMoveEnd={e => {
								console.log( e );
							}}>
							{movies && movies.map( ( movie, index ) => ( <div key={`${randomKey}_` + index}
																					className={`${styles.movie_slide} ${styles.panel} ${styles['flicking-panel']}`}>
									<div className={`${styles.movie__poster_gradient}`}></div>
									<Image
										src={movie?.['#IMG_POSTER'] || ''}
										alt={movie?.['#TITLE'] || ''}
										fill
										style={{ objectFit: 'cover' }}
										sizes={'50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'}
									/>
								</div> ) )}
						</Flicking>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MoviesSliders;