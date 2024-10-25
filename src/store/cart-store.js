import { create } from "zustand";

//create is used to create a custom hook to access store
//store contains state and functions that modify that state

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
}));
