// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`

    font-family: 'open-san', sans-serif;

    a {
       text-decoration: none;
       color: inherit;
       &:hover {
        color: inherit; 
      }
    }

    section {
      padding: 20px 0;
    }
`;

export default GlobalStyle;
