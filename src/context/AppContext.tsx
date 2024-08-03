import { initialMovies } from "@/data/movies";
import type { Movies } from "@/types/movies";
import type React from "react";
import { type ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
	loading: boolean;
	results: string;
	movies: Movies;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setResults: React.Dispatch<React.SetStateAction<string>>;
	setMovies: React.Dispatch<React.SetStateAction<Movies>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState("");
	const [movies, setMovies] = useState<Movies>(initialMovies);

	return (
		<AppContext.Provider
			value={{ loading, results, movies, setLoading, setResults, setMovies }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
