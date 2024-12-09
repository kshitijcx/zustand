import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
}

const useHabbitStore = create<HabitState>()((set, get) => ({
  habits:[],
  addHabit: (name,frequency) => set((state)=>({}))
}));

export default useHabbitStore;
