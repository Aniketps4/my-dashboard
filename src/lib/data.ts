export const metrics = {
  revenue: 125000,
  users: 4500,
  conversions: 320,
  growth: 15.7,
};

export const chartData = {
  line: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users",
        data: [100, 200, 300, 400, 500],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  },
  bar: {
    labels: ["Campaign A", "Campaign B", "Campaign C"],
    datasets: [
      {
        label: "Performance",
        data: [120, 190, 300],
        backgroundColor: "#3b82f6",
      },
    ],
  },
  pie: {
    labels: ["Social", "Search", "Direct"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
      },
    ],
  },
};

export const tableData = [
  { id: 1, name: "Campaign A", clicks: 1000, impressions: 5000 },
  { id: 2, name: "Campaign B", clicks: 1500, impressions: 7000 },
  { id: 3, name: "Campaign C", clicks: 800, impressions: 4000 },
  { id: 4, name: "Campaign D", clicks: 1200, impressions: 6000 },
  { id: 5, name: "Campaign E", clicks: 900, impressions: 4500 },
  { id: 6, name: "Campaign F", clicks: 1100, impressions: 5500 },
];