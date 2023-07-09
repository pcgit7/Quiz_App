import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import * as Actions from '../Redux/question_reducer';
import { getServerData } from "../helper";

export const useFetchQuestions = () => {

    const dispatch = useDispatch();
    const [getData , setGetData] = useState({ isLoading : false , apiData : [] ,serverError : null });

    useEffect( () => {
        setGetData( prev => ({ ...prev , isLoading : true }));

        (async () => {
            try
            {   
                let response = await getServerData('http://localhost:5000/api/question')

                const [{questions , answers}] = response;

                const data = {questions,answers};

                console.log(response); 
                
                if(questions.length>0)
                {
                    setGetData( prev => ( { ...prev,isLoading : false}));
                    setGetData( prev => ( { ...prev,apiData : questions}));

                    dispatch(Actions.startExamination(data));
                }
                else throw new Error("NO Questions Available");
            } 
            catch (error)
            {
                setGetData( prev => ( { ...prev,isLoading : false}));
                setGetData( prev => ( { ...prev,serverError: error}));
            }
        })();

    } , [dispatch]);

    return [getData , setGetData];
}

export const MoveNextQuestion = () => async (dispatch) => {
    try
    {
      dispatch(Actions.moveNextAction());    
    } 
    catch (error) {
        console.log(error);
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try
    {
      dispatch(Actions.movePrevAction());    
    } 
    catch (error) {
        console.log(error);
    }
}