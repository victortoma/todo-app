import { useState, type ReactNode } from "react";
import { TaskContext, type Task } from "./TaskContextType";

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, period: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      period: period as "today" | "tomorrow" | "week" | "month",
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getTasksByPeriod = (period: string) => {
    return tasks.filter((task) => task.period === period);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, getTasksByPeriod }}>
      {children}
    </TaskContext.Provider>
  );
}
