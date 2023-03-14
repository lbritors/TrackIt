import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
