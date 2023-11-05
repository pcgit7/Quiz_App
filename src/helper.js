import axios from 'axios';

export function attemps_number(result) {
    return result.filter(r => r!==undefined).length;
};

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
};

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
};

export async function getQuizes(url){
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('error in getting data');
    }
}

export async function getResultData(details){
    try {
        const response = await axios.post('https://quiz-app-server-a95t.onrender.com/api/result/get-result',details)
        return response.data;
    } catch (error) {
        alert('error in getting data');
    }
}

export async function postResultData(url, result){
    try {
        const response = await axios.post(url, result);
        return response.data;
    } catch (error) {
        alert('error in saving result');
    }   
}

export async function postQuestionBank(url,data){
    try {
        const response = await axios.post(url,data);
        if(response.data.success)
        alert("Thanks for submitting");
        return;
    } catch (error) {
        console.log(error);
    };
};