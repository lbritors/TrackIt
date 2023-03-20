import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import UserContext from "./UserContext";
import HistoryPage from "./pages/HistoryPage";

function App() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState([]);
  const [habitosHoje, setHabitosHoje] = useState([]);


  function calcDone() {
    let feito = 0;
    habitosHoje.forEach(h => {
        if(h.done === true) {
            feito = feito +1;
        }
    });
    const total = habitosHoje.length;
    const porcentagem = (feito/total)*100;
    return `${Math.round(porcentagem.toFixed(2))}`;

}



  return (
    
      <BrowserRouter>
      <UserContext.Provider value={{token,setToken, setUserData, userData, habitosHoje, setHabitosHoje, calcDone}}>
        <Routes>
        
          <Route  path="/" element={<LoginPage setToken={setToken} setUserData></LoginPage>} ></Route>
          <Route path="/cadastro" element={<SignUpPage ></SignUpPage>}></Route>
          <Route path="/habitos" element={<HabitsPage habitosHoje={habitosHoje} calcDone={calcDone} setHabitosHoje={setHabitosHoje}  token={token}  userData={userData}></HabitsPage>}></Route>
          <Route path="/hoje" element={<TodayPage token={token} calcDone={calcDone} userData={userData} habitosHoje={habitosHoje} setHabitosHoje={setHabitosHoje}></TodayPage>}></Route>
          <Route path="/historico" element={<HistoryPage habitosHoje={habitosHoje} calcDone={calcDone} setHabitosHoje={setHabitosHoje}/>}></Route>
        
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      
 
  );
}

export default App;
