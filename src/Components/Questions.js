import React, { useState ,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useFetchQuestions } from '../hooks/fetchQuestions';
import { updateResult } from '../hooks/setResult';


const Questions = ({onChecked}) => {

    const state = useSelector( state => state);

    const dispatch = useDispatch();

    const result = useSelector(state => state.result.result);
    
    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    const [ {isLoading , serverError , apiData} ] = useFetchQuestions();

    const [checked , setChecked] = useState(undefined);

    const { trace } = useSelector(state => state.questions);
    
    useEffect( () => {
      dispatch(updateResult({checked , trace}));
    } , [checked]);

  const onSelectHandler = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({checked,trace}));
  };

  if(isLoading)
  return (<h1>Loading....</h1>);

  if(serverError)
  return (<h1>{serverError || 'Unknown Error'}</h1>);

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelectHandler(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
export default Questions
