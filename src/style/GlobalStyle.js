import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    input {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        box-sizing: border-box;
        ::placeholder{
                color : #DBDBDB;
        }
    }
    a {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
    }
    button {
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
    }
    h1 {
        font-family: 'Playball', cursive;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }



`

export default GlobalStyle;