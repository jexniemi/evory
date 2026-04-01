"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CHART_COLORS = [
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ef4444",
];

interface SimpleChartProps {
  data: Record<string, number>[];
  xKey: string;
  yKeys: string[];
  height?: number;
}

function formatCompact(val: number): string {
  if (Math.abs(val) >= 1_000_000)
    return `${(val / 1_000_000).toFixed(1)}M`;
  if (Math.abs(val) >= 10_000) return `${(val / 1_000).toFixed(0)}K`;
  if (Math.abs(val) >= 1_000) return `${(val / 1_000).toFixed(1)}K`;
  if (Number.isInteger(val)) return val.toString();
  return val.toFixed(1);
}

export default function SimpleChart({
  data,
  xKey,
  yKeys,
  height = 280,
}: SimpleChartProps) {
  if (!data.length || !yKeys.length) return null;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey={xKey}
          tickFormatter={formatCompact}
          tick={{ fontSize: 11, fill: "currentColor" }}
          stroke="currentColor"
          opacity={0.4}
        />
        <YAxis
          tickFormatter={formatCompact}
          tick={{ fontSize: 11, fill: "currentColor" }}
          stroke="currentColor"
          opacity={0.4}
          width={55}
        />
        <Tooltip
          formatter={(value: any, name: any) => [
            formatCompact(Number(value)),
            String(name),
          ]}
          labelFormatter={(label: any) =>
            `${xKey}: ${formatCompact(Number(label))}`
          }
          contentStyle={{
            borderRadius: "0.5rem",
            border: "1px solid rgba(128,128,128,0.2)",
            fontSize: "0.8rem",
            backgroundColor: "rgba(255,255,255,0.95)",
          }}
        />
        {yKeys.length > 1 && (
          <Legend wrapperStyle={{ fontSize: "0.75rem", paddingTop: 8 }} />
        )}
        {yKeys.map((key, idx) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key}
            stroke={CHART_COLORS[idx % CHART_COLORS.length]}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
