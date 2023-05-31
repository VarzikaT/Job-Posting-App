// import logo from './logo.svg';
// import './App.css';
import Loginpage from "./Loginpage/Loginpage";
import Registerpage from "./Registerpage/Registerpage";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Home from "./Screens/Home/Home";
import { useState } from "react";
import Header from "./Components/Headder/Header";
import AllJobs from "./Components/AllJobs/AllJobs";
import PostAjob from "./Screens/PostAJob/PostAjob";
import Modal from "./Components/modal/Modal";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import PasswordReset from "./PasswordReset/PasswordReset";

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
        <Route exact path="/alljobs" element={<AllJobs />} />
        <Route exact path="/postjob" element={<PostAjob />} />
        <Route exact path="/postjobmodal" element={<Modal/>} />
        <Route exact path="/registeruser" element={<Registerpage/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/passwordreset" element={<PasswordReset/>} />
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
          exact
          path="/home"
          element={isAuthorized ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
