import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Mainpage from "./Components/Mainpage";
// import Card from "./Components/Card";
import HospitalForm from './Components/HospitalForm';
import HospitalInfoBySpeciality from './Components/HospitalInfoBySpeciality';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hospitalinfobyspeciality" element={<HospitalInfoBySpeciality />} />
        

        <Route path="/hospitalform" element={<HospitalForm />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Mainpage" element={<Mainpage/>}/>
        <Route path="/mainpage" element={isLoggedIn ? <Mainpage /> : <Navigate to="/login" />} />
       
      </Routes>
    </Router>
  );
}

export default App;
