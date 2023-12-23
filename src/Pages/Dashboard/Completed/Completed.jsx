import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskDashboard/TaskList";

const Completed = () => {
    const [completed, setCompleted] = useState([]);
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
        const completedData = allTasks?.filter(data => data.status === "completed");
        setCompleted(completedData);
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
                <h3 className="text-xl text-gray-500 font-bold text-center">Completed ({completed.length})</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 mt-4 space-y-2">
                {
                    completed?.map(data => <TaskList
                        key={data._id}
                        data={data}
                    ></TaskList>)
                }
            </ul>
        </div>
    );
};

export default Completed;