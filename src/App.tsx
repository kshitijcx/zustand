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

const App = () => {
  const store = useStore();
  return (
    <div className="flex gap-5 m-5 justify-center items-center">
      <Button onClick={store.inc}>+</Button>
      <Count />
      <Button onClick={store.dec}>-</Button>
    </div>
  );
};

const Count = () => {
  const store = useStore();
  return <>{store.count}</>;
};

export default App;
