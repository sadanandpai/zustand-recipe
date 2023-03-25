import { shallow } from "zustand/shallow";
import { useCounterStore } from "@/store/counter.store";

function Controls() {
  console.log("Render: Controls Comp");

  const [increment, decrement] = useCounterStore(
    (state) => [state.increment, state.decrement],
    shallow // without shallow rerendering happens
  );

  return (
    <div className="content">
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>

      <br />
      <br />

      <button className="btn btn-primary" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Controls;
