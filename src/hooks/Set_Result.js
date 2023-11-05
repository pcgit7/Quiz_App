import * as Actions from '../Redux/result_reducer';
import { postResultData } from '../helper';

export const updateResult = (index) => async (dispatch) => {
    try 
    {
        dispatch(Actions.updateResultAction(index));
    } catch (error) {
        console.log(error);
    }
};

export const usePublishResult = async (resultData) => {
    const { result, username } = resultData;
    
        try {
            if(result.length===0 && !username) throw new Error("Couldn't get Result");
            await postResultData(`https://quiz-app-server-a95t.onrender.com/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error);
        }
};