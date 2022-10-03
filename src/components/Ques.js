import React from "react";
import { nanoid } from "nanoid";

export default function Ques(props){
    
        function decodeHTML(html){
            let txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }
        function styles(val) {

            let color = "#ffff"

            if(!props.result&&props.chosenAns === val){
                color="#d6dbf5"
            }
            else if(props.result){

                if(val === props.value.correct_answer)
                color="#94d7a2"

                if(val === props.chosenAns && props.value.incorrect_answers.includes(props.chosenAns)){
                    color="#f8bcbc"
                }
        }
           return { 
            backgroundColor : `${color}`,
            opacity : props.result ?  val === props.value.correct_answer ? 1 
                                        : 0.5
                                : 1
           

        }
        }
            return(
                <div 
                className="questions-container"
                key= {props.id} >

            <h1>{decodeHTML(props.value.question)} </h1>

            <div className="options-container">

            {props.value.incorrect_answers.concat(props.value.correct_answer).sort().map(x => {
                let fashion = styles(x);
                return <button
                    className="options"
                    key={nanoid()} 
                    style={fashion}
                    disabled={props.result ? true : false}
                    onClick={()=>props.handleClick(props.id, props.value.correct_answer, x)}
                    >
                    {decodeHTML(x)}
                 </button>
    })}
            </div>
            <hr />
        </div>
            )
}