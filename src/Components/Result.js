import React from 'react'
import '../styles/result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../Redux/question_reducer';
import { resetResultAction } from '../Redux/result_reducer';
import { attemps_number, earnPoints_Number, flagResult } from '../helper';
import { usePublishResult } from '../hooks/setResult';

const Result = () => {
    const dispatch = useDispatch();
    const { questions : {queue , answers , _id} , result : {result , userId }} = useSelector(state => state);

    console.log(queue , answers , userId , result);

    const totalPoints = queue.length * 10;

    const attempts = attemps_number(result);

    const earnPoints = earnPoints_Number(result,answers,10);

    const flag = flagResult(totalPoints,earnPoints);

    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        quizId : _id,
        achived : flag ? "Passed" : "Failed" });

    const onRestartHandler = async () => {
        
        dispatch(resetAllAction());
        dispatch(resetResultAction());

        //await axios.delete('http://localhost:5000/api/result');
    };

  return (
    <div className='container'>
        <h1 className='text-light title'>Result</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username </span>
                <span className='bold'>{userId}</span>
            </div>

            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints}</span>
            </div>

            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{answers.length}</span>
            </div>

            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts}</span>
            </div>

            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints}</span>
            </div>

            <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>

        </div>

        <div className='start'>
            <Link className='btn' to={'/'} onClick={onRestartHandler}>Restart</Link>
        </div>

        <div className='container'>
            <ResultTable/>
        </div>
    </div>

  )
}

export default Result;
