import { FaPen } from "react-icons/fa6";
import SectionTitle from "./../../../components/ui/SectionTitle";
import { IoMdCheckmark } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import useTasks from "../../../hooks/useTasks";

const ManageTasks = () => {
  const [tasks, refetch] = useTasks();
  console.log(tasks);
  return (
    <div>
      <SectionTitle title="Manage Your Tasks" />

      <div className="grid grid-cols-3 py-10 gap-5">
        <div className="border py-3 px-2 bg-slate-500 ">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <GiNotebook className=" " /> To Do
          </h2>
          <div className="py-4">
            {tasks?.map((task) => (
              <div
                key={task?._id}
                className="border text-center py-3"
                draggable
              >
                <h2>{task?.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="border py-3 px-2 bg-slate-500 ">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <FaPen className="text-yellow-500" /> On Going
          </h2>
          <div className="py-4"></div>
        </div>
        <div className="border py-3 px-2 bg-slate-500 ">
          <h2 className="flex items-center gap-2 text-xl text-center font-semibold">
            <IoMdCheckmark className=" text-green-500" /> Complete
          </h2>
          <div className="py-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
