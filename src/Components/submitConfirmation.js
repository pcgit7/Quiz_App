import React from 'react';
import '../styles/submitConfirmation.css'; // Import the CSS file

const SubmitConfirmation = ({ onSubmit ,onNotSubmit }) => {

  return (
    <>
    <div className='modal-wrapper'></div>
    <div className='modal-container'>
        <p>Do you want to submit ....?</p>

        <div className="submit">
            <button className='btn yes' onClick={onSubmit}>YES</button>
            <button className='btn no' onClick={onNotSubmit}>NO</button>
        </div>
    </div>
    </>
  );
};

export default SubmitConfirmation;
