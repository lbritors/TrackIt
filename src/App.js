import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState("");
  const [form, setForm] = useState({email:"", name: "", image: "", password:""});


  return (
    
      <BrowserRouter>
      <UserContext.Provider value={{token,setToken, form, setForm}}>
        <Routes>
        
          <Route  path="/" element={<LoginPage setToken={setToken}></LoginPage>} ></Route>
          <Route path="/cadastro" element={<SignUpPage form={form} setForm={setForm}></SignUpPage>}></Route>
          <Route path="/habitos" element={<HabitsPage  token={token} form={form}></HabitsPage>}></Route>
          <Route path="/hoje" element={<TodayPage token={token} form={form}></TodayPage>}></Route>
        
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      
 
  );
}

export default App;
