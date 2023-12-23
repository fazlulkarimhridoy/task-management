import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const TaskDashboard = () => {
    // hooks and states
    const axiosPublic = useAxiosPublic();

    // react query to fetch data from mongodb
    


    return (
        <div>
            <div className="flex items-center gap-4">

                {/* to-do list */}
                <div className="rounded-xl border border-gray-700 bg-gray-300 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-3xl font-bold text-center">To-do</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-green-50 rounded-lg">
                            <p className="block h-full rounded-lg border-gray-700 p-4 hover:border-pink-600">
                                <strong className="font-medium ">Project A</strong>

                                <p className="mt-1 text-xs font-medium text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs font-semibold text-gray-400">Deadline : 12-12-2023</p>
                                    <p className="text-xs font-semibold text-gray-400 pr-5">Priority : High</p>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>

                {/* on-going list */}
                <div className="rounded-xl border border-gray-700 bg-gray-200 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-3xl font-bold text-center">On-going</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                    <li className="bg-green-50 rounded-lg">
                            <p className="block h-full rounded-lg border-gray-700 p-4 hover:border-pink-600">
                                <strong className="font-medium ">Project A</strong>

                                <p className="mt-1 text-xs font-medium text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs font-semibold text-gray-400">Deadline : 12-12-2023</p>
                                    <p className="text-xs font-semibold text-gray-400 pr-5">Priority : High</p>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>

                {/* completed list */}
                <div className="rounded-xl border border-gray-700 bg-gray-100 p-4 text-black w-1/3">
                    <div>
                        <h3 className="text-3xl font-bold text-center">Completed</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                    <li className="bg-green-50 rounded-lg">
                            <p className="block h-full rounded-lg border-gray-700 p-4 hover:border-pink-600">
                                <strong className="font-medium ">Project A</strong>

                                <p className="mt-1 text-xs font-medium text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti, unde ab ut in!
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs font-semibold text-gray-400">Deadline : 12-12-2023</p>
                                    <p className="text-xs font-semibold text-gray-400 pr-5">Priority : High</p>
                                </div>
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TaskDashboard;