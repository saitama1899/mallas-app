import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import { initialMovies } from "@/data/movies";
import type { MovieDetail, Movies } from "@/types/movies";
import fetchData from "@/utils/api";
import { mapMovieDetail, mapMovies } from "@/utils/movies";

const useMovies = () => {
	const { setLoading, setResults, setMovies, setSelectedMovie } =
		useAppContext();
	const { popular, movie } = apiPaths;

	const getMovies = async () => {
		setLoading(true);

		try {
			const data: Movies = await fetchData({
				path: `${movie}/${popular}`,
			});
			if (data) {
				const movies = mapMovies(data);
				setMovies(movies);
			}
		} catch (error) {
			setResults("No results found");
			setMovies(initialMovies);
		} finally {
			setLoading(false);
		}
	};

	const getMovie = async (id: number) => {
		setLoading(true);
		try {
			const data: MovieDetail = await fetchData({
				path: `${movie}/${id}`,
			});
			if (data) {
				const movie = mapMovieDetail(data);
				setSelectedMovie(movie);
			}
		} catch (error) {
			setResults("No results found");
			setSelectedMovie(null);
		} finally {
			setLoading(false);
		}
	};
	return { getMovies, getMovie };
};

export default useMovies;
