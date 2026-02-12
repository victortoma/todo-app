import PeriodPage from "../PeriodPage";

export default function Month() {
  const now = new Date();
  const monthName = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <PeriodPage
      period="month"
      title="This Month's Tasks"
      dateText={monthName}
    />
  );
}
