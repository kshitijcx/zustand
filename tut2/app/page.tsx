"use client";
import HabitForm from "@/components/HabitForm";
import HabitList from "@/components/HabitList";
import useHabbitStore from "@/store/store";
import { useEffect } from "react";

const page = () => {
  const { fetchHabit } = useHabbitStore();

  useEffect(() => {
    fetchHabit();
  }, []);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
};
export default page;
