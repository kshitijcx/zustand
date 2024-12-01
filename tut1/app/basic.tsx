"use client";
import { Button } from "@/components/ui/button";
import { create } from "zustand";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

const page = () => {
  const {count,inc,dec} = useStore();
  return (
    <div className="flex gap-3">
      <Button variant="secondary" onClick={inc}>+</Button>
      <p>{count}</p>
      <Button variant="secondary" onClick={dec}>-</Button>
    </div>
  );
};
export default page;
