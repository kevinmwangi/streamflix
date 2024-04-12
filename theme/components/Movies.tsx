import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import styles from "@/theme/scss/MovieSlider.module.scss";
import Image from "next/image";

interface MoviesProps {
	movies: MovieItem[];
	isFeatured: boolean | false;
}

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


const Movies: React.FC<MoviesProps> = ({ movies,  isFeatured }) => {
	const randomKey = () => { return Math.random().toString(36).substring(2, 8) } // Generating random CHAR for key

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
							{movies && (movies as MovieItem[]).map( ( movie: MovieItem, index: number ) => (
								<div key={`${randomKey}_` + index} className={`${styles.movie_slide} ${styles.panel} ${styles['flicking-panel']}`}>
									<div className={`${styles.movie__poster_gradient}`}></div>
									<Image
										src={movie['#IMG_POSTER'] || ''}
										alt={movie['#TITLE'] || ''}
										fill
										style={{ objectFit: 'cover' }}
										sizes={'50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'}
									/>
								</div>
							))}
						</Flicking>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Movies;