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
          className="p-2 text-sm text-white font-bold rounded-xl bg-sky-600 sm:w-36 sm:text-2xl"
        >
          {name}
        </button>
      ) : (
        <button
          onClick={handleEvent}
          className="p-2 text-sm text-white font-bold rounded-xl bg-black sm:w-36 sm:text-2xl "
        >
          {name}
        </button>
      )}
    </>
  );
}
