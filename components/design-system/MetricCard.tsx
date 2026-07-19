import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { Badge } from "./Badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  trend,
  trendValue,
  icon,
}: MetricCardProps) {
  return (
    <Card className="bg-[var(--card)] hover:bg-white/[0.04] transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400 font-sans">
          {title}
        </CardTitle>
        {icon && <div className="text-zinc-500">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-heading font-bold text-white mb-2">
          {value}
        </div>
        {trend && (
          <Badge
            variant={
              trend === "up" ? "success" : trend === "down" ? "danger" : "glass"
            }
            className="rounded-md px-2 py-0.5 text-[10px]"
          >
            {trend === "up" && <TrendingUp className="w-3 h-3 mr-1" />}
            {trend === "down" && <TrendingDown className="w-3 h-3 mr-1" />}
            {trend === "neutral" && <Minus className="w-3 h-3 mr-1" />}
            {trendValue}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
