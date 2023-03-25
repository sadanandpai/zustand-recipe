import { useDetailsStore } from "@/store/details.store";

function DetailsDisplay() {
  const detailsState = useDetailsStore();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.valueAsNumber;

    if (!Number.isNaN(id)) {
      detailsState.getDetails(event.target.valueAsNumber);
    } else {
      detailsState.setDetails(null);
    }
  };

  return (
    <div className="content">
      <h2 className="m-3">Fetch Details using API</h2>

      <input type="number" className="form-control" onChange={onChange} />

      <p className="m-5">{detailsState.details?.title}</p>
    </div>
  );
}

export default DetailsDisplay;
