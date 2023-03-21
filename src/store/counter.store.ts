import { create } from "zustand";

interface UseStoreIntf {
  value: number;

  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<UseStoreIntf>((set) => ({
  value: 0,

  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}));
