import { useAppContext } from "@/context/AppContext";
import useSearchBar from "@/hooks/useSearchBar";
import Image from "next/image";
import type React from "react";
import {
	SearchBarWrapper,
	SearchButton,
	SearchInput,
	SearchResults,
} from "./SeachBar.style";

const SearchBar: React.FC = () => {
	const { query, handleInputChange, handleSearch } = useSearchBar();
	const { results } = useAppContext();

	return (
		<>
			<SearchBarWrapper>
				<SearchButton onClick={() => handleSearch(query)}>
					<Image
						src="/images/icons/search.svg"
						alt="Search Icon"
						width={17}
						height={17}
					/>
				</SearchButton>
				<SearchInput
					type="text"
					placeholder="Search a character..."
					value={query}
					onChange={handleInputChange}
				/>
			</SearchBarWrapper>
			<SearchResults>{results}</SearchResults>
		</>
	);
};

export default SearchBar;
