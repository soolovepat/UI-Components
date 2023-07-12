import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #f3f3f3;
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  main {
    display: flex;
    justify-content: center;
    gap: 30px;

    

    > section {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    }

  h2 {
    margin: 0 0 10px 0;
    color:#c4c4c4;
  }
`;

export default GlobalStyle;
