import { Store } from "@/app/_types/store";
import { create } from "zustand";
import { createUserSlice } from "./userSlice";
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
  }))
);
