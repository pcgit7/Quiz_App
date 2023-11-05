import React, { useState ,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { updateResult } from '../hooks/Set_Result';


const Questions = () => {

    const dispatch = useDispatch();

    const { result , userId} = useSelector(state => state.result);
  
    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    const trace  = useSelector(state => state.questions.trace);

    const [checked , setChecked] = useState(result[trace]);

    
    useEffect( () => {
      dispatch(updateResult({checked , trace}));
    } , [checked]);

  const onSelectHandler = (i) => {
    setChecked(i);
  };

  return (
    <div className='questions'>
        <h2 className="subtitle">Welcome, {userId}</h2>

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
                        <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
export default Questions
