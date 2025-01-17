import { Store } from "@/app/_types/store";
import { create } from "zustand";
import { createUserSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    //persist(
    subscribeWithSelector(
      immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
      }))
      //{
      //name: "my-store", //by default localStorage is used but can specify some other place to store
      //storage: createJSONStorage(()=>localStorage)
      //}
      //)
    )
  )
);
