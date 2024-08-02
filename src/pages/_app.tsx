import Layout from "@/components/layout/Layout/Layout";
import { AppProvider } from "@/context/AppContext";
import { noHeaderRoutes } from "@/data/app";
import { MainTheme } from "@/theme/MainTheme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const hide = noHeaderRoutes.includes(router.pathname);

	return (
		<AppProvider>
			<GlobalStyle />
			<ThemeProvider theme={MainTheme}>
				<Layout hide={hide}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</AppProvider>
	);
};

export default App;
