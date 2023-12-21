import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import CreateNewTasks from "../pages/Dashboard/CreateNewTasks/CreateNewTasks";
import PreviousTasks from "../pages/Dashboard/PreviousTasks/PreviousTasks";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/create-tasks",
        element: <CreateNewTasks />,
      },
      {
        path: "/dashboard/previous-tasks",
        element: <PreviousTasks />,
      },
    ],
  },
]);

export default Router;
