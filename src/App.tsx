import { useState, useCallback } from "react";
import Button from "./Fontend/components/Button";
import TaskForm from "./Fontend/Layout/TaskForm";
import TaskDisplay from "./Fontend/Layout/TaskDisplay";
import TaskComplete from "./Fontend/Layout/TaskComplete";
import TaskPending from "./Fontend/Layout/TaskPending";

export default function App() {
  const [listOfTasks, setListOfTasks] = useState<
    { Title: string; Description: string; Complete: boolean }[]
  >([]);

  const [loadingState, setLoadingState] = useState({
    all: true,
    complete: false,
    pending: false,
    create: false,
  });
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null
  );

  const handleCompleteTask = useCallback((index: number) => {
    setListOfTasks((prev) =>
      prev.map((T, idx) => (idx === index ? { ...T, Complete: true } : T))
    );
  }, []);

  const handleDelete = (index: number) => {
    setListOfTasks((prev) => prev.filter((_, idx) => idx !== index));
  };

  const toggleLoadingState = useCallback((state: keyof typeof loadingState) => {
    setLoadingState((prev) => ({
      all: state === "all" ? !prev.all : false,
      complete: state === "complete" ? !prev.complete : false,
      pending: state === "pending" ? !prev.pending : false,
      create: state === "create" ? !prev.create : false,
    }));
  }, []);

  const toggleDescription = (index: number) => {
    setExpandedTaskIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="pt-8  h-screen w-screen flex flex-col items-center">
      <div className="flex gap-4">
        <Button
          name="All"
          state={loadingState.all}
          handleEvent={() => toggleLoadingState("all")}
        />
        <Button
          name="Completed"
          state={loadingState.complete}
          handleEvent={() => toggleLoadingState("complete")}
        />
        <Button
          name="Pending"
          state={loadingState.pending}
          handleEvent={() => toggleLoadingState("pending")}
        />
        <Button
          name="Create"
          state={loadingState.create}
          handleEvent={() => toggleLoadingState("create")}
        />
      </div>

      <div className="w-full mt-3 sm:w-1/2 ">
        {(loadingState.all ||
          loadingState.complete ||
          loadingState.pending ||
          loadingState.create) && (
          <>
            {loadingState.all && (
              <TaskDisplay
                Tasks={listOfTasks}
                handleCompleteTask={handleCompleteTask}
                handleDelete={handleDelete}
                expandedTaskIndex={expandedTaskIndex}
                toggleDescription={toggleDescription}
              />
            )}
            {loadingState.complete && (
              <TaskComplete
                CompleteTasks={listOfTasks}
                handleDelete={handleDelete}
                expandedTaskIndex={expandedTaskIndex}
                toggleDescription={toggleDescription}
              />
            )}
            {loadingState.pending && (
              <TaskPending
                PendingTasks={listOfTasks}
                handleCompleteTask={handleCompleteTask}
                handleDelete={handleDelete}
                expandedTaskIndex={expandedTaskIndex}
                toggleDescription={toggleDescription}
              />
            )}
            {loadingState.create && <TaskForm OnAddTask={setListOfTasks} />}
          </>
        )}
      </div>
    </div>
  );
}
