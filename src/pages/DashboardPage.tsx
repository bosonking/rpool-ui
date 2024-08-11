import { DynamicCards } from "@/components/dashboard-page/behavior/DynamicCards";
import { StaticCards } from "@/components/dashboard-page/behavior/StaticCards";

export function DashboardPage() {
  return (
    <>
      <StaticCards />
      <DynamicCards />
    </>
  );
}
