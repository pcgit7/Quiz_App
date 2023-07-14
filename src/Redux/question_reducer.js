import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
    name : 'questions',
    initialState : {
        queue : [],
        answers : [],
        trace : 0,
        _id : '',
    },

    reducers : {
        startExamination : (state , action) => {
            let { questions , answers ,_id } = action.payload
            return {
                ...state,
                queue : questions,
                answers ,
                _id
            }
        },

        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },

        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue : [],
                answers : [],
                trace : 0,  
            }
        }
    }
});

export const { startExamination , moveNextAction , movePrevAction , resetAllAction} = questionReducer.actions;

export default questionReducer.reducer;