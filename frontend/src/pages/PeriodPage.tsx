import TaskList from "../components/ui/TaskList";
import "./PeriodPage.scss";

interface PeriodPageProps {
  period: "today" | "tomorrow" | "week" | "month";
  title: string;
  dateText: string;
}

export default function PeriodPage({
  period,
  title,
  dateText,
}: PeriodPageProps) {
  return (
    <div className="period-page">
      <div className="period-header">
        <h1>{title}</h1>
        <p className="period-date">{dateText}</p>
      </div>
      <TaskList period={period} />
    </div>
  );
}
