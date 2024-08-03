import { imageBaseUrl } from "@/data/movies";
import useFavorites from "@/hooks/useFavorites";
import type { Movie } from "@/types/movies";
import Image from "next/image";
import { MovieInfo, MovieTitle, MovieWrapper, Poster } from "./Movie.style";

const Movies: (movie: Movie) => JSX.Element = (movie: Movie) => {
	const { handleFavorite } = useFavorites();

	return (
		<MovieWrapper>
			<Poster src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
			<MovieInfo>
				<MovieTitle>{movie.title}</MovieTitle>
				<Image
					src={`/images/icons/${movie.favorite ? "fav" : "no-fav"}.svg`}
					alt="Marvel Logo"
					className="fav"
					onClick={() => handleFavorite(movie)}
					width={17}
					height={15}
				/>
			</MovieInfo>
		</MovieWrapper>
	);
};

export default Movies;
