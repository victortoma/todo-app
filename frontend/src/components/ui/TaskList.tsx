import { useTask } from "../../hooks/useTask";
import type { Task } from "../../context/TaskContextType";
import "./TaskList.scss";

interface TaskListProps {
  period: string;
}

export default function TaskList({ period }: TaskListProps) {
  const { getTasksByPeriod, toggleTask, deleteTask } = useTask();
  const tasks = getTasksByPeriod(period);

  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task: Task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="task-checkbox"
          />
          <span className={`task-title ${task.completed ? "completed" : ""}`}>
            {task.title}
          </span>
          <button
            className="task-delete"
            onClick={() => deleteTask(task.id)}
            title="Delete task">
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
