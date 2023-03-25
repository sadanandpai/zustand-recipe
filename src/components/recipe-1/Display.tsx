import { useCounterStore } from "@/store/counter.store";

function Display() {
  const value = useCounterStore((state) => state.value);

  console.log("Render: Display Comp");

  return <h1 className="m-4">{value}</h1>;
}

export default Display;
