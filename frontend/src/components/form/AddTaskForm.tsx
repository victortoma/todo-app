import { useState } from "react";
import "./AddTaskForm.scss";

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
}
