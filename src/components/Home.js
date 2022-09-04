import React from "react";


export default function Home(props){
    return(
        <div className="Home-page">
            
            <div className="home-content">
            <h1>Quizzical</h1>
            <p>Test your IQ!</p>
            <button onClick={props.toggle} className="start-btn">Start quiz</button>
            </div>
        </div>
    )
}