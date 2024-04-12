'use client'
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "@/store/hooks"
import { searchMovies } from "@/store/searchReducer"
import styles from '@/theme/scss/Header.module.scss';


const SearchBar = () => {
	const [ title, setTitle ] = useState(''); // Use useState instead of useAppStore
	const dispatch = useAppDispatch(); // Import useDispatch from react-redux
	const router = useRouter();

	const movies = useAppSelector(state => state.allMovies.movies);
	const status = useAppSelector(state => state.allMovies.status);

	const handleSubmit = (e: React.FormEvent) => { // Specify type for e
		e.preventDefault();
		dispatch(searchMovies(title));
		router.push('/movies');
	};
	return (

		<header className={styles.app_heading}>
			<div className={styles.continput}>
				<div className={styles.input_group}>
					<form onSubmit={handleSubmit}>
						<input type="text" value={title} className={styles.searchtext}
							   placeholder="Search movies..."
							   onChange={( e ) => setTitle( e.target.value )}/>
						<button type="submit" className={styles.icon_src}>
							<svg className={styles.fa_search} fill="currentColor" xmlns="http://www.w3.org/2000/svg"
								 viewBox="0 0 24 24">
								<g data-name="Layer 2">
									<g data-name="search">
										<rect width="15" height="15" opacity="0"/>
										<path
											d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/>
									</g>
								</g>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</header> );
}

export default SearchBar;
