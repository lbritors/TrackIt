import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LoginPage setToken={setToken}></LoginPage>} ></Route>
        <Route path="/cadastro" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/habitos" element={<HabitsPage token={token}></HabitsPage>}></Route>
        <Route path="/hoje" element={<TodayPage token={token}></TodayPage>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
