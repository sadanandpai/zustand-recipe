import Controls from "./Controls";
import Display from "./Display";
import { useCounterStore } from "@/store/counter.store";

function Counter() {
  return (
    <div className="content">
      <h2 className="m-3">Counter App</h2>

      <Display />
      <Controls />
    </div>
  );
}

export default Counter;
