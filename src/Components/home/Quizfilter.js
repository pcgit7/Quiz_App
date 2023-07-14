import React, { useState } from 'react';

const Quizfilter = ( { onFilter }) => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedNumQuestions, setSelectedNumQuestions] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleNumQuestionsChange = (e) => {
    setSelectedNumQuestions(e.target.value);
  };

  const submitHandler = () => {
    const data = {
        selectedCategory,
        selectedDifficulty,
        selectedNumQuestions,
        selectedTopic
    };

    onFilter(data);
  }
  return (
    <div className='filter-container'>
      <div className='filter-row'>
      <div className='filter'>
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          {/* Add more options for categories */}
        </select>
      </div>
      <div className='filter'>
        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" value={selectedDifficulty} onChange={handleDifficultyChange}>
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          {/* Add more options for difficulties */}
        </select>
      </div>
      </div>

      <div className='filter-row'>
      <div className='filter'>
        <label htmlFor="topic">Topic:</label>
        <select id="topic" value={selectedTopic} onChange={handleTopicChange}>
          <option value="all">All</option>
          <option value="Physics">Physics</option>
          <option value="World War II">World War II</option>
          <option value="Countries">Countries</option>
          {/* Add more options for topics */}
        </select>
      </div>
      <div className='filter'>
        <label htmlFor="numQuestions">Number of Questions:</label>
        <select id="numQuestions" value={selectedNumQuestions} onChange={handleNumQuestionsChange}>
          <option value="all">All</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          {/* Add more options for number of questions */}
        </select>
      </div>
      </div>
      <button className='btn' onClick={submitHandler}>Search</button>
      </div>
    );
}

export default Quizfilter;
  


  

