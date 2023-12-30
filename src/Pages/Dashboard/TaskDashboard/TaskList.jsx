/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";

const TaskList = ({ data }) => {
    // states and hooks
    const { _id, title, description, deadline, priority, status } = data;

    // dnd dragger
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "tasks",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    // console.log("dragging ? : ", isDragging);

    return (
        <li ref={drag} className="bg-sky-50 rounded-lg w-full hover:scale-110 transition-all ease-out duration-500">
            <div
                className={`block h-full rounded-lg ${status === "todo" && "bg-gray-50" || status === "ongoing" && "bg-lime-50" || status === "completed" && "bg-green-50"} p-4 border hover:border-gray-600`}>
                <div className="flex justify-between items-center">
                    <strong className="font-medium ">{title}</strong>
                    <strong className={`font-medium text-sm ${status === "todo" && "text-yellow-600" || status === "ongoing" && "text-sky-600" || "text-green-600"}`}>{
                        status === "todo" && "pending" || status === "ongoing" && "in-progress" || "completed"
                    }</strong>
                </div>
                <div className="mt-1 text-xs font-medium text-gray-600">
                    {description}
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-xs font-semibold text-gray-400">Deadline : {deadline}</p>
                    <p className="text-xs font-semibold text-gray-400">Priority : {priority}</p>
                </div>
            </div>
        </li>
    );
};

export default TaskList;