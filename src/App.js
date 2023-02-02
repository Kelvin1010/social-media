import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signup/SignUp";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;