import React, { useEffect ,useState} from 'react'
import Questions from './Questions';
import { useSelector , useDispatch} from 'react-redux';
import { useFetchQuestions , MoveNextQuestion , MovePrevQuestion} from '../hooks/fetchQuestions';
import { pushAnswer } from '../hooks/setResult';
import {useNavigate} from 'react-router-dom';

const Quiz = () => {

    const state = useSelector( state => state);

    const result = useSelector(state => state.result.result);

    const [ {isLoading , serverError , apiData} ] = useFetchQuestions();

    const { trace,queue } = useSelector(state => state.questions);
    
    const dispatch = useDispatch();

    const [checked , setChecked] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
      //console.log(state);
      console.log(result);
    },[result]);

    const onPrev = () => {
      if(trace>0)
      dispatch(MovePrevQuestion());
    };

    const onNext = () => {
      if(trace<queue.length)
      {
        dispatch(MoveNextQuestion());
        //dispatch(pushAnswer(1));
        if(result.length <= trace)
        dispatch(pushAnswer(checked));
      }
      setChecked(undefined);
      if(result.length && result.length >= queue.length){
        navigate('/result');
      }
    };

    const onChecked = (check) => {
      setChecked(check);
    };

    

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz</h1>

        <Questions onChecked={onChecked}/>
        <div className='grid'>
            {trace>0 ? (<button className='btn prev' onClick={onPrev}>Previous</button>) : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz
