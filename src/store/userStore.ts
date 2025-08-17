import { create } from "zustand";
import { http } from "@/http/client";
import { endpoints } from "@/http/endpoints";

interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  async fetchUsers() {
    const response = await http.get<User[]>(endpoints.users);
    set({ users: response.data });
  },
}));
