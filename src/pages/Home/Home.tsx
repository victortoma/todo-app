import { useNavigate } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Todo App</h1>
        <p className="home-message">
          Stay organized and manage your tasks efficiently. Get started by
          checking out what's on your agenda for today!
        </p>
        <button className="home-button" onClick={() => navigate("/today")}>
          Go to Today
        </button>
      </div>
    </div>
  );
}
