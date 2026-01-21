import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Today from "./pages/Today/Today";
import Tomorrow from "./pages/Tomorrow/Tomorrow";
import Week from "./pages/Week/Week";
import Month from "./pages/Month/Month";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/today", element: <Today /> },
      { path: "/tomorrow", element: <Tomorrow /> },
      { path: "/week", element: <Week /> },
      { path: "/month", element: <Month /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
