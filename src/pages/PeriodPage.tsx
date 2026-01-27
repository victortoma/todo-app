import AddTaskForm from "../components/form/AddTaskForm";
import TaskList from "../components/ui/TaskList";
import { useTask } from "../hooks/useTask";
import "./PeriodPage.scss";

interface PeriodPageProps {
  period: "today" | "tomorrow" | "week" | "month";
  title: string;
  dateText: string;
}

export default function PeriodPage({
  period,
  title,
  dateText,
}: PeriodPageProps) {
  const { addTask } = useTask();

  const handleAddTask = (taskTitle: string) => {
    addTask(taskTitle, period);
  };

  return (
    <div className="period-page">
      <div className="period-header">
        <h1>{title}</h1>
        <p className="period-date">{dateText}</p>
      </div>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList period={period} />
    </div>
  );
}
