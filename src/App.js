
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';

import Main from './component/Main/Main';
import Quiz from './component/Quiz/Quiz';



function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>},
        // {path:'topics', element:<p>I am Topics</p>},
        {path:'statistics', element:<p>Hello statistics</p>},
        {path:'blog', element:<p>I am Blog</p>},
        {path:'card/:id',
        loader:({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Quiz></Quiz>},
    ]},
    {
      path:'*', element:<ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
