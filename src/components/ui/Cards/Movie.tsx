import { imageBaseUrl } from "@/data/movies";
import type { Movie } from "@/types/movies";
import Image from "next/image";
import { MovieInfo, MovieTitle, MovieWrapper, Poster } from "./Movie.style";

const Movies: (movie: Movie) => JSX.Element = (movie: Movie) => {
	return (
		<MovieWrapper>
			<Poster src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
			<MovieInfo>
				<MovieTitle>{movie.title}</MovieTitle>
				<Image
					src="/images/icons/no-fav.svg"
					alt="Marvel Logo"
					className="fav"
					width={17}
					height={15}
				/>
			</MovieInfo>
		</MovieWrapper>
	);
};

export default Movies;
