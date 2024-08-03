import useFavorites from "@/hooks/useFavorites";
import Image from "next/image";
import type React from "react";
import { FavCount, HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
	const { getFavoriteMovies } = useFavorites();
	const favCount = getFavoriteMovies().length;

	return (
		<HeaderWrapper>
			<Image
				src="/images/marvel-logo.svg"
				alt="Marvel Logo"
				className="logo"
				width={130}
				height={52}
			/>
			<FavCount>
				<Image
					src={`/images/icons/${favCount > 0 ? "fav" : "no-fav"}.svg`}
					alt="Marvel Logo"
					className="fav"
					width={17}
					height={15}
				/>
				<span>{favCount}</span>
			</FavCount>
		</HeaderWrapper>
	);
};

export default Header;
