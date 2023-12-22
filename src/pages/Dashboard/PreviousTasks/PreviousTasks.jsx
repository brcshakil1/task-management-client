import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/ui/SectionTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PreviousTasks = () => {
  const { user } = useAuth();

  const { data: tasks, refetch } = useQuery({
    queryKey: ["all-matched-tasks"],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-management-server-eight-weld.vercel.app/tasks?email=${user?.email}`
      );
      return res.data;
    },
  });

  const handleDeleteTask = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://task-management-server-eight-weld.vercel.app/tasks/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle title="Previous Task" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        {tasks &&
          tasks?.map((task) => (
            <div key={task._id} className="card w-full bg-base-300 shadow-xl ">
              <div className="card-body ">
                <h2 className="card-title">{task?.title}</h2>
                <p>{task?.description}</p>
                <p>Priority: {task?.priority}</p>
                <p>Deadline: {task?.date}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/edit-task/${task?._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDeleteTask(task?._id)}
                    className="btn btn-ghost text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousTasks;
