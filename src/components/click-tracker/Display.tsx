import { useItemStore } from "@/store/item.store";

function Display() {
  const item = useItemStore(
    (state) => state.item,
    (prevState, newState) => prevState.toLowerCase() === newState.toLowerCase()
  );

  return <h2 className="m-5">{item}</h2>;
}

export default Display;
