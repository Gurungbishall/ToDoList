import { useState } from "react";
import Button from "./Fontend/components/Button";
import TaskForm from "./Fontend/Layout/TaskForm";
import TaskDisplay from "./Fontend/Layout/TaskDisplay";
import TaskComplete from "./Fontend/Layout/TaskComplete";
import TaskPending from "./Fontend/Layout/TaskPending";

export default function App() {
  const [listOfTasks, setListOfTasks] = useState<
    { Title: string; Description: string; Complete: boolean }[]
  >([]);

  const [loadingAll, setLoadingAll] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingPending, setLoadingPending] = useState(false);

  const handleCompleteTask = (index: number) => {
    setListOfTasks((prev) =>
      prev.map((T, idx) => (idx === index ? { ...T, Complete: true } : T))
    );
  };

  const ShowAll = () => {
    setLoadingComplete(false);
    setLoadingPending(false);
    setLoadingAll(!loadingAll);
  };

  const ShowComplete = () => {
    setLoadingAll(false);
    setLoadingPending(false);
    setLoadingComplete(!loadingComplete);
  };

  const ShowPending = () => {
    setLoadingAll(false);
    setLoadingComplete(false);
    setLoadingPending(!loadingPending);
  };

  return (
    <>
      <div className="p-4 h-screen w-screen flex gap-2 ">
        <TaskForm OnAddTask={setListOfTasks} />
        <div className="w-3/5 p-2 ">
          <div className="flex gap-4 pt-5">
            <Button name="All" state={loadingAll} handleEvent={ShowAll} />
            <Button name="Completed" state={loadingComplete} handleEvent={ShowComplete} />
            <Button name="Pending" state={loadingPending} handleEvent={ShowPending} />
          </div>
          <div className="mt-3">
            {loadingAll ? (
              <TaskDisplay
                Tasks={listOfTasks}
                handleCompleteTask={handleCompleteTask}
              />
            ) : null}
            {loadingComplete ? (
              <TaskComplete CompleteTasks={listOfTasks} />
            ) : null}
            {loadingPending ? (
              <TaskPending
                PendingTasks={listOfTasks}
                handleCompleteTask={handleCompleteTask}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
