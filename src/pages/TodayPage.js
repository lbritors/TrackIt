import NavBarBottom from "../components/NavBarBottom"
import NavBarTop from "../components/NavBarTop"
import styled from "styled-components"
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import BaseURL from "../constants/BaseURL";
import UserContext from "../UserContext";
import axios from "axios";
import TodayCard from "../components/TodayCard";


export default function TodayPage() {

const {token, habitosHoje, setHabitosHoje, calcDone} = useContext(UserContext);
const [feito, setFeito] = useState([]);
const [loading, setLoading] = useState(false);
const [update, setUpdate] = useState(false);

const porcentagem = calcDone();

require('dayjs/locale/pt-br');
const day = dayjs().locale('pt-br').format(`dddd, DD/MM`).split('');

function tranformDay() { 

    for(let i = 0; i < day.length; i++) {
        if(i === 0) {
            day[i] = day[i].toUpperCase();
        }
        
    }

}

tranformDay();
useEffect(() => {
    setLoading(true);
    const url = `${BaseURL}/habits/today`;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(url, config);
    promise.then((res) => {
        console.log(res.data);
        const habito = res.data;
        setHabitosHoje(habito);
        setLoading(false);
        
    }, [update]);
        
   

    promise.catch((err) => console.log(err.response.data));
}, []);




if(loading) {
    return(
        <p>Carregando...</p>
    )
}



return (
    <>
        <NavBarTop/>
        <ContainerToday>
            <ContainerTitulo loading={loading}>
                <h2 data-test="today">{day}</h2>
            </ContainerTitulo>
            {habitosHoje.length === 0 ? <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3> : habitosHoje.length > 1 &&
               <>
                <DoneHabits data-test="today-counter">{`${porcentagem}% dos hábitos concluídos`}</DoneHabits>
                {habitosHoje.map(h => <TodayCard key={h.id} feito={feito} setFeito={setFeito} verde={h.done === true?  "verde" : "naoVerde"} setUpdate={setUpdate} update={update}  currentSequence={h.currentSequence} highestSequence={h.highestSequence} name={h.name} id={h.id} done={h.done}/>)}
                </> 
            }  
        </ContainerToday>
        <NavBarBottom porcentagem={porcentagem}/>
    
    
    </>
)

}

const ContainerToday = styled.div`
background-color: #F2F2F2;
min-height: 667px;
width: 375px;
border-radius: 0px;
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
font-family: 'Lexend Deca';
    

`

const ContainerTitulo = styled.div`
width: 360px;
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Lexend Deca';

    h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
   
    font-style: normal;
    font-weight: 400;
    margin-left: 15px;
    }

    h3 {
            
            color: #BABABA;
            font-size: 18px;
            line-height: 22px;
            margin-top: 6px;
            margin-left: 15px;
        }


`

const DoneHabits = styled.p`
font-family: 'Lexend Deca';
color: #8FC549;font-weight: 400;
font-size: 17.976px;
line-height: 22px;
font-weight: 400;
font-size: 18px;
line-height: 22px;


`