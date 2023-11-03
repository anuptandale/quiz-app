import React, { useState } from "react";
import "../Styles/Home.css";
import Questions from "./Questions";
import Options from "./Options";
import Nextquestion from "./Nextquestion";
import Questionresult from "./Questionsresult";
import data from "../questions.json";
import Stars from "./Stars";
const Home = () => {
    const [ques, setQues] = useState(0);
    const handleQuestions = () => {
        if (ques < data.length) {
            setQues(ques + 1);
            setVisiblenextbtn(false);
        }
    };
    const [iscorrect, setIscorrect] = useState(false);
    const [visiblenextbtn, setVisiblenextbtn] = useState(false);
    const [rightAnwser, setrightAnswer] = useState(0);
    const [wrongAnswer, setwrongAnswer] = useState(0);
    const [msg, setMsg]=useState("Bad performance");
    const handleCorrectAnswer = (correct_answer, choosen_answer) => {
        if (correct_answer === choosen_answer) {
            setIscorrect(true);
            setVisiblenextbtn(true);
            setrightAnswer(rightAnwser + 1);
            if(rightAnwser>=0 && rightAnwser<=10){
                setMsg("Need to improve");
            }else if(rightAnwser>10 && rightAnwser<=15){
                setMsg("Good Performance");
            }else if(rightAnwser>15 && rightAnwser<=20){
                setMsg("Outstanding");
            }
        } else {
            setIscorrect(false);
            setVisiblenextbtn(true);
            setwrongAnswer(wrongAnswer + 1);
        }
    };
    
    return (
        <>
            {ques < 20 && <div className="container-box">
                <div>
                    <progress value={(ques * 100) / 20} max="100"></progress>
                </div>

                <h2>Question {ques + 1} of 20</h2>
                <p className="tag my-3">{decodeURIComponent(data[ques].category)}</p>
                <div className="stars">
                    <Stars difficulty={data[ques].difficulty} />
                </div>
                <Questions questions_data={data} ques={ques} />
                <Options
                    ques={ques}
                    options_data={data}
                    handleCorrectAnswer={handleCorrectAnswer}
                    visiblenextbtn={visiblenextbtn}
                />
                {visiblenextbtn && <Questionresult iscorrect={iscorrect} />}
                <Nextquestion
                    ques={ques}
                    handleQuestions={handleQuestions}
                    visiblenextbtn={visiblenextbtn}
                />
                <div className="score-board my-1">
                    <p>{rightAnwser * 100 / 20} %</p>
                    <p>Max Score : {(rightAnwser + wrongAnswer) * 100 / 20}%</p>
                </div>
                <div className="progress score-bar">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: (rightAnwser * 100) / 20 + "%", backgroundColor: "black" }}
                    >
                    </div>
                    <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: (wrongAnswer * 100) / 20 + "%", backgroundColor: "gray" }}
                    >
                    </div>

                </div>
            </div>}
            {
                ques >= 20 && <>
                    <div className="thanks">
                        <div> Thank You </div>
                        <p> Correct Answer:{rightAnwser} </p>
                        <p>Total Marks: {rightAnwser}/{rightAnwser+wrongAnswer}</p>
                        <p>{msg}</p>
                    </div>
                </>
            }
            


        </>
    );
};

export default Home;