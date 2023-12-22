import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/ui/SectionTitle";

const PreviousTasks = () => {
  const { user } = useAuth();

  const { data: tasks } = useQuery({
    queryKey: ["all-matched-tasks"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/tasks?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle title="Previous Task" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tasks &&
          tasks?.map((task) => (
            <div key={task._id} className="card w-full bg-base-300 shadow-xl">
              <div className="card-body ">
                <h2 className="card-title">{task?.title}</h2>
                <p>{task?.description}</p>
                <p>Priority: {task?.priority}</p>
                <p>Deadline: {task?.date}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-ghost text-red-400">Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousTasks;
