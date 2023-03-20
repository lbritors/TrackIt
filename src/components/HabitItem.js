import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import BaseURL from "../constants/BaseURL";
import axios from "axios";


export default function HabitItem(props) {
    const {nome, id, dias, habitFetched, setHabitFetched} = props;
    const {token} = useContext(UserContext);
    console.log("dias", dias);
   
    function deleteHabit(id,  habitos) {
        console.log(habitos);
        const naoDeletado = habitos.filter(h => id !== h.id);
        console.log(naoDeletado);
        const texto = "Deseja deletar hábito?";
        if(window.confirm(texto) === true) {
            const url = `${BaseURL}/habits/${id}`;
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise = axios.delete(url, config);
            promise.then((res) => {
                console.log(res.data);
                setHabitFetched(naoDeletado);
                
            })  
            promise.catch((err) => console.log(err.response.data)); 
        }
    }



    
    
    
    return(
        <Container dias={dias} data-test="habit-container">
                <div>
                    <p data-test="habit-name">{nome}</p>
                    <ion-icon name="trash-outline" data-test="habit-delete-btn" onClick={() => deleteHabit(id, habitFetched)}></ion-icon>
                </div>
                <div>
                <WeekButton dias={dias} ></WeekButton>
                </div>
        </Container>
        

    );
}


function WeekButton(props) {
    const { dias} = props;
    const letters = ["D", "S", "T" , "Q", "Q", "S", "S"];
    return(

        <>           
        {letters.map((l, i) =><ContainerButton dias={dias} i={i} > <button key={i} dias={dias} i={i}>{l}</button> </ContainerButton>)}
        </>       
        
    )
}
 

const Container= styled.div`
width: 340px;
height: 94px;  
background-color: white;
border-radius: 5px;
margin-bottom: 10px ;
display: flex;
flex-direction: column;
    div:nth-of-type(1) {
        height: min-content;
        padding: 5px;
        display: flex;
    }
    div:nth-of-type(2) {
        display: flex;
        margin-top: 6px;
        height: fit-content;
        align-items: center;
        box-sizing: border-box;
       
    }


`
const ContainerButton = styled.div`

button {
            margin-left: 6px;
            border: 1px solid #D4D4D4;
            height: 30px;
            width: 30px;
            border-radius: 5px;
            background-color:  ${({dias, i}) => dias.includes(i) ? "#CFCFCF" : "white" };
            color: ${({dias, i}) => dias.includes(i) ? "white" : "#DBDBDB" };
            margin: 10px 2px;
        }

`