import React from "react";

const MainComponent = (props) => {
    const { message } = props



    return (
        <ul>
            {message.map((item, index) => (
                <li key={index}>{item} </li>
            ))}

        </ul>
    )
}

export default MainComponent;