
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

import Main from './component/Main/Main';



function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>},
        {path:'topics', element:<p>I am Topics</p>},
        {path:'statistics', element:<p>I am Statistics</p>},
        {path:'blog', element:<p>I am Blog</p>},
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
