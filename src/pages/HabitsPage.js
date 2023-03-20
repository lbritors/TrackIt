import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NavBarBottom from "../components/NavBarBottom";
import NavBarTop from "../components/NavBarTop";
import CreateHabitCard from "../components/CreateHabitCard";
import HabitList from "../components/HabitList";
import UserContext from "../UserContext";
import axios from "axios";
import BaseURL from "../constants/BaseURL";

export default function HabitsPage() {
    const {token, calcDone} = useContext(UserContext);
    const [habit, setHabit] = useState(false);
    const [nameHabit, setNameHabit] =useState("");
    const [clickedDay, setClickedDay] = useState([]);
    const [dataCard, setDataCard] = useState([]);
    const [habitFetched, setHabitFetched] = useState([]);
    const [clicou, setClicou] = useState(false);

    console.log(habitFetched);

    useEffect(() => {
        const url = `${BaseURL}/habits`;
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config);
        promise.then((res) => {
             setHabit(true);
            console.log(res.data)
            setHabitFetched(...habitFetched, res.data);
        });
        promise.catch((err) => alert(err.response.data.message));
    }, []);

    const porcentagem = calcDone();

   

    return(
        <>
        <NavBarTop></NavBarTop>
        <ContainerHabits data-test="habit-create-container">
            <TituloHabitos>
                <h2>Meus hábitos</h2>
                <button data-test="habit-create-btn" onClick={() => setClicou(true)}>+</button>
            </TituloHabitos>
            {habitFetched.length === 0  ? 
                 <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : (clicou === true ?     
                <CreateHabitCard dataCard={dataCard} setDataCard={setDataCard} habit={habit} setClicou={setClicou} token={token} setHabit={setHabit} nameHabit={nameHabit} setClickedDay={setClickedDay} clickedDay={clickedDay} setNameHabit={setNameHabit}></CreateHabitCard> :
                <HabitList token={token} setHabit={setHabit} setHabitFetched={setHabitFetched} habitFetched={habitFetched}></HabitList> 
                 )
                 
                }
                
        </ContainerHabits>
        <NavBarBottom porcentagem={porcentagem}></NavBarBottom>
        </>
    );
}




const ContainerHabits = styled.div`
background-color: #F2F2F2;
min-height: 667px;
width: 375px;
border-radius: 0px;
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
margin-bottom: 70px;
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

