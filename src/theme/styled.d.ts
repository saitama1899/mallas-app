import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			input_placeholder: string;
			border: string;
			scrollbar: string;
		};
		layout: {
			header_height: string;
		};
		breakpoints: {
			xs: string;
			sm: string;
			sd: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
	}
}
