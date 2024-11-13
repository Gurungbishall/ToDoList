export default function TaskDisplay({
  Tasks,
  handleCompleteTask,
}: {
  Tasks: { Title: string; Description: string; Complete: boolean }[];
  handleCompleteTask: (index: number) => void;
}) {
  return (
    <>
      <div>
        {Tasks.map((T, index) => (
          <div
            key={index}
            className={
              T.Complete === false
                ? "m-2 p-2 flex gap-2 justify-between items-center text-2xl font-bold rounded-xl bg-red-500"
                : "m-2 p-2 flex gap-2 justify-between items-center text-2xl font-bold rounded-xl bg-green-500"
            }
          >
            <span>{index + 1}.</span>
            <p>{T.Title}</p>
            <p>{T.Description}</p>
            {T.Complete === false ? (
              <button
                onClick={() => handleCompleteTask(index)}
                className="p-2 rounded-xl  bg-green-700"
              >
                Complete
              </button>
            ) : (
              <button className="p-2 rounded-xl bg-white">Completed</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
