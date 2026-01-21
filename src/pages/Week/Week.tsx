import "./Week.scss";

export default function Week() {
  const startOfWeek = new Date();
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - (day === 0 ? 6 : day - 1));

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  return (
    <div className="week-container">
      <div className="week-header">
        <h1>This Week's Tasks</h1>
        <p className="week-date">
          {startOfWeek.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}{" "}
          -{" "}
          {endOfWeek.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="week-content">
        <p>No tasks scheduled for this week yet. Get organized and add some!</p>
      </div>
    </div>
  );
}
