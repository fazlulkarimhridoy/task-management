import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const TaskDashboard = () => {
    // hooks and states
    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const axiosPublic = useAxiosPublic();

    // react query to fetch data from mongodb
    const { data: tasks = [], isPending } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axiosPublic.get("/tasks");
            return res.data;
        }
    })


    // useEffect for steps
    useEffect(() => {
        const todoData = tasks?.filter(data => data.status === "todo");
        const ongoingData = tasks?.filter(data => data.status === "ongoing");
        const completedData = tasks?.filter(data => data.status === "completed");
        setTodo(todoData);
        setOngoing(ongoingData);
        setCompleted(completedData)
    }, [tasks])

    // showing loader if data is pending
    if (isPending) {
        return <div className="flex flex-row gap-4 w-full">
            <div className="skeleton h-96 w-full"></div>
            <div className="skeleton h-96 w-full"></div>
            <div className="skeleton h-96 w-full"></div>
        </div>
    }

    return (
        <div>
            <div className="flex gap-4">

                {/* to-do list */}
                <div className="rounded-xl border border-gray-700 bg-gray-300 p-4 text-black w-1/3">
                    <div className="mb-5">
                        <h3 className="text-3xl font-bold text-center">To-do ({todo.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            todo?.map(item => <li key={item._id} className="bg-sky-50 rounded-lg">
                                <div className="block h-full rounded-lg border-gray-50 p-4 border hover:border-pink-600">
                                    <strong className="font-medium ">{item.title}</strong>

                                    <div className="mt-1 text-xs font-medium text-gray-600">
                                        {item.description}
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-xs font-semibold text-gray-400">Deadline : {item.deadline}</p>
                                        <p className="text-xs font-semibold text-gray-400 pr-5">Priority : {item.priority}</p>
                                    </div>
                                </div>
                            </li>)
                        }

                    </ul>
                </div>

                {/* on-going list */}
                <div className="rounded-xl border border-gray-700 bg-gray-200 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-3xl font-bold text-center">On-going ({ongoing.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            ongoing?.map(item => <li key={item._id} className="bg-lime-50 rounded-lg">
                                <div className="block h-full rounded-lg border-gray-50 border p-4 hover:border-pink-600">
                                    <strong className="font-medium ">{item.title}</strong>

                                    <div className="mt-1 text-xs font-medium text-gray-600">
                                        {item.description}
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-xs font-semibold text-gray-400">Deadline : {item.deadline}</p>
                                        <p className="text-xs font-semibold text-gray-400 pr-5">Priority : {item.priority}</p>
                                    </div>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>

                {/* completed list */}
                <div className="rounded-xl border border-gray-700 bg-gray-100 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-3xl font-bold text-center">Completed ({completed.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            completed?.map(item => <li key={item._id} className="bg-green-50 rounded-lg">
                                <div className="block h-full rounded-lg border-gray-50 border p-4 hover:border-pink-600">
                                    <strong className="font-medium ">{item.title}</strong>

                                    <div className="mt-1 text-xs font-medium text-gray-600">
                                        {item.description}
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-xs font-semibold text-gray-400">Deadline : {item.deadline}</p>
                                        <p className="text-xs font-semibold text-gray-400 pr-5">Priority : {item.priority}</p>
                                    </div>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TaskDashboard;