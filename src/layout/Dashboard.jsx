import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {user?.email ? (
        <div className="w-full flex min-h-screen">
          <div className="w-2/12 px-5 py-14 ">
            <div>
              <img
                src={user?.photoURL}
                className="rounded-full border-4"
                alt={user?.displayName}
              />
              <h3 className="text-xl font-bold">{user?.displayName}</h3>
              <p>{user?.email}</p>
            </div>
            <ul className="pt-2">
              <NavLink to="create-tasks" className=" ">
                <li className="flex justify-center items-center gap-2 border py-2  ">
                  <FaPlus /> <span>Add new tasks</span>
                </li>
              </NavLink>
              <NavLink to="previous-tasks" className="">
                <li className="">See previous tasks</li>
              </NavLink>
              <div className="w-full bg-gray-400 h-[1px] my-3"></div>
              <NavLink to="/" className="">
                <li className="">Home</li>
              </NavLink>
            </ul>
          </div>
          <div className="w-9/12 py-20 px-5">
            <Outlet />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Dashboard;
