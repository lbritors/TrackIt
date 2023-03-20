import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import BaseURL from "../constants/BaseURL";
import HabitItem from "./HabitItem";
import UserContext from "../UserContext";

export default function HabitList(props) {

    const {token} = useContext(UserContext);
    const [habitFetched, setHabitFetched] = useState([]);
    console.log("habito", habitFetched)

    useEffect(() => {
        const url = `${BaseURL}/habits`;
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config);
        promise.then((res) => {
            console.log(res.data)
            setHabitFetched(...habitFetched, res.data);
        });
        promise.catch((err) => alert(err.response.data.message));
    }, [])


    return(
        <> 

            {habitFetched.map((h, i) => <HabitItem nome={h.name} key={h.id} id={h.id} dias={h.days} habitFetched={habitFetched} setHabitFetched={setHabitFetched}></HabitItem>)}
            
        </>
    );

}




