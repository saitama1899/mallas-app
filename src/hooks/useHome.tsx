import { useEffect } from "react";
import useMovies from "./useMovies";
const useHome = () => {
	const { getMovies } = useMovies();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getMovies();
	}, []);

};

export default useHome;
