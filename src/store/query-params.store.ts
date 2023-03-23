import { create } from "zustand";
import produce from "immer";

interface QueryParamsStoreIntf {
  queryParams: { [key: string]: string };

  updateQueryParam: (key: string, value: string) => void;
}

export const useQueryParamsStore = create<QueryParamsStoreIntf>((set) => ({
  queryParams: { key1: "value1", key2: "value2" },

  updateQueryParam: (key: string, value: string) => {
    set(
      produce((state) => {
        state.queryParams[key] = value;
      })
    );
  },
}));
