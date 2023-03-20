import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import BaseURL from "../constants/BaseURL";
import axios from "axios";
import WeekButton from "./WeekButton";


export default function HabitItem(props) {
    const {nome, id, dias, habitFetched, setHabitFetched} = props;
    const {token} = useContext(UserContext);

    function deleteHabit(id, nome, dias, habitos) {
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



    console.log(nome);
    
    
    return(
        <Container>
            <div>
                <p>{nome}</p>
                <ion-icon name="trash-outline" onClick={() => deleteHabit(id, nome, dias,habitFetched)}></ion-icon>
            </div>
            <WeekButton/>
        </Container>
        

    );
}

const Container= styled.div`
height: 91px;
width: 340px;
border-radius: 5px;
background-color: white;
margin: 10px 0 10px 0;
    div:nth-child(1){
        padding: 6px;
        display: flex;
        justify-content: space-around;
        ion-icon{
            font-size: 20px;

        }
    }

`
