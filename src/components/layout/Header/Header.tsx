import Image from "next/image";
import type React from "react";
import HeaderWrapper from "./Header.style";

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Image
				src="/images/marvel-logo.svg"
				alt="Marvel Logo"
				className="logo"
				width={130}
				height={52}
			/>
			<Image
				src="/images/icons/fav.svg"
				alt="Marvel Logo"
				className="fav"
				width={24}
				height={21}
			/>
		</HeaderWrapper>
	);
};

export default Header;
