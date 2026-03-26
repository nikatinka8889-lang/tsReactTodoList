import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

import TodoListPage from './Pages/TodoListPage';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './Pages/404';
import ItemDescription from './Pages/ItemDescription';
import Layout from './Layouts/Layout';
import path from 'path';

const todos: ToDo[] = [{
  id: 0,
  text: 'первое дейстиве',
  isDone: false,
},

{
  id: 1,
  text: 'второе дейстиве',
  isDone: true,
},


{
  id: 2,
  text: 'третье дейстиве',
  isDone: false,
},


{
  id: 3,
  text: 'четвёртое  дейстиве',
  isDone: true,
},

]
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      errorElement: <NotFound/>,
      children: [
        {path: '/',
        element:<HomePage todos={todos}/>,
      },
      {
        path: '/todo',
        element: <TodoListPage/>,
      },

      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>,
      },
      {path: '*',
        element: <NotFound/>,
      },
      ],
    }
  ],
  {basename: '/app/'}
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

