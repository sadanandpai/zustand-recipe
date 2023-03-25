import { useQueryParamsStore } from "@/store/query-params.store";

const items: { [key: string]: string }[] = [
  { key: "key1", value: "JavaScript" },
  { key: "key2", value: "TypeScript" },
  { key: "key1", value: "a" },
  { key: "key2", value: "b" },
];

function QueryParams() {
  const [queryParams, updateQueryParam] = useQueryParamsStore((state) => [
    state.queryParams,
    state.updateQueryParam,
  ]);

  return (
    <div className="content">
      <div>
        <h2 className="m-3">Update the query params</h2>

        <div className="d-flex justify-content-around flex-column">
          {items.map((item) => (
            <button
              className="btn btn-primary mt-5"
              onClick={() => updateQueryParam(item.key, item.value)}
              key={item.value}
            >
              {item.key} - {item.value}
            </button>
          ))}
        </div>
      </div>

      <h4 className="m-5">{JSON.stringify(queryParams)}</h4>
    </div>
  );
}

export default QueryParams;
