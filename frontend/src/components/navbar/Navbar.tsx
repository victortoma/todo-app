import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "today", label: "Today", path: "/today" },
    { id: "tomorrow", label: "Tomorrow", path: "/tomorrow" },
    { id: "week", label: "Week", path: "/week" },
    { id: "month", label: "Month", path: "/month" },
  ];

  const activeTab =
    tabs.find((tab) => tab.path === location.pathname)?.id || "home";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Todo App</h1>
        <ul className="navbar-tabs">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => navigate(tab.path)}>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
