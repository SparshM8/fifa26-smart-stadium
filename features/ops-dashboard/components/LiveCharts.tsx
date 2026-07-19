"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

/** Shape of a single chart data point */
interface ChartDataPoint {
  time: string;
  ingress: number;
  egress: number;
}

/** Generates the initial 20 data points for the ingress chart */
function generateInitialData(): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];
  let base = 500;
  for (let i = 0; i < 20; i++) {
    base = base + Math.floor(Math.random() * 200) - 50;
    data.push({
      time: `18:${i < 10 ? "0" + i : i}`,
      ingress: Math.max(0, base),
      egress: Math.max(0, Math.floor(base * 0.1)),
    });
  }
  return data;
}

/**
 * LiveCharts — real-time ingress/egress chart for the Ops Dashboard.
 * Updates every 3 seconds with memoized tick callback to avoid stale closures.
 */
export function LiveCharts() {
  const [data, setData] = React.useState<ChartDataPoint[]>(generateInitialData)

  const tick = React.useCallback(() => {
    setData((currentData) => {
      const newData = currentData.slice(1);
      const last = newData[newData.length - 1];
      const [hourStr, minStr] = last.time.split(":");
      let nextMin = parseInt(minStr, 10) + 1;
      let nextHour = parseInt(hourStr, 10);
      if (nextMin >= 60) {
        nextMin = 0;
        nextHour++;
      }
      const timeStr = `${nextHour}:${nextMin < 10 ? "0" + nextMin : nextMin}`;
      const ingress = Math.max(0, last.ingress + Math.floor(Math.random() * 200) - 50);
      return [...newData, { time: timeStr, ingress, egress: Math.floor(ingress * 0.1) }];
    });
  }, []);

  React.useEffect(() => {
    const interval = setInterval(tick, 3000);
    return () => clearInterval(interval);
  }, [tick]);

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle className="text-lg">Real-time Ingress Rate</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIngress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              stroke="#52525b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#52525b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(5, 8, 22, 0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="ingress"
              stroke="var(--primary)"
              fillOpacity={1}
              fill="url(#colorIngress)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
