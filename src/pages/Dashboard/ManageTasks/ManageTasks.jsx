import { FaPen } from "react-icons/fa6";
import SectionTitle from "./../../../components/ui/SectionTitle";
import { IoMdCheckmark } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import useTasks from "../../../hooks/useTasks";
import { useState } from "react";

const ManageTasks = () => {
  const [onGoingTasks, setOnGoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [tasks] = useTasks();

  function handleDrag(e, task) {
    e.dataTransfer.setData("ongoingTasks", JSON.stringify(task));
  }

  const handleOnDrop = (e) => {
    const onGoingTask = e.dataTransfer.getData("ongoingTasks");
    console.log("ongoingTasks", onGoingTask);
    setOnGoingTasks([...onGoingTasks, onGoingTask]);
  };

  const handleOnDropComplete = (e) => {
    const completeTasks = e.dataTransfer.getData("ongoingTasks");
    setDoneTasks([...doneTasks, completeTasks]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SectionTitle title="Manage Your Tasks" />

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        <div className="border py-3 px-2 bg-slate-500 ">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <GiNotebook className=" " /> To Do
          </h2>
          <div className="py-4 ">
            {tasks?.map((task) => (
              <div
                key={task?._id}
                className="border text-center py-3 my-2"
                draggable
                onDragStart={(e) => handleDrag(e, task)}
              >
                <h2 className="text-xl font-semibold">{task?.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="border py-3 px-2 bg-slate-500 ">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <FaPen className="text-yellow-500" /> On Going
          </h2>
          <div
            className="py-4 h-[80%]"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
          >
            {onGoingTasks?.map((task, index) => {
              const ongoingTask = JSON.parse(task);
              return (
                <div key={index} className="border text-center py-3 my-2">
                  <h2 className="text-xl font-semibold">
                    {ongoingTask?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border py-3 px-2 bg-slate-500">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <IoMdCheckmark className=" text-green-500" /> Complete
          </h2>
          <div
            className="py-4 h-[80%]"
            onDrop={handleOnDropComplete}
            onDragOver={handleDragOver}
          >
            {doneTasks?.map((task, index) => {
              const finishedTask = JSON.parse(task);
              return (
                <div key={index} className="border text-center py-3 my-2">
                  <h2 className="text-xl font-semibold">
                    {finishedTask?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
