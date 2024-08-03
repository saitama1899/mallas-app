import { useAppContext } from "@/context/AppContext";
import type { Movie } from "@/types/movies";
import { useEffect } from "react";

const useFavorites = () => {
	const FAVORITES_KEY = "favorites";
	const { movies, setMovies } = useAppContext();

	useEffect(() => {
		checkFavorites();
	}, []);

	const getFavoriteMovies = (): Movie[] => {
		const favorites = localStorage.getItem(FAVORITES_KEY);
		return favorites ? JSON.parse(favorites) : [];
	};

	const addFavoriteMovie = (movie: Movie): void => {
		const favorites = getFavoriteMovies();
		if (!favorites.some((fav) => fav.id === movie.id)) {
			favorites.push(movie);
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
		}
	};

	const removeFavoriteMovie = (id: number): void => {
		let favorites = getFavoriteMovies();
		favorites = favorites.filter((movie) => movie.id !== id);
		localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
	};

	const handleFavorite = (movie: Movie): void => {
		const { results } = movies;
		const isFavorite = results.some((m) => m.id === movie.id && m.favorite);
		if (isFavorite) {
			removeFavoriteMovie(movie.id);
		} else {
			addFavoriteMovie(movie);
		}
		setMovies((prev) => ({
			...prev,
			results: prev.results.map((m) =>
				m.id === movie.id ? { ...m, favorite: !m.favorite } : m,
			),
		}));
	};

	const checkFavorites = () => {
		const favorites = getFavoriteMovies();
		const { results } = movies;
		setMovies((prev) => ({
			...prev,
			results: results.map((movie) => ({
				...movie,
				favorite: favorites.some((fav) => fav.id === movie.id),
			})),
		}));
	};

	return {
		getFavoriteMovies,
		addFavoriteMovie,
		removeFavoriteMovie,
		handleFavorite,
		checkFavorites,
	};
};

export default useFavorites;
