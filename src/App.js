import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import Head from "./components/head/Head";
import Auth from "./pages/auth/Auth";
import Friends from "./pages/friends/Friends";
import Group from "./pages/group/Group";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Market from "./pages/market/Market";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/SignUp";
import Watch from "./pages/watch/Watch";
function App() {

  const user = useSelector((state) => state.authReducer.authData)

  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Head />
        <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="/friends"
          element={user ? <Friends /> : <Navigate to="../auth" />}
        />
        <Route
          path="/watch"
          element={user ? <Watch /> : <Navigate to="../auth" />}
        />
        <Route
          path="/market"
          element={user ? <Market /> : <Navigate to="../auth" />}
        />
        <Route
          path="/group"
          element={user ? <Group /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;