import { createSlice } from "@reduxjs/toolkit";

const questionBankReducer = createSlice({
    name : 'questionBank',
    initialState : {
        questions : [],
        answers : [],
        noOfQuestions : 0,
        category : "General",
        topic : "General",
        difficulty : "easy", 
        trace : 0,
    },

    reducers : {
        metaDataAction : (state,action) => {
            const {noOfQuestions , topic , difficulty , category} = action.payload;
            return {
                ...state,
                noOfQuestions ,
                topic ,
                difficulty , 
                category ,
                questions : [],
                answers : [],
                trace : 0
            };
        },
        moveNextAction : (state,action) => {
            return {
                ...state,
                trace : state.trace+1,
            };
        },

        movePrevAction : (state ,action) => {
            return {
                ...state,
                trace : state.trace - 1,
            };
        },

        addNewQueueItem : (state,action) => {
            //let updateArray = state.questions;
            //updateArray.push(action.payload);

            const { queue , correctOption } = action.payload;
            return {
                ...state,
                questions : [...state.questions,queue],
                answers : [...state.answers , correctOption]
            };
            
        },

        updateQuestion : (state,action) => {
            console.log(action.payload);
            const queue = [...state.questions];
            const ans = [...state.answers];

            const newQuestion = action.payload.queue;

            queue[newQuestion.id] = newQuestion;
            ans[newQuestion.id] = action.payload.correctOption;
            return {
                ...state,
                questions : queue ,
                answers : ans
            };
        }
    }
});

export const { moveNextAction , movePrevAction , addNewQueueItem ,updateQuestion,metaDataAction} = questionBankReducer.actions;
export  default questionBankReducer.reducer;