import { createContext } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  period: "today" | "tomorrow" | "week" | "month";
  createdAt: Date;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, period: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  getTasksByPeriod: (period: string) => Task[];
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);
