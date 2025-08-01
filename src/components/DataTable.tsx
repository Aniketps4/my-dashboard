
// src/components/DataTable.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DataTableProps {
  data: { id: number; name: string; clicks: number; impressions: number }[];
  className?: string;
}

export function DataTable({ data, className }: DataTableProps) {
  const [sortField, setSortField] = useState<keyof typeof data[0]>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const sortedData = [...data].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return a[sortField] > b[sortField] ? order : -order;
  });
  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSort = (field: keyof typeof data[0]) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("dark:bg-gray-800 p-4 rounded-lg", className)}
    >
      <div className="mb-4">
        <Input
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
              Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("clicks")} className="cursor-pointer">
              Clicks {sortField === "clicks" && (sortOrder === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead onClick={() => handleSort("impressions")} className="cursor-pointer">
              Impressions {sortField === "impressions" && (sortOrder === "asc" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.clicks}</TableCell>
              <TableCell>{item.impressions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={page * itemsPerPage >= filteredData.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
