import React, { useState } from 'react'
import AddQuestionForm from './AddQuestionForm';
import { useDispatch, useSelector } from 'react-redux';
import { addNewQuestion,updateQuestion,MovePrevQuestion } from '../../hooks/Set_Bank';
import { moveNextAction } from '../../Redux/questionBank_reducer';
import SubmitConfirmation from '../submitConfirmation';
import { postQuestionBank } from '../../helper';
import {useNavigate} from 'react-router-dom';

const QuestionBank = () => {

    const [showSubmit , setShowSubmit] = useState(false);

    const onNoSubmit = () => setShowSubmit(false);

    const state = useSelector(state => state.questionBank);
    //console.log(state);
    const { questions , trace , answers ,noOfQuestions} = state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function addNewItemHandler (newQuestion) { 

        const { question , options , correctOption} = newQuestion;

        const queue = {
            id : trace,
            question,
            options
        };

        
        if(trace===questions.length)
        {
            dispatch(addNewQuestion({queue , correctOption}));
        }

        else
        {
           dispatch(updateQuestion({queue,correctOption}));
        }

        dispatch(moveNextAction());

        if(trace+1===noOfQuestions)
        {
            setShowSubmit(true);
            dispatch(MovePrevQuestion());
        }
    };

    function onPrev() {
        if(trace>0)
        dispatch(MovePrevQuestion());
    }

    function onNext() {
        if(trace<questions.length)
        {
            dispatch(moveNextAction());
        }

        if(trace+1===noOfQuestions)
        {
            setShowSubmit(true);
            dispatch(MovePrevQuestion());
        }
    }

    function onSubmit(){
        const url = 'https://quiz-app-server-a95t.onrender.com/api/question';

        const updated = answers.map( item => (parseInt(item)-1));

        postQuestionBank(url , {...state,answers : updated});
        navigate('/');
    };

  return (
    <div className='container'>
        {showSubmit && <SubmitConfirmation onNotSubmit={onNoSubmit} onSubmit={onSubmit}/>}
       <AddQuestionForm addNewItem={addNewItemHandler}/> 
      <div className='grid'>
            {questions.length ? (<button className='btn prev' onClick={onPrev}>Previous</button>) : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
       </div>
    </div>
  )
}

export default QuestionBank
