import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
   --darkBlue: #10151F;
   --grey: #F8F6F7;
   --grey2: #E1DFE1;
   --darkBlue2: #3E424A;
   --red: #FF4000;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
font-family: "Poppins", sans-serif;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
font-family: "Poppins", sans-serif;
background-color: transparent;
border: none;
cursor: pointer;
}

input{
    font-family: "Poppins", sans-serif;
    outline: none;
}

li{
    list-style-type: none;
}

`;

export default GlobalStyles;
