import { Route, Routes } from "react-router-dom";
import "./App.css"
import Head from "./components/head/Head";
import Friends from "./pages/friends/Friends";
import Group from "./pages/group/Group";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Market from "./pages/market/Market";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/SignUp";
import Watch from "./pages/watch/Watch";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/market" element={<Market />} />
          <Route path="/group" element={<Group />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;