"use client";
import useHabbitStore from "@/store/store";

const HabitList = () => {
  const { habits,removeHabit } = useHabbitStore();

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="p-3 flex flex-col gap-3">
      {habits.map((item, index) => (
        <div key={index} className="border">
          <h1>{item.name}</h1>
          <h2>{item.frequency}</h2>
          <div className="flex gap-3">
            <button className="text-black bg-white">
              {item.completedDates.includes(today) ? "Done" : "Mark Done"}
            </button>
            <button className="text-black bg-white" onClick={()=>removeHabit(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HabitList;
