import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import TodayTask from "./pages/todayTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodayTask />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
