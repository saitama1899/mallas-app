import {
	type GlobalStyleComponent,
	createGlobalStyle,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<object, object> = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
