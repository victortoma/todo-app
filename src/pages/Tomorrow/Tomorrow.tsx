import "./Tomorrow.scss";

export default function Tomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="tomorrow-container">
      <div className="tomorrow-header">
        <h1>Tomorrow's Tasks</h1>
        <p className="tomorrow-date">
          {tomorrow.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="tomorrow-content">
        <p>No tasks for tomorrow yet. Plan ahead and add one!</p>
      </div>
    </div>
  );
}
