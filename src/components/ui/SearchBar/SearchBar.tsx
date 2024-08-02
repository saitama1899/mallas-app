import { placeholders } from "@/data/app";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { SearchBarWrapper, SearchButton, SearchInput } from "./SeachBar.style";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSearch = () => {
		onSearch(query);
	};

	return (
		<SearchBarWrapper>
			<SearchButton onClick={handleSearch}>
				<Image
					src="/images/icons/search.svg"
					alt="Search Icon"
					width={17}
					height={17}
				/>
			</SearchButton>
			<SearchInput
				type="text"
				placeholder={placeholders.input.character}
				value={query}
				onChange={handleInputChange}
			/>
		</SearchBarWrapper>
	);
};

export default SearchBar;
