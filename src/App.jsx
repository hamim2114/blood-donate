import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from "./components/login/Login";
import Registration from "./components/login/Registration";
import ProfileHome from "./components/profile/ProfileHome";
import OrganizationSpeece from "./components/OrganizationSpeece/OrganizationSpeece";
import NidVerify from "./components/profile/NidVerify";
import BrnVerify from "./components/profile/BrnVerify";
import ChangePassword from "./components/login/ChangePassword";
import FoodForAll from "./components/project/FoodForAll";
import Education from "./components/project/Education";
import Health from "./components/project/Health";

function App() {

  return (
    <>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="speece" element={<OrganizationSpeece/>} />
            <Route path="login" element={<Login/>} />
            <Route path="registration" element={<Registration/>} />
            <Route path="profile">
              <Route index element={<ProfileHome/>} />
              <Route path="nid-verify" element={<NidVerify/>} />
              <Route path="brn-verify" element={<BrnVerify/>} />
              <Route path="change-password" element={<ChangePassword/>} />
            </Route>
            <Route path="project">
              <Route path="food-for-all" element={<FoodForAll/>}/>
              <Route path="education" element={<Education/>}/>
              <Route path="health" element={<Health/>}/>
            </Route>
          </Route>
       </Routes>


       {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/speece" element={<OrganizationSpeece/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/profile" element={<ProfileHome/>} />
          <Route path="/profile/nid-verify" element={<NidVerify/>} />
          <Route path="/profile/brn-verify" element={<BrnVerify/>} />
          <Route path="profile/change-password" element={<ChangePassword/>} />
       </Routes> */}
    </>
  )
}

export default App
