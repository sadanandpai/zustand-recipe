import { create } from "zustand";

interface DetailsIntf {
  userId: number;
  id: number;
  title: string;
}

interface UseDetailsIntf {
  details: DetailsIntf | null;
  setDetails: (data: DetailsIntf | null) => void;
  getDetails: (id: number) => void;
}

const fetchDetails = async (id: number) => {
  try {
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);
  } catch {
    return null;
  }
};

export const useDetailsStore = create<UseDetailsIntf>((set) => ({
  details: null,

  getDetails: async (id: number) => {
    const details = await fetchDetails(id);
    set({ details });
  },

  setDetails: (details: DetailsIntf | null) => {
    set({ details });
  },
}));
