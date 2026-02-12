import { useContext } from "react";
import { TaskContext } from "../context/TaskContextType";

export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within TaskProvider");
  }
  return context;
}
