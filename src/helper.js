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

export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
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