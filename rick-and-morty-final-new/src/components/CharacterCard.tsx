import "./CharacterCard.css";
import {Character} from "../model/Character";
import {HashRouter, Link, NavLink, Route, Routes} from "react-router-dom";


type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className="character-card">
            <Link to={"/character/" + props.character.id}>
                <h3>{props.character.name} </h3>
                <img src={props.character.image} alt={"Character Avatar"}/>
                <p>{props.character.status}</p>
            </Link>
        </div>
    )
}
