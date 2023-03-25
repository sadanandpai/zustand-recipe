import { useState } from "react";
import { userRandomStore } from "@/store/random.store";

// Store update outside the React component
const generateRandomNumber = () => {
  userRandomStore.setState({ value: Math.floor(Math.random() * 100) });
};

// Subscription to the store updates
userRandomStore.subscribe((state) => {
  console.log({ value: state.value });
});

function Random() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="content">
      <h2 className="m-3">Random Gen App</h2>

      <div className="d-flex flex-column gap-4 my-4">
        <button className="btn btn-primary" onClick={generateRandomNumber}>
          Generate Random number
        </button>

        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Refresh component
        </button>
      </div>

      <h4>Random number is</h4>
      <h4>{userRandomStore.getState().value}</h4>
    </div>
  );
}

export default Random;
