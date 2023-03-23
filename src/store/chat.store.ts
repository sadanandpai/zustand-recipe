import { devtools, persist } from "zustand/middleware";

import { create } from "zustand";

interface BearState {
  chats: string[];
  appendChat: (text: string) => void;
}

export const useChatStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        chats: [],
        appendChat: (text: string) =>
          set((state) => ({ chats: [...state.chats, text] })),
      }),
      { name: "chats" }
    )
  )
);
