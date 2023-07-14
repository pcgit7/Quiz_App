import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './Components/Main';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import ProtectedRoutes from './Components/ProtectedRoutes';
import QuestionBank from './Components/questionBank/questionBank';
import Home from './Components/home/home';
import BankForm from './Components/questionBank/BankForm';

const router = createBrowserRouter( [
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/main',
    element : <Main/>
  },
  {
    path : '/question-bank',
    element : <BankForm/>
  },
  {
    path : '/question-bank/add-questions',
    element : <QuestionBank/>
  },
  {
    path : '/result',
    element : <ProtectedRoutes><Result/></ProtectedRoutes>
  },

  {
    path : '/quiz',
    element : <ProtectedRoutes><Quiz/></ProtectedRoutes>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
