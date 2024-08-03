import useFavorites from "@/hooks/useFavorites";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { FavCount, HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
	const { getFavoriteMovies } = useFavorites();
	const favCount = getFavoriteMovies().length;

	return (
		<HeaderWrapper>
			<Link href={"/"}>
				<Image
					src="/images/movies-logo.svg"
					alt="Marvel Logo"
					className="logo"
					width={130}
					height={52}
				/>
			</Link>
			<Link href={favCount > 0 ? "/favorites" : "/"}>
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
			</Link>
		</HeaderWrapper>
	);
};

export default Header;
