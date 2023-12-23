import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const AddTasks = () => {
  // hooks and forms
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  // handle form submit
  const onSubmit = (formData) => {
    const title = formData.title;
    const deadline = formData.deadline
    const priority = formData.priority
    const description = formData.description
    const status = "todo";
    const doc = { title, deadline, priority, description, status };

    // sending data to the mongodb
    axiosPublic.post("/tasks", doc)
      .then(res => {
        const data = res.data;
        console.log("task data", data);
        if (data.insertedId) {
          toast.success('New task created!');
          reset({
            title: "",
            deadline: "",
            priority: "",
            description: ""
          })
        }
      })

  };


  return (
    <div className="container mx-auto">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <section>
        <h1 className="text-center text-5xl font-bold text-gray-500">Create a new task</h1>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gray-100 p-8 lg:col-span-3 lg:p-12">
            {/* task form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* task name */}
              <div>
                <label className="p-2">
                  Task name<sup className="text-red-600">*</sup>
                </label>
                <input
                  {...register("title", { required: true })}
                  className="w-full border-2 rounded-lg border-gray-200 p-4 text-sm"
                  placeholder="Task Title"
                  type="text"
                />
                {errors.title && (
                  <span className="text-red-600">
                    Task name is required
                  </span>
                )}
              </div>
              {/* task deadline & priority */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <label className="p-2">
                    Deadline<sup className="text-red-600">*</sup>
                  </label>
                  <input
                    {...register("deadline", { required: true })}
                    className="w-full border-2 rounded-lg border-gray-200 p-4 text-sm"
                    placeholder="Deadline"
                    type="date"
                  />
                  {errors.deadline && (
                    <span className="text-red-600">
                      Deadline is required
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <label className="p-2">
                    Priority<sup className="text-red-600">*</sup>
                  </label>
                  <select
                    {...register("priority", { required: true })}
                    className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm">
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hight">High</option>
                  </select>
                  {errors.priority && (
                    <span className="text-red-600">
                      Priority is required
                    </span>
                  )}
                </div>
              </div>

              {/* task description */}

              <div>
                <label className="p-2">
                  Task Description<sup className="text-red-600">*</sup>
                </label>
                <textarea
                  rows="8"
                  {...register("description", { required: true })}
                  className="w-full border-2 rounded-lg border-gray-200 p-4 text-sm"
                  placeholder="Task Description"
                  type="text"
                />
                {errors.description && (
                  <span className="text-red-600">
                    Description is required
                  </span>
                )}
              </div>

              {/* submit button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-sky-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Create New Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTasks;
