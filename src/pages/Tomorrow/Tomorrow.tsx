import PeriodPage from "../PeriodPage";

export default function Tomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowDate = tomorrow.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PeriodPage
      period="tomorrow"
      title="Tomorrow's Tasks"
      dateText={tomorrowDate}
    />
  );
}
