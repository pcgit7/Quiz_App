import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate,Navigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {

    const navigate = useNavigate();
    const { userId } = useSelector(state => state.result);

    if(userId)
    return props.children;

    else return <Navigate to="/"/>
  
}

export default ProtectedRoutes
