import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useTasks = () => {
  const { user } = useAuth();

  const { data: tasks, refetch } = useQuery({
    queryKey: ["all-matched-tasks"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/tasks?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [tasks, refetch];
};

export default useTasks;
