import React, { useState } from "react";
import Questions from "./Questions";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/Set_Questions";
import { useNavigate } from "react-router-dom";
import SubmitConfirmation from "./submitConfirmation";

const Quiz = () => {

  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const [showSubmit , setShowSubmit] = useState(false);

  const onNoSubmit = () => setShowSubmit(false);

  function onSubmit(){
    navigate("/result");
  }

  const navigate = useNavigate();

  const onPrev = () => {
    if (trace > 0) dispatch(MovePrevQuestion());
  };

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
    if(trace+1===queue.length){
      setShowSubmit(true);
      dispatch(MovePrevQuestion());
    }
  };

  return (
    <div className="container">
      {showSubmit && <SubmitConfirmation onNotSubmit={onNoSubmit} onSubmit={onSubmit}/>}
      <h1 className="title text-light">Quiz</h1>

      <Questions />
      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Previous
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
