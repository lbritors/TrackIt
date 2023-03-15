import styled from "styled-components";
import NavBarBottom from "../components/NavBarBottom";
import NavBarTop from "../components/NavBarTop";

export default function HabitsPage() {
    return(
        <>
        <NavBarTop></NavBarTop>
        <ContainerHabits>
            <TituloHabitos>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </TituloHabitos>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </ContainerHabits>
        <NavBarBottom></NavBarBottom>
        </>
    );
}


const ContainerHabits = styled.div`
background-color: #F2F2F2;
height: 667px;
width: 375px;
border-radius: 0px;
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
    p{
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    width: 340px;
    }

`

const TituloHabitos = styled.div`
width: 360px;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;

    h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    margin-left: 15px;
    }
    button {
        width: 40px;
        height: 35px;
    }
`