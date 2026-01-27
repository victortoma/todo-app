import PeriodPage from "../PeriodPage";

export default function Today() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <PeriodPage period="today" title="Today's Tasks" dateText={today} />;
}
