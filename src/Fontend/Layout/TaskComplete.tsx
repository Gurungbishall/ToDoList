export default function TaskComplete({
  CompleteTasks,
}: {
  CompleteTasks: { Title: string; Description: string; Complete: boolean }[];
}) {
  return (
    <>
      <div>
        {CompleteTasks.map((T, index) =>
          T.Complete === true ? (
            <div
              key={index}
              className="m-2 p-2 flex gap-2 justify-between items-center text-2xl font-bold rounded-xl bg-green-500"
            >
              
              <span>{index + 1}.</span>
              <p>{T.Title}</p>
              <p>{T.Description}</p>
              <button className="p-2 rounded-xl bg-white">Completed</button>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
