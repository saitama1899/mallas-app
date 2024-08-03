import {
	GridContainer,
	GridItem,
} from "@/components/ui/Cards/Container/CardsContainer.style";
import Movie from "@/components/ui/Cards/Movie/Movie";
import { useAppContext } from "@/context/AppContext";
import { FavoritesScreenWrapper } from "./FavoritesScreen.style";

const FavoritesScreen: React.FC = () => {
	const { movies } = useAppContext();

	return (
		<FavoritesScreenWrapper>
			<h1>Favorites</h1>
			<GridContainer>
				{movies.results.map((movie) => (
					<GridItem key={movie.id}>
						<Movie {...movie} />
					</GridItem>
				))}
			</GridContainer>
		</FavoritesScreenWrapper>
	);
};

export default FavoritesScreen;
