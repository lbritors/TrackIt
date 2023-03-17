import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import BaseURL from "../constants/BaseURL";
import axios from "axios";
import WeekButton from "./WeekButton";


export default function HabitItem(props) {
    const {nome, id, dias} = props;
    console.log(nome);
    
    
    return(
        <Container>
            <div>
                <p>{nome}</p>
                <ion-icon name="trash-outline"></ion-icon>
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
