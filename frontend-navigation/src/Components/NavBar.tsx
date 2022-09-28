import {NavLink, Route} from "react-router-dom";
import DontGoTherePage from "../Pages/DontGoTherePage";
import React from "react";
import IToldYouPage from "../Pages/IToldYouPage";


export default function NavBar(){

    return(
        <div className={"nav-bar"}>
            <NavLink to={"/"}> HomePage </NavLink>
            <NavLink to={"/wastedpage"}>| WastedPage </NavLink>
            <NavLink to={"/dontgotherepage"}>| DontGoTherePage </NavLink>
            <NavLink to={"/itoldyoupage"}>| IToldYouPage </NavLink>
        </div>
    )
}