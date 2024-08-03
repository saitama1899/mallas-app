import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import fetchData from "@/utils/api";
import { debounce } from "@/utils/debounce";
import { useCallback, useMemo, useState } from "react";

const useSearchBar = () => {
	const { setLoading, setResults } = useAppContext();
	const [query, setQuery] = useState<string>("");
	const { search, movie } = apiPaths;

	const handleSearch = useCallback(
		async (query: string) => {
			console.log("Searching for:", query);
			setLoading(true);

			try {
				const { data } = await fetchData({
					queryParams: { query: query },
					path: `${search}/${movie}`,
				});
				setResults(data.results);
			} catch (error) {
				setResults("No results found");
			} finally {
				setLoading(false);
			}
		},
		[setLoading, setResults, search, movie],
	);

	const debouncedSearch = useMemo(
		() =>
			debounce((query: string) => {
				handleSearch(query);
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
