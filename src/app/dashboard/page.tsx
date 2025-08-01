// src/app/dashboard/page.tsx
// src/app/dashboard/page.tsx
import { MetricCard } from "@/components/MetricCard";
import { ChartComponent } from "@/components/ChartComponent";
import { DataTable } from "@/components/DataTable";
import { ThemeToggle } from "@/components/ThemeToggle";
import { metrics, chartData, tableData } from "@/lib/data";

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto bg-background min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AdMyBRAND Insights</h1>
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Revenue" value={`$${metrics.revenue.toLocaleString()}`} />
        <MetricCard title="Users" value={metrics.users.toLocaleString()} />
        <MetricCard title="Conversions" value={metrics.conversions.toLocaleString()} />
        <MetricCard title="Growth" value={`${metrics.growth}%`} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <ChartComponent type="line" data={chartData.line} />
        <ChartComponent type="bar" data={chartData.bar} />
      </div>
      <ChartComponent type="pie" data={chartData.pie} className="max-w-md mx-auto mb-8" />
      <DataTable data={tableData} />
    </div>
  );
}