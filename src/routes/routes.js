import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import TodayTask from "../pages/todayTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TodayTask />,
      },
      {
        path: '*',
        element: < >Not found</>,
      },
    ],
  },
]);
