// import logo from './logo.svg';
// import './App.css';
import Loginpage from "./Loginpage/Loginpage";
import Registerpage from "./Registerpage/Registerpage";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

import { useState } from "react";
import Header from "./Components/Headder/Header";
import AllJobs from "./Components/AllJobs/AllJobs";
import PostAjob from "./Screens/PostAJob/PostAjob";
import Modal from "./Components/modal/Modal";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import PasswordReset from "./PasswordReset/PasswordReset";
import Candidate from "./Screens/Candidates/Candidate";

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
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />

        {/* <Route exact path="/alljobs" element={<AllJobs />} />
        <Route exact path="/postjob" element={<Modal />} />
        <Route exact path="/postjobmodal" element={<Modal />} />
        <Route exact path="/registeruser" element={<Registerpage />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/passwordreset" element={<PasswordReset />} /> */}

        {/* <Route exact path="/alljobs" element={<AllJobs />} /> */}
        {/* <Route exact path="/candidate" element={<Candidate />} /> */}

        <Route
          path="/login"
          element={
            isAuthorized ? (
              <Navigate to={"/"} />
            ) : (
              <Loginpage setIsAuthorized={setIsAuthorized} />
            )
          }
        />
        <Route
          exact
          path="/"
          element={isAuthorized ? <Homepage /> : <Navigate to={"/login"} />}
        />

        <Route
          exact
          path="/alljobs"
          element={isAuthorized ? <AllJobs /> : <Navigate to={"/login"} />}
        />

        <Route
          exact
          path="/postjob"
          element={isAuthorized ? <Modal /> : <Navigate to={"/login"} />}
        />
        <Route exact path="/registeruser" element={<Registerpage />} />
        <Route
          exact
          path="/passwordreset"
          element={
            isAuthorized ? <PasswordReset /> : <Navigate to={"/login"} />
          }
        />

        <Route
          exact
          path="/*"
          element={
            isAuthorized ? <h1> Not Found</h1> : <Navigate to={"/login"} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
