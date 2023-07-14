import * as Actions from '../Redux/question_reducer';

export const setQuestions = (quizQuestionBank) => async (dispatch) => {

    console.log(quizQuestionBank);
    const {questions,answers ,_id   } = quizQuestionBank;
    const data = {questions,answers ,_id};

    dispatch(Actions.startExamination(data));
};

export const MoveNextQuestion = () => async (dispatch) => {
    try
    {
      dispatch(Actions.moveNextAction());    
    } 
    catch (error) {
        console.log(error);
    }
};

export const MovePrevQuestion = () => async (dispatch) => {
    try
    {
      dispatch(Actions.movePrevAction());    
    } 
    catch (error) {
        console.log(error);
    }
};