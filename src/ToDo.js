import React from "react";

const ToDo = (props) => {
    return (
        <div style={{
            border: "2px solid black",
            borderRadius: 15,
            width: "30vw",
            margin: "10px auto"
        }}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default ToDo;