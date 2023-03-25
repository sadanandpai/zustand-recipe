import Chat from "./components/recipe-4/Chat";
import Counter from "@/components/recipe-1/Counter";
import Details from "./components/recipe-2/Details";
import QueryParams from "./components/recipe-3/QueryParams";
import Random from "./components/recipe-5/Random";
import { useState } from "react";

const components = new Map([
  ["counters", <Counter />],
  ["details", <Details />],
  ["query", <QueryParams />],
  ["chat", <Chat />],
  ["random", <Random />],
]);

function App() {
  const [component, setComponent] = useState(null);

  const setPage = (comp) => {
    setComponent(comp);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        {Array.from(components.entries()).map(([name, comp]) => (
          <button
            className="btn btn-primary mt-3"
            onClick={() => setPage(comp)}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>

      {component}
    </div>
  );
}

export default App;
