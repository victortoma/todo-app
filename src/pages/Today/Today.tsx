import "./Today.scss";

export default function Today() {
  return (
    <div className="today-container">
      <div className="today-header">
        <h1>Today's Tasks</h1>
        <p className="today-date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="today-content">
        <p>No tasks for today yet. Add one to get started!</p>
      </div>
    </div>
  );
}
