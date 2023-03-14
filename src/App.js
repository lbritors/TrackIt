import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HabitsPage from "./pages/HabitsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cadastro" element={<LoginPage></LoginPage>}></Route>
        <Route path="/habitos" element={<HabitsPage></HabitsPage>}> </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
