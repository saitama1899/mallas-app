import useFavorites from "@/hooks/useFavorites";
import type { Movie } from "@/types/movies";
import Image from "next/image";
import { useRouter } from "next/router";
import { MovieInfo, MovieTitle, MovieWrapper, Poster } from "./Movie.style";

const Movies: (movie: Movie) => JSX.Element = (movie: Movie) => {
	const { handleFavorite } = useFavorites();
	const router = useRouter();

	const handleClick = () => {
		router.push(`/movies/${movie.id}`);
	};

	return (
		<MovieWrapper onClick={handleClick}>
			<Poster src={movie.poster_path} alt={movie.title} />
			<MovieInfo>
				<MovieTitle>{movie.title}</MovieTitle>
				<Image
					src={`/images/icons/${movie.favorite ? "fav" : "no-fav"}.svg`}
					alt="Fav"
					className="fav"
					onClick={(e) => handleFavorite(e, movie)}
					width={17}
					height={15}
				/>
			</MovieInfo>
		</MovieWrapper>
	);
};

export default Movies;
