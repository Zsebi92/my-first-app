import "./CharacterGallery.css";
import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    const [nameToSearch, setName] = useState("");

    const filteredCharacters = props.characters.filter(character => character.name.toLowerCase().includes(nameToSearch.toLowerCase()))


    return (
        <section>
            <div className="searchBar">
                <input onChange={(e) => setName(e.target.value)}/>


            </div>

            <div className="cards">
                {filteredCharacters.length === 0 ? <h1>No Characters found</h1>
                    : filteredCharacters
                        .map((characters) =>
                            <div className="card"><CharacterCard character={characters}/></div>)}
            </div>


        </section>

    )
}