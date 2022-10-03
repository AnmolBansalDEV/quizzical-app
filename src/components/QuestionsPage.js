import React,{useState,useEffect} from "react";
import { nanoid } from "nanoid";
import Ques from "./Ques"

export default function Questions(props){
    
    const [questionData, setQuestionData] = useState();
    const [userAns, setUserAns] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(
        ()=>{
            fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestionData(data.results.map((x)=> ({...x, questionId: nanoid()}))))
        },[]
    )

        function countCorrectAnswers(){
            let count = userAns.filter(x => x.correctAns === x.userAnswer )
            return count.length;
        }

    function chooseAns(qId, correctAns, userAnswer){
        const findPrevAns = userAns.find( x => x.id === qId);
        setUserAns(
            prev => {
                return findPrevAns ? 
                prev.map(
                    (x)=> x.id === qId ? {...x, userAnswer: userAnswer} : x
                )
                : 
                [...prev, {id: qId, correctAns: correctAns,
                     userAnswer: userAnswer }]
            }
        )
    }
           
           return( 
            <div className="questions-container">
                {
                questionData && questionData.map((q)=>
                    {
                      let chosen = userAns.find(x => x.id === q.questionId)
                          return <Ques
                                    key={q.questionId} 
                                    value={q}
                                    chosenAns={chosen && chosen.userAnswer}
                                    handleClick={chooseAns}
                                    result={showResults}
                                    id={q.questionId}
                                    />
                    } )
                }

                {
                    !showResults 
                    && <button className="check-btn" onClick={()=>setShowResults(prev=>!prev)}>Check answers</button>
                 }
                {
                    showResults &&<div className="res-container">
                    <p className="res-txt">You scored {countCorrectAnswers()}/5 correct answers</p>
                    <button className="play-btn" onClick={props.toggle}>Play again</button>
                    </div>
                }
         </div>
    )
}
