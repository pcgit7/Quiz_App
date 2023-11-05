import * as Actions from '../Redux/questionBank_reducer';

export const initialiseBank = (questionBank) => async (dispatch) => {
    try 
    {
        console.log(questionBank);
        dispatch(Actions.metaDataAction(questionBank));   
    } 
    catch (error) {
        console.log(error);
    }
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

export const addNewQuestion = (newItem) => async (dispatch) => {
    try 
    {
        console.log(newItem);
        dispatch(Actions.addNewQueueItem(newItem));
    } 
    catch (error) {
        console.log(error);
    }
};

export const updateQuestion = (item) => async (dispatch) => {
    try 
    {
        dispatch(Actions.updateQuestion(item)); 
    } catch (error) {
        console.log(error);
    }
};