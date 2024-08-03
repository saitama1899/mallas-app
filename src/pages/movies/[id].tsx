// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import type { ParsedUrlQuery } from "querystring";
import MovieDetailScreen from "@/components/pages/Movie/MovieDetailScreen";
// import {
// 	MovieDetails,
// 	MovieTitle,
// 	MovieWrapper,
// } from "@/components/ui/Cards/Movie/MovieDetail.style";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppContext } from "@/context/AppContext";
import { apiPaths } from "@/data/api";
import useMovies from "@/hooks/useMovies";
import type {
	MovieDetailProps,
	MovieDetail as MovieDetailType,
} from "@/types/movies";
import fetchData from "@/utils/api";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { mapMovieDetail } from "@/utils/movies";

interface Params extends ParsedUrlQuery {
	id: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ initialMovie }) => {
	const { setSelectedMovie, selectedMovie, loading } = useAppContext();
	const { getMovie } = useMovies();
	const router = useRouter();
	const { id } = router.query as Params;

	useEffect(() => {
		if (!initialMovie && id) {
			getMovie(Number(id));
		} else {
			setSelectedMovie(initialMovie);
		}
	}, [id, initialMovie, getMovie, setSelectedMovie]);

	if (loading || !selectedMovie) {
		return <Spinner />;
	}

	return <MovieDetailScreen movie={selectedMovie} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as Params;
	const { movie } = apiPaths;

	try {
		const data: MovieDetailType = await fetchData({
			path: `${movie}/${id}`,
		});
    

		return {
			props: {
				initialMovie: mapMovieDetail(data),
			},
		};
	} catch (error) {
		console.error("Failed to fetch movie:", error);
		return {
			props: {
				initialMovie: null,
			},
		};
	}
};

export default MovieDetail;
