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
			headerHeight: string;
		};
	}
}
