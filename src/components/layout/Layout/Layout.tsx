import type { LayoutProps } from "@/types/layout";
import type React from "react";
import Header from "../Header/Header";
import { LayoutWrapper, MainContent } from "./Layout.style";

const Layout: React.FC<LayoutProps> = ({ children, hide = false }) => {
	return (
		<LayoutWrapper>
			{!hide && <Header />}
			<MainContent hide={hide}>{children}</MainContent>
		</LayoutWrapper>
	);
};

export default Layout;
