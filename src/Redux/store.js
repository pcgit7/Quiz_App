import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  questionReducer from './question_reducer';
import  resultReducer  from './result_reducer';
import questionBankReducer from './questionBank_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    questionBank : questionBankReducer
});

export default configureStore( { reducer : rootReducer });
