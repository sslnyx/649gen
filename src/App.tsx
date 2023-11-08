import { useState } from "react";
import useRollWithProbabilities from "./hooks/useRollWithProbabilities";
import "./App.css";

function App() {
  const [result, setResult] = useState<number[][]>([]);
  const roll649 = useRollWithProbabilities("649");
  const rollDaily = useRollWithProbabilities("dailyGrand");

  const rollHandler = () => {
    if (result.length > 5) return;
    setResult((prev) => [...prev, roll649(6)]);
  };

  const rollHandlerDaily5 = () => {
    if (result.length > 5) return;
    setResult((prev) => [...prev, rollDaily(5)]);
  };

  return (
    <main className="relative w-[320px]">
      <div className="relative  mb-5">
        {/* <button className="mb-5" onClick={rollHandler}>
          Gen
        </button> */}

        <div className="flex gap-5 mb-5">
          <button onClick={rollHandler}>649</button>
          <button onClick={rollHandlerDaily5}>Daily Grand</button>
          <button onClick={() => setResult([])}>Clear</button>
        </div>

        <div className="h-[430px] border p-2">
          {result.map((numArr, i) => (
            <div className="border-2 mb-5 py-3 w-full last:mb-0" key={i}>
              {numArr.map((num, j) => (
                <span key={j} className="px-1 min-w-[40px] inline-block">
                  {num}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
