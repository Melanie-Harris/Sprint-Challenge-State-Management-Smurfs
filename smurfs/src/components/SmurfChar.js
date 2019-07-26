import React from "react";

const SmurfChar = props => {
    return <div>
            <h1>{props.character.name}</h1>
            <p>Age: {props.character.age}</p>
            <p>Height: {props.character.height}</p>
         </div>
};

export default SmurfChar;