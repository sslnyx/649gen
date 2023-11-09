import { Fragment, useState } from "react";
import useRollWithProbabilities from "./hooks/useRollWithProbabilities";
import { MyStateType } from "./types/myTypes";
import "./App.css";

// Initialize state with an empty object
const initialState: MyStateType = {
  "649": [],
  daily: [],
};

function App() {
  const [result, setResult] = useState<MyStateType>(initialState);
  const roll649 = useRollWithProbabilities("649");
  const rollDaily = useRollWithProbabilities("dailyGrand");

  const rollHandler = () => {
    if (result["649"].length > 5) return;

    const roll = roll649(6);
    setResult((prev: MyStateType) => {
      // Create a new array with the new roll
      const newRoll649 = [...prev["649"], roll];
      return {
        ...prev,
        "649": newRoll649,
      };
    });
  };

  const rollHandlerDaily5 = () => {
    if (result["daily"].length > 5) return;

    const roll = rollDaily(5);
    setResult((prev: MyStateType) => {
      // Create a new array with the new roll
      const newRoll = [...prev["daily"], roll];
      return {
        ...prev,
        daily: newRoll,
      };
    });
  };

  return (
    <main
      className="relative w-[320px]"
      style={{ height: `${window.innerHeight}px` }}
    >
      <div className="relative">
        {/* <button className="mb-5" onClick={rollHandler}>
          Gen
        </button> */}

        <div className="flex gap-5 mb-5">
          <button onClick={rollHandler}>649</button>
          <button onClick={rollHandlerDaily5}>Daily Grand</button>
          <button onClick={() => setResult(initialState)}>Clear</button>
        </div>

        <div className="h-[430px] border p-2 overflow-y-scroll">
          {Object.entries(result).map(([game, array], i) => (
            <Fragment key={i}>
              {array.map((numArr, i) => (
                <div className="border-2 mb-5 py-3 w-full last:mb-0" key={i}>
                  {/* <small>{game}</small> */}
                  {numArr.map((num, j) => (
                    <span
                      key={j}
                      className={`px-1 min-w-[40px] inline-block ${
                        game === "daily" && "last:text-red-500"
                      }`}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
