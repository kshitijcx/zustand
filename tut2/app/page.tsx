import HabitForm from "@/components/HabitForm";
import HabitList from "@/components/HabitList";

const page = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
};
export default page;
