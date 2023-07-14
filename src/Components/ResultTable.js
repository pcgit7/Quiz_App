import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const ResultTable = () => {

  const [data, setData] = useState([]);
  const { result :{userId} , questions : {_id}} = useSelector((state) => state);

  const getData = async () => {
    const x = {"username":userId , quizId : _id} ;
    await axios.post('https://quiz-app-server-a95t.onrender.com/api/result/get-result',x)
    .then( (response) => setData(response.data));

    console.log(data);
  };
  
  console.log(userId);
  useEffect( () => {
    getData();
},[]);

return (
<div>
    <table>
        <thead className='table-header'>
            <tr className='table-row'>
                <td>Name</td>
                <td>Attemps</td>
                <td>Earn Points</td>
                <td>Result</td>
            </tr>
        </thead>
        <tbody>
            { !data ?? <div>No Data Found </div>}
            {
                data.map((v, i) => (
                    <tr className='table-body' key={i}>
                        <td>{v?.username || ''}</td>
                        <td>{v?.attempts || 0}</td>
                        <td>{v?.points || 0}</td>
                        <td>{v?.achived || ""}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
</div>
)
}

export default ResultTable
