import * as Actions from '../Redux/result_reducer';
import { postServerData } from '../helper';

export const pushAnswer = (result) => async (dispatch) => {
    try
    {
       dispatch(Actions.pushResultAction(result));    
    } 
    catch (error) {
        console.log(error);
    }
};

export const updateResult = (index) => async (dispatch) => {
    try 
    {
        dispatch(Actions.updateResultAction(index));
    } catch (error) {
        console.log(error);
    }
};

export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result !== [] && !username) throw new Error("Couldn't get Result");
            await postServerData(`http://localhost:5000/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error);
        }
    })();
};