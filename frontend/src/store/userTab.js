import { create } from "zustand";

const useUserTab = create((set) => ({
  selectedTab: "Chat",
  setSelectedTab: (selectedTab) => set({ selectedTab }),
}));

export default useUserTab;
