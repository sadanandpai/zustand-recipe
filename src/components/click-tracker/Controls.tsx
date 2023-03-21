import { useItemStore } from "@/store/item.store";

const items = ["JAVASCRIPT", "TypeScript", "React", "javascript"];

function Controls() {
  const setItem = useItemStore((state) => state.setItem);

  return (
    <div>
      <h2 className="m-3">Click and learn the shown technology</h2>

      <div className="d-flex justify-content-around">
        {items.map((item) => (
          <button
            className="btn btn-primary"
            onClick={() => setItem(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Controls;
