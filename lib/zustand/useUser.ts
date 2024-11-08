import { create } from "zustand";

export const useUser = create((set) => ({
  user: 0,
  setUser: (item: any) => set((state) => ({ user: item })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));
