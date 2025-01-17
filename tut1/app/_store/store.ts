import { Store } from "@/app/_types/store";
import { create } from "zustand";
import { createUserSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";

export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }))
);
