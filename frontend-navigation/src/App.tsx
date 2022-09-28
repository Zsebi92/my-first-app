import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from './Pages/HomePage';
import WastedPage from './Pages/WastedPage';
import DontGoTherePage from './Pages/DontGoTherePage';
import IToldYouPage from "./Pages/IToldYouPage";

function App() {
  return (
    <div className="App">
      <h1> Routing Test </h1>
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/wastedpage"} element={<WastedPage/>}/>
            <Route path={"/dontgotherepage"} element={<DontGoTherePage/>}/>
            <Route path={"/itoldyoupage"} element={<IToldYouPage/>}/>
        </Routes>

    </HashRouter>
    </div>
  );
}

export default App;
