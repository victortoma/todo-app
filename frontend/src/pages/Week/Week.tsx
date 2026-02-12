import PeriodPage from "../PeriodPage";

export default function Week() {
  const startOfWeek = new Date();
  const day = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - (day === 0 ? 6 : day - 1));

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  const weekDate =
    startOfWeek.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }) +
    " - " +
    endOfWeek.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  return (
    <PeriodPage period="week" title="This Week's Tasks" dateText={weekDate} />
  );
}
