import { StateCreator } from "zustand";

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  userName: "",
  fullName: "",
  age: 0,
  address: "",
  setAddress: (address) => set(() => ({ address })), //set((state) => ({ ...state, address })) -> state can only merge at one level but for multilevel use spread or use emmer
});
