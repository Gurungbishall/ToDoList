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
      <div className="w-2/5 pt-6 flex flex-col items-center gap-2">
        <div className="text-4xl font-bold">Add Task</div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-4/5 p-2 text-xl font-bold border-2 border-black"
          placeholder="Task Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-4/5 p-2 text-xl border-2 border-black"
          placeholder="Task Description"
        />
        <button
          onClick={AddTask}
          className="p-2 w-32 text-xl text-white font-bold rounded-xl bg-red-600"
        >
          Submit
        </button>
      </div>
    </>
  );
}
