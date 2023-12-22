import axios from "axios";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/ui/SectionTitle";
import toast from "react-hot-toast";

const EditTask = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const task = {
      ...data,
    };

    const res = await axios.patch(`http://localhost:3000/tasks/${id}`, task);

    if (res.data.modifiedCount) {
      toast.success("Successfully updated task!");
      navigation("/dashboard/previous-tasks");
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/tasks/${id}`);
      return res.data;
    },
  });

  if (isPending) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <SectionTitle title="Edit Task" />
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
              defaultValue={data?.title}
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
              defaultValue={data?.description}
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
                defaultValue={data?.priority}
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
                defaultValue={data?.date}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
