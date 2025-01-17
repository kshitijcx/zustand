import { UserSlice } from "@/app/_store/userSlice";
import { CartSlice } from "../_store/cartSlice";

export type Store = UserSlice & CartSlice;
