/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import { useDrop } from "react-dnd";
import toast, { Toaster } from "react-hot-toast";

const TaskDashboard = () => {
    // hooks and states
    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const axiosPublic = useAxiosPublic();

    // react query to fetch data from mongodb
    const { data: tasks = [], isPending, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axiosPublic.get("/tasks");
            return res.data;
        }
    })

    // dnd droppers for todo
    const [{ isOver: isOverTodo }, dropTodo] = useDrop(() => ({
        accept: "tasks",
        drop: (item) => addItemToList(item.id, "todo"),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // dnd droppers for ongoing
    const [{ isOver: isOverOngoing }, dropOngoing] = useDrop(() => ({
        accept: "tasks",
        drop: (item) => addItemToList(item.id, "ongoing"),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // dnd droppers for completed
    const [{ isOver: isOverCompleted }, dropCompleted] = useDrop(() => ({
        accept: "tasks",
        drop: (item) => addItemToList(item.id, "completed"),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // console.log("is dropping ? : ", isOverTodo, isOverOngoing, isOverCompleted);

    // useEffect for steps
    useEffect(() => {
        const todoData = tasks?.filter(data => data.status === "todo");
        const ongoingData = tasks?.filter(data => data.status === "ongoing");
        const completedData = tasks?.filter(data => data.status === "completed");
        setTodo(todoData);
        setOngoing(ongoingData);
        setCompleted(completedData)
    }, [tasks])

    // dropping functioning after dragging a task
    const addItemToList = async (id, status) => {
        await axiosPublic.put(`/tasks/${id}`, { status })
            .then(res => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    if(status === "todo"){
                        return toast.success('Task is added to to-do!');
                    }
                    if(status === "ongoing"){
                        return toast.success('Task is in progress phase!');
                    }
                    if(status === "completed"){
                        return toast.success('Task completed!');
                    } 
                }
            })
        refetch();
    };


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
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex gap-4">

                {/* to-do list */}
                <div ref={dropTodo} className="rounded-xl border bg-gray-300 p-4 text-black w-1/3">
                    <div className="mb-5">
                        <h3 className="text-xl text-gray-500 font-bold text-center">To-Do ({todo.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            todo?.map(data => <TaskList
                                key={data._id}
                                data={data}
                            ></TaskList>)
                        }

                    </ul>
                </div>

                {/* on-going list */}
                <div ref={dropOngoing} className="rounded-xl border bg-gray-200 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-xl text-gray-500 font-bold text-center">On-Going ({ongoing.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            ongoing?.map(data => <TaskList
                                key={data._id}
                                data={data}
                            ></TaskList>)
                        }
                    </ul>
                </div>

                {/* completed list */}
                <div ref={dropCompleted} className="rounded-xl border bg-gray-100 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-xl text-gray-500 font-bold text-center">Completed ({completed.length})</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        {
                            completed?.map(data => <TaskList
                                key={data._id}
                                data={data}
                            ></TaskList>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TaskDashboard;