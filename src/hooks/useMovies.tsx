import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import { initialMovies } from "@/data/movies";
import type { Movie, Movies } from "@/types/movies";
import fetchData from "@/utils/api";
import { mapMovies } from "@/utils/movies";

const useMovies = () => {
	const { setLoading, setResults, setMovies } = useAppContext();
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

	return { getMovies };
};

export default useMovies;
