import React from 'react'
import { useNavigate } from 'react-router-dom';
import { setQuestions } from '../../hooks/Set_Questions';
import { useDispatch } from 'react-redux';

const QuizItem = ({quiz}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(setQuestions(quiz));
        navigate('/main');
    };

  return (
    <div className='quiz-list' onClick={onClickHandler}>
      <div className='flex-div'>
        <p>Category : <span>{quiz.category}</span></p>
        <p>Topic : <span>{quiz.topic} </span></p>
        <p>No of Questions : <span>{quiz.noOfQuestion}</span></p>
        <p>Difficulty : <span>{quiz.difficulty}</span></p>
      </div>
    </div>
  )
}

export default QuizItem
