import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import fetchData from "@/utils/api";
import { useEffect } from "react";

const useHome = () => {
	const { setLoading, setResults } = useAppContext();
	const { discover, movie } = apiPaths;

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async () => {
		setLoading(true);

		try {
			const data = await fetchData({
				path: '/movie/popular',
				// path: `${discover}/${movie}`,
			});
			console.log(data);

			// setResults(data.data.results);
		} catch (error) {
			setResults("No results found");
		} finally {
			setLoading(false);
		}
	};

	return { getMovies };
};

export default useHome;
