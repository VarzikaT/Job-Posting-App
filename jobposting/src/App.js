// import logo from './logo.svg';
// import './App.css';
import Loginpage from "./Loginpage/Loginpage";
import Registerpage from "./Registerpage/Registerpage";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Home from "./Screens/Home/Home";
import { useState } from "react";
import Header from "./Components/Headder/Header";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(
    sessionStorage.getItem("isAuthorized")
      ? JSON.parse(sessionStorage.getItem("isAuthorized"))
      : false
  );

  console.log("isAuthorized ", isAuthorized);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={
            isAuthorized ? (
              <Navigate to={"/home"} />
            ) : (
              <Loginpage setIsAuthorized={setIsAuthorized} />
            )
          }
        />
        <Route
          path="/home"
          element={isAuthorized ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
