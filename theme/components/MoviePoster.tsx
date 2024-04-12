import styles from "@/theme/scss/MoviePoster.module.scss"
import Image from 'next/image'

const MoviePoster = ({ movie }: { movie: any }) => {
	return (
		<div className={`${ styles.movie_poster } ${ styles.embla__slide } ${ styles.panel }`}>
			<div className={`${ styles.library__item_gradient }`}></div>
			<Image
				src={movie['#IMG_POSTER']}
				alt={movie['#TITLE']}
				fill
				style={{ objectFit: 'cover' }}
				sizes={'50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw'}
			/>
		</div>
	)
}

export default MoviePoster;