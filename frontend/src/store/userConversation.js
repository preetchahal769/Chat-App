import { create } from "zustand";

const useUserConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  message: [],
  setMessage: (message) => set({ message }),
}));

export default useUserConversation;
