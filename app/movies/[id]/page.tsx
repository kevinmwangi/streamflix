import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from '@/store/store';
import { getMovieDetails } from '@/store/billBoardMovieSlice';

const MovieDetails = () => {

	// const [movie, setMovie] = useState(null)

	// useEffect(() => {
	// 	// Replace this URL with your actual API endpoint
	// 	fetch(`/api/movies/${id}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setMovie(data))
	// }, [id])

	// if (!movie) return <div>Loading...</div>

	return (
		<div>
			<h1>Kevoo</h1>
			<p>This is the detail page for movie.</p>
		</div>
	)
};

export default MovieDetails;