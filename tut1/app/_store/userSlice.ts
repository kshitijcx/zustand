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

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  userName: "",
  fullName: "",
  age: 0,
  address: "",
  setAddress: (address) =>
    set((state) => {
      state.address = address; //when using immer no need to return an object, simply change the state
    }), //set(() => ({ address })), //set((state) => ({ ...state, address })) -> state can only merge at one level but for multilevel use spread or use emmer
});
