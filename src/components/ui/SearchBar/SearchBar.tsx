import { placeholders } from "@/data/app";
import useSearchBar from "@/hooks/useSearchBar";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import {
	SearchBarWrapper,
	SearchButton,
	SearchInput,
	SearchResults,
} from "./SeachBar.style";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const { query, results, handleInputChange, handleSearch } = useSearchBar({
		onSearch,
	});

	return (
		<>
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
			<SearchResults>{results}</SearchResults>
		</>
	);
};

export default SearchBar;
