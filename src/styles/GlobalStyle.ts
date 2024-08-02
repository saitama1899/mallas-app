import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
