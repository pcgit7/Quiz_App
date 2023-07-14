import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../Redux/result_reducer';

const Main = () => {

    const inputRef = useRef(null);

    const dispatch = useDispatch();
    function startQuizHandler () {
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value));
        }
    };

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        
        <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id='form'>
            <input ref={inputRef} type='text' placeholder='Username' className='userid'></input>
        </form>

        <div className='start'>
            <Link to={'/quiz'} className='btn' onClick={startQuizHandler}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main
