import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function NavBarBottom() {
    return(
        <ContainerBottom>
            <Link><p>Hábitos</p></Link>
            <ContainerProgressBar>
                <CircularProgressbar/>
            </ContainerProgressBar>
            <Link><p>Histórico</p></Link>
        </ContainerBottom>
    );


}



const ContainerBottom = styled.div`
width: 375px;
height :70px;
display: flex;
bottom: 0;
left: 0;
position: fixed;
background-color: white;
justify-content: space-around;
align-items: center;



    a {
        text-decoration: none;

    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }

`
const ContainerProgressBar = styled.div`
width: 91px;
height: 91px;
position: absolute;
bottom: 20px;
left: 145px;


`