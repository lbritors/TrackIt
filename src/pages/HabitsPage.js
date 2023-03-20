import { useContext, useState } from "react";
import styled from "styled-components";
import NavBarBottom from "../components/NavBarBottom";
import NavBarTop from "../components/NavBarTop";
import CreateHabitCard from "../components/CreateHabitCard";
import HabitList from "../components/HabitList";
import UserContext from "../UserContext";

export default function HabitsPage() {
    const {token} = useContext(UserContext);
    const [habit, setHabit] = useState(false);
    const [nameHabit, setNameHabit] =useState("");
    const [clickedDay, setClickedDay] = useState([]);
    const [dataCard, setDataCard] = useState([]);

    
    console.log(dataCard);
   

    return(
        <>
        <NavBarTop></NavBarTop>
        <ContainerHabits data-test="habit-create-container">
            <TituloHabitos>
                <h2>Meus hábitos</h2>
                <button onClick={() => setHabit(true)} data-test="habit-create-btn">+</button>
            </TituloHabitos>
            {habit === false  ?  
                 <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : 
                <CreateHabitCard dataCard={dataCard} setDataCard={setDataCard} habit={habit} token={token}  nameHabit={nameHabit} setClickedDay={setClickedDay} clickedDay={clickedDay} setNameHabit={setNameHabit}></CreateHabitCard>
            
            }
            <HabitList token={token}></HabitList>
                
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
margin-top: 60px;

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

