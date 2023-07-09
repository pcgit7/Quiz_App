import './App.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './Components/Main';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import ProtectedRoutes from './Components/ProtectedRoutes';

const router = createBrowserRouter( [
  {
    path : '/',
    element : <Main/>
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
