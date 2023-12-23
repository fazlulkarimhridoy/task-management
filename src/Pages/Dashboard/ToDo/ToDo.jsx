import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TaskList from "../TaskDashboard/TaskList";

const ToDo = () => {
    const [todo, setTodo] = useState([]);
    const axiosPublic = useAxiosPublic();

    // react query to fetch data from mongodb
    const { data: allTasks = [], isPending } = useQuery({
        queryKey: ["allTasks"],
        queryFn: async () => {
            const res = await axiosPublic.get("/tasks");
            return res.data;
        }
    })
    // useEffect for steps
    useEffect(() => {
        const todoData = allTasks?.filter(data => data.status === "todo");
        setTodo(todoData);
    }, [allTasks])

    // showing loader if data is pending
    if (isPending) {
        return <div className="flex flex-row gap-4 w-full">
            <div className="skeleton h-96 w-full"></div>
        </div>
    }

    return (
        <div className="rounded-xl border bg-gray-100 p-4 text-black">
            <div>
                <h3 className="text-xl text-gray-500 font-bold text-center">To-Do ({todo.length})</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 mt-4 space-y-2">
                {
                    todo?.map(data => <TaskList
                        key={data._id}
                        data={data}
                    ></TaskList>)
                }
            </ul>
        </div>
    );
};

export default ToDo;