import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </StrictMode>,
);
