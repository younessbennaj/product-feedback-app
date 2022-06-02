import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
   * {
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
   }
   body {
    padding: 0;
    margin: 0;
   }

   h1,h2,h3,h4 {
    font-family: 'Jost', sans-serif;
   }

   p, span {
    font-family: 'Jost', sans-serif;
    color: ${theme.colors.jewelCave};
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
   }
 `
