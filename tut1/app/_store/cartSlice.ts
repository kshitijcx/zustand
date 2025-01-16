import { StateCreator } from "zustand";
import { Product } from "../_types/product";
import { CartProduct } from "../_types/cartProduct";

type CartState = {
  products: CartProduct[];
  total: number;
};

type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  incQty: (productId: string) => void;
  decQty: (productId: string) => void;
  getProductById: (productId: string) => CartProduct | undefined;
  setTotal: (total: number) => void;
  reset: () => void;
};

const initialState: CartState = {
  products: [],
  total: 0,
};

export type CartSlice = CartState & CartActions;

export const createUserSlice: StateCreator<
  CartSlice,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set) => ({
  ...initialState,
  incQty: (productId) =>
    set((state) => {
      const foundProduct = state.product.find(
        (product) => product.id === productId
      );
      if (foundProduct) {
        foundProduct.qty += 1;
      }
    }),
  decQty: (productId) =>
    set((state) => {
      const foundIndex = state.product.findIndex(
        (product) => product.id === productId
      );
      if (foundProduct !== -1) {
        if (state.products[foundIndex].qty === 1) {
          state.products[(foundIndex, 1)];
        } else {
          state.products[foundIndex].qty -= 1;
        }
      }
    }),
});
