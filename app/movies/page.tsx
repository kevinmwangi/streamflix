'use client'
import { useSelector } from 'react-redux';
import React, { useEffect } from "react"
import MoviesSliders from "@/theme/components/MoviesSliders";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMovies } from '@/store/movieSlice';
import styles from "@/theme/scss/Home.module.scss";
import Movies from "@/theme/components/Movies"


const featuredMovies = [ "Godzilla x Kong: The New Empire", "Kung Fu Panda 4", "Road House", "After the Pandemic", "Madame Web", "Damsel", "Migration", "Hunters", "Oppenheimer", "Megamind vs. the Doom Syndicate", "Land of Bad", "Heart of the Hunter" ];
const allMovies = [ "Napoleon", "Spider-Man: No Way Home", "Avengers: Infinity War", "Carmen 1945", "Transformers: Rise of the Beasts", "Inside Out 2", "Exhuma", "The Girl Next Door 4", "The Flash", "Ruthless", "Avatar: The Way of Water", "xXx", "The Thundermans Return", "Elemental", "The Zone of Interest", "The OctoGames", "Final Fantasy VII: On the Way to a Smile - Episode Denzel", "The Hunger Games: The Ballad of Songbirds & Snakes", "Contagion of Fear", "How to Date Billy Walsh", "Planet Dune", "The Masked Saint", "Interstellar", "Badland Hunters", "Bird Box", "X", "Bob Marley: One Love", "Alien", "The Trip 7", "Wonder Woman", "Red Right Hand", "Joker", "Inception", "Robot Dreams", "The Creator", "Ordinary Angels", "Expend4bles", "Coach Carter", "Spider-Man: Into the Spider-Verse", "PAW Patrol: The Mighty Movie", "Meteor", "The Pig, the Snake and the Pigeon", "My Fault", "The Shawshank Redemption", "The Marvels", "Scoop", "Ghostbusters: Frozen Empire", "Barbie", "The Beekeeper", "Freelance", "Baghead", "The Batman", "Civil War", "Aquaman and the Lost Kingdom", "Skal - Fight for Survival", "The American Society of Magical Negroes", "Kingdom of the Planet of the Apes", "The Boy and the Heron", "Godzilla", "The Super Mario Bros. Movie"];

const AllMoviesGrid = () => {
	const dispatch = useAppDispatch();
	const searchedMovies = useAppSelector(state => state.allMovies.movies); // get searched movies from redux store


	// Moved dispatch inside useEffect
	useEffect(() => {
		dispatch(fetchMovies(featuredMovies)); // Setting featured movies to state
		// dispatch(fetchMovies( allMovies )); // Setting featured movies to state
		// dispatch(fetchMovies(featuredMovies)); // Setting featured movies to state
	},[dispatch]);

	// Filter allMovies based on searchedMovies
	const filteredMovies = allMovies.filter(movie =>
		searchedMovies.some(searchedMovie => searchedMovie["#TITLE"].toLowerCase() === movie.toLowerCase())
	);

	return (
		<main className={styles.main}>
			<Movies movies={filteredMovies} isFeatured={false}/>
			{/*<MoviesSliders isFeatured={false}/>*/}
		</main>
	);
};

export default AllMoviesGrid;