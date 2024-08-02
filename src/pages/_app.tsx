import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
