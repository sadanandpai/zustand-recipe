import { create } from "zustand";

interface ItemStoreIntf {
  item: string;

  setItem: (item: string) => void;
}

export const useItemStore = create<ItemStoreIntf>((set) => ({
  item: "",

  setItem: (item: string) => set({ item }),
}));
