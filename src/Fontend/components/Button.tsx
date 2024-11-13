export default function Button({
  name,
  state,
  handleEvent,
}: {
  name: string;
  state: boolean;
  handleEvent: () => void;
}) {
  return (
    <>
      {state === true ? (
        <button
          onClick={handleEvent}
          className="p-2 w-36 text-2xl text-white font-bold rounded-xl bg-sky-600"
        >
          {name}
        </button>
      ) : (
        <button
          onClick={handleEvent}
          className="p-2 w-36 text-2xl text-white font-bold rounded-xl bg-black "
        >
          {name}
        </button>
      )}
    </>
  );
}
