import { imageBaseUrl } from "@/data/movies";
import type { Movie, MovieDetail, Movies } from "@/types/movies";

const mapMovies = (movies: Movies) => {
	const { results } = movies;
	const mappedMovies = results.map((movie: Movie) => {
		const { id, title, poster_path } = movie;
		return {
			id,
			title,
			poster_path: poster_path
				? `${imageBaseUrl}${poster_path}`
				: "images/no-image.png",
		};
	});

	return { ...movies, results: mappedMovies };
};

const mapMovieDetail = (movie: Partial<MovieDetail>) => {
	const {
		id,
		title,
		production_companies,
		backdrop_path,
		overview,
		release_date,
		vote_average,
		vote_count,
	} = movie;

	const mappedMovie = {
		id: id || 0,
		title: title || "No title",
		production_companies: production_companies
			? production_companies.map((company) => ({
					...company,
					logo_path: company.logo_path
						? `${imageBaseUrl}${company.logo_path}`
						: "images/no-image.png",
				}))
			: [],
		backdrop_path: backdrop_path
			? `${imageBaseUrl}${backdrop_path}`
			: "images/no-image.png",
		overview: overview || "No overview",
		release_date: release_date || "No release date",
		vote_average: vote_average || 0,
		vote_count: vote_count || 0,
	};

	return mappedMovie;
};

export { mapMovies, mapMovieDetail };
