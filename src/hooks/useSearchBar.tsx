import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import { initialMovies } from "@/data/movies";
import type { Movies } from "@/types/movies";
import fetchData from "@/utils/api";
import { debounce } from "@/utils/debounce";
import { mapMovies } from "@/utils/movies";
import { useCallback, useMemo, useState } from "react";
import useMovies from "./useMovies";

const useSearchBar = () => {
	const { setLoading, setResults, setMovies } = useAppContext();
	const [query, setQuery] = useState<string>("");
	const { search, movie } = apiPaths;
	const { getMovies } = useMovies();

	const getResultsFeedback = (data: Movies) => {
		const { results } = data;
		const resultsLength = results.length;
		return resultsLength > 0
			? `${resultsLength} results found`
			: "No results found";
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const handleSearch = useCallback(async (query: string) => {
		setLoading(true);

		try {
			const data = await fetchData({
				queryParams: { query: query },
				path: `${search}/${movie}`,
			});
			setResults(getResultsFeedback(data));
			setMovies(mapMovies(data));
		} catch (error) {
			setResults("No results found");
			setMovies(initialMovies);
		} finally {
			setLoading(false);
		}
	}, []);

	const checkQuery = (query: string) => {
		if (query.length === 0) {
			setResults("");
			getMovies();
			return false;
		}
		return true;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const debouncedSearch = useMemo(
		() =>
			debounce((query: string) => {
				if (checkQuery(query)) {
					handleSearch(query);
				}
			}, 500),
		[handleSearch],
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		debouncedSearch(event.target.value);
	};

	return { query, handleInputChange, handleSearch };
};

export default useSearchBar;
