import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import BaseURL from "../constants/BaseURL";
import HabitItem from "./HabitItem";
import UserContext from "../UserContext";

export default function HabitList(props) {
    const {setHabit, habitFetched, setHabitFetched} = props;
    const {token} = useContext(UserContext);
    console.log("habito", habitFetched)




    return(
        <> 

            {habitFetched.map((h, i) => <HabitItem nome={h.name}  key={h.id} id={h.id} dias={h.days} habitFetched={habitFetched} setHabitFetched={setHabitFetched}></HabitItem>)}
            
        </>
    );

}




