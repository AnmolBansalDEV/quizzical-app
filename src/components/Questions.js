import React,{useState,useEffect} from "react";
import { nanoid } from "nanoid";

export default function Questions(){
    
    const [questionData, setQuestionData] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState(false);

    useEffect(
        ()=>{
            fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))
        },[]
    )
    function handleClick(){
        setSelectedAnswer(prev => !prev);
    }
    let finalQuestons =  questionData && questionData.map(question => {
        let questionOptions = [question.correct_answer, ...question.incorrect_answers];
        let shuffledQuestionOptions = questionOptions.sort(()=> 0.5 - Math.random());
        return (
            <div 
                className="questions-container"
                key={nanoid()}>
            <h1>
                {question.question}
                </h1>
            <div className="options-container">
            {shuffledQuestionOptions.map(x => (
                 <button 
                    key={nanoid()}
                    className="options" 
                    style={{backgroundColor: selectedAnswer ? "#D6DBF5" : "white"}}
                    onClick={handleClick}>
                        {x}
                 </button>
                 ))}
            </div>
            <hr />
        </div>
           )})
           
           return(
               
            <div className="questions-container">
                {finalQuestons}
                <button className="check-btn">Check answers</button>
         </div>
    )
}
