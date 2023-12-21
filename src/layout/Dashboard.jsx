import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { email, displayName, photoURL } = user;
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {user ? (
        <div className="w-full flex min-h-screen">
          <div className="w-3/12 bg-red-300 px-5 py-14 ">
            <div>
              <img
                src={photoURL}
                className="rounded-full border-4"
                alt={displayName}
              />
              <h3 className="text-xl font-bold">{displayName}</h3>
              <p>{email}</p>
            </div>
            <ul className="pt-2">
              <NavLink to="create-tasks" className="">
                <li className=" ">Create new tasks</li>
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
          <div className="w-9/12 bg-green-500 py-20 px-5">
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
