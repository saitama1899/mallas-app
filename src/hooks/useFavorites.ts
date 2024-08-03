import { useAppContext } from "@/context/AppContext";
import type { Movie, MovieDetail } from "@/types/movies";
import { useEffect, useState } from "react";

const useFavorites = () => {
	const FAVORITES_KEY = "favorites";
	const { movies, setMovies } = useAppContext();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			checkFavorites();
			handleFavoritePage();
		}
	}, [isClient]);

	const getFavoriteMovies = (): Movie[] => {
		if (!isClient) return [];
		const favorites = localStorage.getItem(FAVORITES_KEY);
		return favorites ? JSON.parse(favorites) : [];
	};

	const handleFavoritePage = () => {
		if (window.location.pathname === "/favorites") {
			const favorites = getFavoriteMovies();
			setMovies((prev) => ({
				...prev,
				results: favorites,
			}));
		}
	};

	const addFavoriteMovie = (movie: Movie): void => {
		const favorites = getFavoriteMovies();
		if (!favorites.some((fav) => fav.id === movie.id)) {
			const newMovie = { ...movie, favorite: true };
			favorites.push(newMovie);
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
		}
	};

	const removeFavoriteMovie = (id: number): void => {
		let favorites = getFavoriteMovies();
		favorites = favorites.filter((movie) => movie.id !== id);
		localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
	};

	const handleFavorite = (e: React.MouseEvent, movie: Movie): void => {
		e.stopPropagation();
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

	const checkFavoriteDetail = (movie: MovieDetail): boolean => {
		const favorites = getFavoriteMovies();
		return favorites.some((fav) => fav.id === movie.id);
	};

	return {
		getFavoriteMovies,
		addFavoriteMovie,
		removeFavoriteMovie,
		handleFavorite,
		checkFavorites,
		checkFavoriteDetail,
	};
};

export default useFavorites;
