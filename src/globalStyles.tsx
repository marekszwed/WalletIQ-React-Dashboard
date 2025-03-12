import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  font-family: "Roboto", sans-serif;
  font-style: normal;
}

body, html {
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
	
}

body::-webkit-scrollbar {
	display: none;
}

html {
  font-size: 62.5%;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
