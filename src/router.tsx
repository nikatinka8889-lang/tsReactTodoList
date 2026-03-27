import { NotFound } from "./Pages/404";
import Layout from "./Layouts/Layout";
import TodoListPage from "./Pages/TodoListPage";
import { createBrowserRouter } from "react-router-dom";
import ViewList from "./Pages/ViewList";
import ViewListItem from "./Pages/ViewListItem";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <TodoListPage /> },

        {
          path: "/list",
          element: <ViewList  />,
        },

        {
          path: "/list/:id",
          element: <ViewListItem />,
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/app/" },
);
