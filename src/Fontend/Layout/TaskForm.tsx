import { useState } from "react";

export default function TaskForm({
  OnAddTask,
}: {
  OnAddTask: React.Dispatch<
    React.SetStateAction<
      { Title: string; Description: string; Complete: boolean }[]
    >
  >;
}) {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const AddTask = () => {
    if (task.trim() === "" || description.trim() === "") return;
    const newTask = { Title: task, Description: description, Complete: false };
    OnAddTask((prevTasks) => [...prevTasks, newTask]);
    setTask("");
    setDescription("");
  };

  return (
    <>
      <div className="pt-6 flex flex-col items-center gap-2 ">
        <div className="text-2xl font-bold sm:text-4xl ">Add Task</div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-4/5 p-2 text-sm font-bold border-2 border-black sm:text-xl"
          placeholder="Task Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-4/5 p-2 text-sm border-2 border-black sm:text-xl "
          placeholder="Task Description"
        />
        <button
          onClick={AddTask}
          className="p-2 w-24 text-sm text-white font-bold rounded-xl bg-red-600 sm:w-32 sm:text-xl"
        >
          Submit
        </button>
      </div>
    </>
  );
}
