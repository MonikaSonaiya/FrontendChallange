import React, { useEffect, useState } from 'react'
import { QUESTIONS } from './questions';
// import { initPersist, setAverageRating, getAverageRating } from './utils/persist';
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = () => {
    const [questions,setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
      setQuestions(QUESTIONS);
      // to initialize node persist
      // initPersist();
    },[])
    
    useEffect(() => {
      const fetchAverageRating = async () => {
        // const avgRating = await getAverageRating();
        // console.log(`Average Rating: ${avgRating}`);
      };
      //fetch average ratings from persist on re run
      fetchAverageRating();
    }, []);

    const handleAnswer = (questionKey, answer) => {
      // set answers
        setAnswers({ ...answers, [questionKey]: answer });
        console.log("answers",answers)
      };

      const getScore = () => {
        const yesCount = Object.values(answers).filter((answer) => answer === 'yes').length;
        const totalCount = Object.keys(questions).length;
        const calculatedScore = (yesCount / totalCount) * 100;
        setScore(calculatedScore);

        //set score to persist
        // setAverageRating(newScore);
      };
    
  return (
    <div>
      <h1>Questions.... please ans in yes or no</h1>
      {Object.entries(questions).map(([key, question]) => (

     <div className="card">
      <div className="card-body" key={key}>
        <h5 className="card-title">{question}</h5>
        <div className="btn-group" role="group" aria-label="Answer Buttons" >
          <button type="button" className="btn btn-primary"  onClick={() => handleAnswer(key,'yes')}>
            Yes
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleAnswer(key,'no')}>
            No
          </button>
        </div>
      </div>
    </div>
     ))}
     <div className="card">
        <div className="card-body">
          <button type="button" className="btn btn-primary" onClick={getScore}>Calculate Score</button>
            {score !== null &&  <h5 style={{'display':'inline-block'}} class="card-title p-1">Your score is: {score}</h5>}
        </div>
     </div>
    </div>
  )
}

export default Test;
