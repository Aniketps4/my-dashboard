
// src/components/ChartComponent.tsx
"use client";

import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

ChartJS.register(...registerables);

// Define a type for Chart.js data
interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string | string[];
    fill?: boolean;
  }[];
}

interface ChartProps {
  type: "line" | "bar" | "pie";
  data: ChartData;
  className?: string;
}

export function ChartComponent({ type, data, className }: ChartProps) {
  const Component = type === "line" ? Line : type === "bar" ? Bar : Pie;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn("dark:bg-gray-800", className)}>
        <CardHeader>
          <CardTitle>{type.charAt(0).toUpperCase() + type.slice(1)} Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <Component data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
