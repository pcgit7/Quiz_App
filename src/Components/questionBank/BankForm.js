import React, { useState } from "react";
import "../../styles/home.css";
import { useDispatch } from "react-redux";
import { initialiseBank } from "../../hooks/Set_Bank";
import { useNavigate } from "react-router-dom";
import Categories from "../../database/data";

const BankForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Science");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
  const [selectedTopic, setSelectedTopic] = useState("Physics");
  const [selectedNumQuestions, setSelectedNumQuestions] = useState(5);

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
      category: selectedCategory,
      difficulty: selectedDifficulty,
      noOfQuestions: selectedNumQuestions,
      topic: selectedTopic,
    };

    dispatch(initialiseBank(data));
    navigate("/question-bank/add-questions");
  };
  return (
    <div className="container">
      <h2 className="text-light">Please Provide Quiz Details</h2>
      <div className="filter-container">
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">General</option>
            {Categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            {/* Add more options for difficulties */}
          </select>
        </div>

        <div className="filter">
          <label htmlFor="topic">Topic:</label>
          <select id="topic" value={selectedTopic} onChange={handleTopicChange}>
            <option value="Physics">Physics</option>
            <option value="World War II">World War II</option>
            <option value="Countries">Countries</option>
            {/* Add more options for topics */}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="numQuestions">Number of Questions:</label>
          <select
            id="numQuestions"
            value={selectedNumQuestions}
            onChange={handleNumQuestionsChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            {/* Add more options for number of questions */}
          </select>
        </div>

        <button className="btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BankForm;
