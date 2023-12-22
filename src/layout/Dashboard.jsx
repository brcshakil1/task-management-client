import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaHouseMedical, FaPlus } from "react-icons/fa6";
import { SiTask } from "react-icons/si";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import { MdManageHistory } from "react-icons/md";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {user?.email ? (
        <div className="flex flex-col lg:flex-row ">
          <div
            className="w-full lg:w-3/12 h-auto  
          lg:min-h-screen  p-5
             md:py-10 border-b-2 md:border-r-2 border-gray-500"
          >
            <RiMenu2Line
              className="lg:hidden block  cursor-pointer font-bold text-xl"
              onClick={handleMenu}
            />

            <ul
              className={`absolute ${isOpen ? "block" : "hidden"}
            lg:block
          lg:static z-20 bg-gray-200  lg:bg-[#00000000] 
              md:p-0 p-4 space-y-2 md:space-y-4 rounded-md md:shadow-none shadow-lg`}
            >
              <div className="w-full flex ">
                <div className=" px-5 py-6 md:py-14 ">
                  <div className="flex justify-center items-center text-center flex-col">
                    <img
                      src={user?.photoURL}
                      className="rounded-full border-[3px] border-slate-500 h-14 w-14 md:w-24 md:h-24"
                      alt={user?.displayName}
                    />
                    <h3 className="text-xl  font-bold">{user?.displayName}</h3>
                    <p>{user?.email}</p>
                  </div>
                  <ul className="pt-2">
                    <NavLink to="create-tasks" className=" ">
                      <li
                        className="flex justify-center items-center gap-2 border
                       border-slate-400 px-3 py-2  "
                      >
                        <FaPlus /> <span>Add new tasks</span>
                      </li>
                    </NavLink>
                    <NavLink to="previous-tasks" className="">
                      <li
                        className="flex justify-center items-center gap-2 mt-2
                       border-slate-400 border px-3 py-2  "
                      >
                        <SiTask /> <span>Your Previous Tasks</span>
                      </li>
                    </NavLink>
                    <NavLink to="manage-tasks" className="">
                      <li
                        className="flex justify-center items-center gap-2 mt-2
                       border-slate-400 border px-3 py-2  "
                      >
                        <MdManageHistory /> <span>Manage your task</span>
                      </li>
                    </NavLink>
                    <NavLink to="" className="">
                      <li className=""></li>
                    </NavLink>
                    <div className="w-full bg-gray-400 h-[1px] my-3"></div>
                    <NavLink to="/" className="">
                      <li className="flex justify-center items-center border-slate-400 gap-2 border px-3 py-2 ">
                        <FaHouseMedical />
                        Home
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <div className="w-full md:w-9/12 py-20 px-5">
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
