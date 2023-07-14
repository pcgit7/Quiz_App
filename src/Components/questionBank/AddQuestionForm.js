import React, { useEffect, useState } from 'react';
import './questionForm.css';
import { useSelector } from 'react-redux';

const AddQuestionForm = ({addNewItem}) => {

  const {trace , questions , answers , noOfQuestions } = useSelector(state => state.questionBank);

  //const state = useSelector(state => state.questionBank);

  const queue = questions[trace] ;
  const ans = answers[trace];
  useEffect(()=>{
     if(queue)
     {
      setQuestion(queue?.question);
      setOptionA(queue?.options[0]);
      setOptionB(queue?.options[1]);
      setOptionC(queue?.options[2]);
      setOptionD(queue?.options[3]);
      setCorrectOption(ans);
     }

     else
     {
      setQuestion('');
      setOptionA('');
      setOptionB('');
      setOptionC('');
      setOptionD('');
      setCorrectOption('');
     }
  },[trace,queue]);

  //console.log(queue);
  

  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');

  const [optionB, setOptionB] = useState('');

  const [optionC, setOptionC] = useState('');

  const [optionD, setOptionD] = useState('');

  const [correctOption, setCorrectOption] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionAChange = (event) => {
    setOptionA(event.target.value);
  };

  const handleOptionBChange = (event) => {
    setOptionB(event.target.value);
  };

  const handleOptionCChange = (event) => {
    setOptionC(event.target.value);
  };

  const handleOptionDChange = (event) => {
    setOptionD(event.target.value);
  };

  const handleCorrectOptionChange = (event) => {
    setCorrectOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new question object
    const newQuestion = {
      question,
      options: [optionA, optionB, optionC, optionD],
      correctOption
    };

    // Perform the logic to add the new question to the question bank
    //console.log('New Question:', newQuestion);

    addNewItem(newQuestion);
  };

  return (
    <div className='add-question-form'>
      <h2>Question No {trace+1} of {noOfQuestions}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={handleQuestionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="optionA">Option 1:</label>
          <input
            type="text"
            id="optionA"
            value={optionA}
            onChange={handleOptionAChange}
            required
          />
        </div>
        <div>
          <label htmlFor="optionB">Option 2:</label>
          <input
            type="text"
            id="optionB"
            value={optionB}
            onChange={handleOptionBChange}
            required
          />
        </div>
        <div>
          <label htmlFor="optionC">Option 3:</label>
          <input
            type="text"
            id="optionC"
            value={optionC}
            onChange={handleOptionCChange}
            required
          />
        </div>
        <div>
          <label htmlFor="optionD">Option 4:</label>
          <input
            type="text"
            id="optionD"
            value={optionD}
            onChange={handleOptionDChange}
            required
          />
        </div>
        <div>
          <label htmlFor="correctOption">Correct Option:</label>
          <select
            id="correctOption"
            value={correctOption}
            onChange={handleCorrectOptionChange}
            required
          >
            <option value="">Select Correct Option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button type="submit">{trace>=questions.length ? 'Add Question' : 'Update Question'}</button>
      </form>
    </div>
  );
};

export default AddQuestionForm;
