import * as math from "./sum";

import { add } from "./add";

vi.mock("./sum", () => {
  return {
    sum: () => 4,
  };
});

describe("add", () => {
  it("should add", () => {
    const spy = vi.spyOn(math, "sum").mockImplementation((a, b) => a + b);

    expect(add(2, 3)).toBe(5);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(2, 3);
  });
});
