import React from "react";
const Welcome = ({name, age, color}) => {
    return (
        <div style={{backgroundColor: color, margin: '10px', padding: '20px'}}>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            
        </div>
    )
};
export default Welcome;