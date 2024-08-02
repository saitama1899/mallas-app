import { useCallback, useMemo, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { debounce } from "../utils/debounce";

const useSearchBar = () => {
	const { setLoading, setResults } = useAppContext();
	const [query, setQuery] = useState<string>("");

	const handleSearch = useCallback(
		(query: string) => {
			console.log("Searching for:", query);
			setLoading(true);

			setTimeout(() => {
				setResults(query ? `Found results for "${query}"` : "No results found");
				setLoading(false);
			}, 500);
		},
		[setLoading, setResults],
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
