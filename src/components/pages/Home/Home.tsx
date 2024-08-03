import SearchBar from "@/components/ui/SearchBar/SearchBar";
import useHome from "@/hooks/useHome";
import HomeWrapper from "./Home.style";
import { useAppContext } from "@/context/AppContext";

const Home: React.FC = () => {
  const { loading } = useAppContext();

	useHome();
	return (
		<HomeWrapper>
			<SearchBar />
      {loading ? <p>Loading...</p> : <p>Results</p>}
		</HomeWrapper>
	);
};

export default Home;
