import { create } from "zustand";

interface RandomStoreIntf {
  value: number;
}

export const userRandomStore = create<RandomStoreIntf>((set) => ({
  value: 0,
}));
