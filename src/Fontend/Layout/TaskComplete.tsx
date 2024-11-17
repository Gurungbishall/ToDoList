export default function TaskComplete({
  CompleteTasks,
  handleDelete,
  expandedTaskIndex,
  toggleDescription,
}: {
  CompleteTasks: { Title: string; Description: string; Complete: boolean }[];
  handleDelete: (index: number) => void;
  expandedTaskIndex: number | null;
  toggleDescription: (index: number) => void;
}) {
  //Rendering Complete and Delete Button
  function Renderingbuttons({ index }: { index: number }) {
    return (
      <>
        <span className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-2 rounded-xl bg-white"
          >
            Completed
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(index);
            }}
            className="p-2 rounded-xl bg-red-700"
          >
            Delete
          </button>
        </span>
      </>
    );
  }

  return (
    <>
      <div>
        {CompleteTasks.map((T, index) =>
          T.Complete === true ? (
            <div
              key={index}
              className={`m-1 p-1 rounded-xl ${
                T.Complete ? "bg-green-500" : "bg-red-500"
              } sm:m-2 sm:p-4 sm:text-xl transition-all duration-300 ease-in-out`}
              onClick={(e) => {
                e.stopPropagation();
                toggleDescription(index);
              }}
            >
              {expandedTaskIndex === index ? (
                <>
                  <div className="flex flex-col justify-between text-center items-center gap-3">
                    <span>
                      <p className="text-xl font-bold">Title</p>
                      <p>{T.Title}</p>
                    </span>
                    <span>
                      <p className="text-xl font-bold">Description</p>
                      <p>{T.Description}</p>
                    </span>
                    <Renderingbuttons index={index} />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center font-bold">
                    <span>{index + 1}.</span>
                    <span>{T.Title}</span>
                    <Renderingbuttons index={index} />
                  </div>
                </>
              )}
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
