export default function TaskPending({
  PendingTasks,
  handleCompleteTask,
}: {
  PendingTasks: { Title: string; Description: string; Complete: boolean }[];
  handleCompleteTask: (index: number) => void;
}) {
  return (
    <>
      <div>
        {PendingTasks.map((T, index) =>
          T.Complete === false ? (
            <div
              key={index}
              className="m-2 p-2 flex gap-2 justify-between items-center text-2xl font-bold rounded-xl bg-red-500"
            >
              <span>{index + 1}.</span>
              <p>{T.Title}</p>
              <p>{T.Description}</p>
              <button
                onClick={() => handleCompleteTask(index)}
                className="p-2 rounded-xl  bg-green-700"
              >
                Complete
              </button>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
