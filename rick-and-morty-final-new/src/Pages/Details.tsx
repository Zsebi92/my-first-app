import {Character} from "../model/Character";
import {Link, useParams} from "react-router-dom";
import "./Details.css"

type DetailsProps = {
    characters: Character[];
}


export default function Details(props: DetailsProps) {

    const params = useParams()
    const id = params.id

    if(id === undefined) {
        return (<> Character not found </>);
    }

    const character = props.characters.find(character => character.id === parseInt(id))

    if(character === undefined) {
        return (<> Character not found </>)
    }

    return (
        <div className={"details"}>

            <div className={"Card"}>
            <Link to={"/"}> Back </Link>
            <h2>{character.name}</h2>
            <img src={character.image} alt={"Character avatar"}/>
            <h3>Status: {character.status}</h3>
            </div>
        </div>
    )
}