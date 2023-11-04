import { useState } from "react";
import useRollWithProbabilities from "./hooks/useRollWithProbabilities";
import "./App.css";

function App() {
  const [result, setResult] = useState<number[][]>([]);
  const roll = useRollWithProbabilities();

  const rollHandler = () => {
    if (result.length > 5) return;
    setResult((prev) => [...prev, roll(6)]);
  };

  return (
    <main className="relative w-[270px] h-[460px] flex flex-col items-center">
      <button className="absolute -top-[80px]" onClick={rollHandler}>
        Gen
      </button>

      {result.map((numArr, i) => (
        <div className="border-2 mb-5 py-3 w-full" key={i}>
          {numArr.map((num, j) => (
            <span key={j} className="px-3 min-w-[30px] inline-block">
              {num}
            </span>
          ))}
        </div>
      ))}
    </main>
  );
}

export default App;
