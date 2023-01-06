import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from "./components/login/Login";
import OrganizationSpeece from "./components/OrganizationSpeece/OrganizationSpeece";

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/speece" element={<OrganizationSpeece/>} />
          <Route path="/login" element={<Login/>} />
       </Routes>
    </>
  )
}

export default App
