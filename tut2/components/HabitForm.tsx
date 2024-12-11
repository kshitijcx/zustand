"use client";
import useHabbitStore from "@/store/store";
import React, { useState } from "react";

const HabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const { habits, addHabit } = useHabbitStore();

  console.log(habits);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };

  return (
    <form
      className="w-1/4 flex flex-col gap-3 text-black"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>
      <button type="submit" className="bg-slate-200">
        Add Habit
      </button>
    </form>
  );
};
export default HabitForm;
