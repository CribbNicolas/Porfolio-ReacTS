import { useState } from "react";
import "@config/tailwindcss/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          asd
        </a>
      </div>
      <h1 className="text-cyan-400">Vite + React</h1>
      <div className="card bg-orange-200 ">
        <button className="" onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs bg-orange-400">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

