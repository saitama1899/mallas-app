import type { Movies } from "@/types/movies";

const initialMovies: Movies = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
};

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

export { initialMovies, imageBaseUrl };
