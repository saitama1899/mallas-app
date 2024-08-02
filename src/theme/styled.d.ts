import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
		};
		layout: {
			headerHeight: string;
		};
	}
}
