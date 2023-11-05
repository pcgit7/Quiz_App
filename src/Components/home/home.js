import React, { useEffect, useState } from 'react'
import { getQuizes } from '../../helper';
import QuizItem from './quizItem';
import '../../styles/home.css';
import Quizfilter from './Quizfilter';
import { Link } from 'react-router-dom';

const Home = () => {
    const [quizs,setQuizs] = useState([]);
    const [filteredQuizs , setFilteredQuizs] = useState([]);

    const getData = async () => {
        try 
        {
            const response = await getQuizes('https://quiz-app-server-a95t.onrender.com/api/question');
            setQuizs(response);
            setFilteredQuizs(response);
        } 
        catch (error) {
            console.log(error);
        }
    };
    
    const filterQuizes = ({selectedCategory , selectedDifficulty , selectedNumQuestions , selectedTopic}) => {

        const updateQuiz = quizs.filter((quiz) => {
            if (selectedCategory !== 'all' && quiz.category !== selectedCategory) {
              return false;
            }
        
            if (selectedDifficulty !== 'all' && quiz.difficulty !== selectedDifficulty) {
              return false;
            }
        
            if (selectedTopic !== 'all' && quiz.topic !== selectedTopic) {
              return false;
            }
        
            if (selectedNumQuestions !== 'all' && quiz.noOfQuestion !== parseInt(selectedNumQuestions)) {
              return false;
            }
        
            return true;
          });

          setFilteredQuizs(updateQuiz);
    };
    

    useEffect(() => {
        getData();
    },[]);

  return (
    <div className='container'>
        <h1 className='welcome'>Welcome to the Quiz App</h1>
      <Quizfilter onFilter={filterQuizes}/>

      <div className='addQuestion'>
            <Link to={'question-bank'} className='btn'>Add New Question Bank</Link>
        </div>

      <div className='quiz-container'>
        {filteredQuizs.map((item) => {
            return(<QuizItem quiz = {item}/>)
        })}
      </div>
    </div>
  )
};

export default Home
