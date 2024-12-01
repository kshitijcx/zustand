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
}

const useHabbitStore = create<HabitState>((set, get) => {
  return {
    habits: [],
  };
});
