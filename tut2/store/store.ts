import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

const useHabbitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: [],
      addHabit: (name, frequency) =>
        set((state) => ({
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      toggleHabit: (id, date) =>
        set((state) => ({
          habits: state.habits.map((item) =>
            item.id === id
              ? {
                  ...item,
                  completedDates: item.completedDates.includes(date)
                    ? item.completedDates.filter(
                        (someDate) => someDate !== date
                      )
                    : [...item.completedDates, date],
                }
              : item
          ),
        })),
      removeHabit: (id) =>
        set((state) => ({
          habits: state.habits.filter((item) => item.id !== id),
        })),
    }),
    { 
      name: "habits-local", 
      // storage: createJSONStorage(() => localStorage) 
    }
  )
);

export default useHabbitStore;
