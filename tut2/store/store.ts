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
  fetchHabit: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useHabbitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: [],
      loading: false,
      error: null,
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
      fetchHabit: async () => {
        set({ loading: true });
        try {
          const currentHabits = get().habits;
          if (currentHabits.length > 0) {
            set({ loading: false });
            return;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const hb = [
            {
              id: "1",
              name: "hello",
              frequency: "weekly",
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ];
          set({
            habits: hb,
            loading: false,
          });
        } catch (err) {
          set({
            error: `error ${err}`,
            loading: false,
          });
        }
      },
    }),
    {
      name: "habits-local",
      // storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useHabbitStore;
