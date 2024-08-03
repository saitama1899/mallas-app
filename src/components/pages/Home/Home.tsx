import {
	GridContainer,
	GridItem,
} from "@/components/ui/Cards/Container/CardsContainer.style";
import Movie from "@/components/ui/Cards/Movie/Movie";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppContext } from "@/context/AppContext";
import useHome from "@/hooks/useHome";
import { HomeWrapper } from "./Home.style";

const Home: React.FC = () => {
	const { loading, movies } = useAppContext();
	useHome();
	return (
		<HomeWrapper>
			<SearchBar />
			{loading ? (
				<Spinner />
			) : (
				<GridContainer>
					{movies.results.map((movie) => (
						<GridItem key={movie.id}>
							<Movie {...movie} />
						</GridItem>
					))}
				</GridContainer>
			)}
		</HomeWrapper>
	);
};

export default Home;
