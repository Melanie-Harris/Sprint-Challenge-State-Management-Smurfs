import React from "react";

import SmurfChar from "./SmurfChar";

const SmurfCharList = props => {
    console.log(props)
    return (
        <ul>
            {props.characters.map(character => {
                return <SmurfChar key={character.name} character={character} />;
            })}
        </ul>
    );
};

export default SmurfCharList;