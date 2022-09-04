import React,{useState,useEffect} from "react";

export default function Questions(){
    
    const [questionData, setQuestionData] = useState();
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(
        ()=>{
            fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))
        },[]
    )

    let finalQuestons =  questionData && questionData.map(question => {
        return (
            <div className="questions-container">
            <h1>{question.question}</h1>
            <div className="options-container">
            <button className="options">{question.correct_answer}</button>
            {question.incorrect_answers.map(x => (
                 <button className="options">{x}</button>
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
