import { useState } from "react";

const useSearchBar = ({ onSearch }: UseSearchBarProps) => {
	const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

	const count: number = 0;
	const results =
		count === 1 ? "1 result" : count === 0 ? "No results" : `${count} results`;

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSearch = () => {
		onSearch(query);
	};

	return { query, results, handleInputChange, handleSearch };
};

export default useSearchBar;
