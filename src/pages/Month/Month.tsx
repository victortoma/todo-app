import "./Month.scss";

export default function Month() {
  const now = new Date();
  const monthName = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="month-container">
      <div className="month-header">
        <h1>This Month's Tasks</h1>
        <p className="month-date">{monthName}</p>
      </div>
      <div className="month-content">
        <p>No tasks scheduled for this month yet. Start planning!</p>
      </div>
    </div>
  );
}
