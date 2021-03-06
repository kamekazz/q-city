import { createGlobalStyle } from 'styled-components';
import { styleColor } from './styleThem';

const GlobalStyle = createGlobalStyle`
/* *,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
} */
body {
    /* box-sizing: border-box; */
    font-family: "Lato", sans-serif;
    /* font-weight: 400; */
    background-color: #0a3f6311;
    color: ${styleColor.color.greyDark};
    margin: 0;
}
::selection {
    background-color: ${styleColor.primary};
    color: ${styleColor.secondary};
}
/* width */
::-webkit-scrollBar {
    width: 7px;
}
  
/* Track */
::-webkit-scrollBar-track {
    box-shadow: inset 0 0 5px ${styleColor.color.greyDark3}; 
    background: ${styleColor.color.greyDark2}; 
}
/* Handle */
::-webkit-scrollBar-thumb {
    background-image:  linear-gradient(
        to  bottom,
        rgba( 11, 114, 185, 1),
        rgba( 11, 114, 185, 1),
        rgba( 11, 114, 185, 0.8),
        rgba( 255, 186, 96 , 0.8),
        rgba( 255, 186, 96 , 0.8)
    );
    border-radius: 3px;
    transition: all .2s ease-out;
}
  
/* Handle on hover */
::-webkit-scrollBar-thumb:hover {
    background:${styleColor.secondary}; 
}
`;

export default GlobalStyle;
