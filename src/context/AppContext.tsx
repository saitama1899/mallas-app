import { initialMovies } from "@/data/movies";
import type { Movie, Movies } from "@/types/movies";
import type React from "react";
import { type ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
	loading: boolean;
	results: string;
	movies: Movies;
	favorites: Movie[];
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setResults: React.Dispatch<React.SetStateAction<string>>;
	setMovies: React.Dispatch<React.SetStateAction<Movies>>;
	setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState("");
	const [movies, setMovies] = useState<Movies>(initialMovies);
	const [favorites, setFavorites] = useState<Movie[]>([]);

	return (
		<AppContext.Provider
			value={{
				loading,
				results,
				movies,
				favorites,
				setLoading,
				setResults,
				setMovies,
				setFavorites,
			}}
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
