import useDragScroll from "@/hooks/useDragScroll";
import useFavorites from "@/hooks/useFavorites";
import type { MovieDetail as MovieDetailType } from "@/types/movies";
import Image from "next/image";
import type React from "react";
import {
	CompaniesContent,
	CompaniesGrid,
	CompaniesTitle,
	CompaniesWrapper,
	CompanyImage,
	CompanyItem,
	CompanyTitle,
	Description,
	HeaderContent,
	HeaderWrapper,
	MainInfo,
	MovieDetailWrapper,
	Poster,
	Title,
	MainInfoWrapper,
} from "./MovieDetailScreen.style";

interface MovieDetailScreenProps {
	movie: MovieDetailType | null;
}

const MovieDetail: React.FC<MovieDetailScreenProps> = ({ movie }) => {
	if (!movie) return null;
	const { checkFavoriteDetail } = useFavorites();

	const scrollRef = useDragScroll();
	return (
		<MovieDetailWrapper>
			<HeaderWrapper>
				<HeaderContent>
					<Poster src={movie.backdrop_path ?? ""} alt={movie.title} />
					<MainInfoWrapper>
						<MainInfo>
							<Title>{movie.title}</Title>
							<Image
								src={`/images/icons/${checkFavoriteDetail(movie) ? "fav" : "no-fav"}.svg`}
								alt="Fav"
								className="fav"
								width={24}
								height={21}
							/>
						</MainInfo>
						<Description>{movie.overview}</Description>
					</MainInfoWrapper>
				</HeaderContent>
			</HeaderWrapper>

			<CompaniesWrapper>
				<CompaniesContent>
					<CompaniesTitle>Producers</CompaniesTitle>
					{movie.production_companies?.length ? (
						<CompaniesGrid ref={scrollRef} draggable="false">
							{movie?.production_companies?.map((company) => (
								<CompanyItem key={company?.id}>
									<CompanyImage src={company.logo_path} alt={company.name} />
									<CompanyTitle>{company.name}</CompanyTitle>
								</CompanyItem>
							))}
						</CompaniesGrid>
					) : (
						<p>No companies found</p>
					)}
				</CompaniesContent>
			</CompaniesWrapper>
		</MovieDetailWrapper>
	);
};

export default MovieDetail;
