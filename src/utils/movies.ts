import type { Movie, Movies } from "@/types/movies";

const mapMovies = (movies: Movies) => {
	const { results } = movies;
	const mappedMovies = results.map((movie: Movie) => {
		const { id, title, poster_path } = movie;
		return { id, title, poster_path };
	});

	return { ...movies, results: mappedMovies };
};

export { mapMovies };
