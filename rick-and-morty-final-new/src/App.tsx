import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from './components/CharacterGallery';
import axios from "axios";
import Details from "./Pages/Details";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";


export default function App() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
            return response.data
        })
            .then((data) => {
            setCharacters(data.results)
        })
            .catch((error) => {
                console.error(error)
            })

    }, [])

    useEffect( () =>{

    } )

    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<CharacterGallery  characters={characters}/>}/>
                    <Route path={"/character/:id"} element={<Details characters={characters}/>}/>
                </Routes>
            </HashRouter>

        </div>
    );

}