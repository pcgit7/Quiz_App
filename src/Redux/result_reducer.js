import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name : 'result',
    initialState : {
        userId : null,
        result : [],
    },

    reducers : {
        setUserId : (state , action) => {
            let size = action.payload.size;

            let arr = []
            for(let i=0;i<size;i++)
            arr.push(null);
            
            return {
                userId : action.payload.username,
                result : arr
            }
        },
        pushResultAction : (state , action) => {
            state.result.push(action.payload);
        },
        updateResultAction : (state , acton) => {
            const { trace , checked } = acton.payload;
            state.result.fill(checked,trace,trace+1);
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : [],
            }
        }
    }
});

export const { setUserId ,pushResultAction ,updateResultAction, resetResultAction} = resultReducer.actions;

export default resultReducer.reducer;
