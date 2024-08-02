import SearchBar from "@/components/ui/SearchBar/SearchBar";
import HomeWrapper from "./Home.style";

const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<SearchBar onSearch={() => {}} />
		</HomeWrapper>
	);
};

export default Home;
