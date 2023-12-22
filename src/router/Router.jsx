import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import CreateNewTasks from "../pages/Dashboard/CreateNewTasks/CreateNewTasks";
import PreviousTasks from "../pages/Dashboard/PreviousTasks/PreviousTasks";
import EditTask from "../pages/Dashboard/EditTask/EditTask";
import ManageTasks from "../pages/Dashboard/ManageTasks/ManageTasks";
import PrivetRout from "./PrivetRoute";
import ContactUS from "../pages/ContactUs/ContactUs";

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
        path: "/contact",
        element: <ContactUS />,
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
    element: (
      <PrivetRout>
        <Dashboard />
      </PrivetRout>
    ),
    children: [
      {
        path: "/dashboard/create-tasks",
        element: <CreateNewTasks />,
      },
      {
        path: "/dashboard/previous-tasks",
        element: <PreviousTasks />,
      },
      {
        path: "/dashboard/edit-task/:id",
        element: <EditTask />,
      },
      {
        path: "/dashboard/manage-tasks",
        element: <ManageTasks />,
      },
    ],
  },
]);

export default Router;
