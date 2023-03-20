import { useContext } from "react";
import styled from "styled-components";
import NavBarBottom from "../components/NavBarBottom";
import NavBarTop from "../components/NavBarTop";
import UserContext from "../UserContext";






export default function HistoryPage() {
    const {calcDone} = useContext(UserContext);
    const porcentagem = calcDone();
    return(
        <>
        <NavBarTop/>
        <ContainerHistory>
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </ContainerHistory>
        <NavBarBottom porcentagem={porcentagem}/>

        </>
    )
}


const ContainerHistory = styled.div`
background-color: #F2F2F2;
min-height: 667px;
width: 375px;
border-radius: 0px;
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: flex-start;
overflow-y: scroll;
margin-bottom: 70px;
font-family: 'Lexend Deca';

    h2{
        color: #126BA5;
        font-size: 22.976px;
        line-height: 29px;
        margin-top: 12px;
        margin-left: 6px;
    }
    p{
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    width: 340px;
    margin-left: 6px;
    margin-top: 12px;
    }

`