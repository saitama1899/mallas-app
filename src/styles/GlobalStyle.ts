import { MainTheme } from "@/theme/MainTheme";
import {
	type DefaultTheme,
	type GlobalStyleComponent,
	createGlobalStyle,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<object, DefaultTheme> =
	createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto Condensed, sans-serif;
  }
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:  ${MainTheme.colors.primary};
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${MainTheme.colors.scrollbar};
  }
`;

export default GlobalStyle;
