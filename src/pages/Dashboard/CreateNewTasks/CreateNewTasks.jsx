import SectionTitle from "./../../../components/ui/SectionTitle";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const CreateNewTasks = () => {
  const { user, loading } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const task = {
      ...data,
      name: user?.displayName,
      userEmail: user?.email,
    };

    axios.post("http://localhost:3000/tasks", task).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("You've successfully created a new task!");
        reset();
      }
    });
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <SectionTitle title="Create New Tasks" />
      <div className="border p-5 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-[#9f99aa] font-semibold">
                Title
              </span>
            </label>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="input input-ed rounded-sm border-2 border-gray-500"
              required
              {...register("title", { required: true })}
            />
            {errors.title === "required" && (
              <p className="text-red-400">Title is required</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-[#9f99aa] font-semibold">
                Description
              </span>
            </label>
            <textarea
              className="p-3 border-2 border-gray-500 "
              name="description"
              placeholder="description"
              required
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Priority
                </span>
              </label>
              <select
                className="input rounded-sm border-2 border-gray-500"
                name="priority"
                defaultValue="low"
                id="priority"
                required
                {...register("priority")}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="Heigh">Heigh</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg text-[#9f99aa] font-semibold">
                  Deadline
                </span>
              </label>
              <input
                type="date"
                placeholder="date"
                name="date"
                className="input rounded-sm border-2 border-gray-500"
                required
                {...register("date")}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn hover:bg-blue-500 bg-[#3144D7]
             font-semibold text-white border-none"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTasks;
