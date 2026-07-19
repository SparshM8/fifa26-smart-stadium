"use client";
import * as React from "react";
import { MetricCard } from "@/components/design-system/MetricCard";
import { Users, Wifi, AlertTriangle, UserCheck } from "lucide-react";
import { OPS_KPIS } from "@/lib/mock-data";
import { formatAttendance } from "@/lib/utils/format";

/**
 * OpsKPIs — top-level mission-critical KPI cards for the Operations Dashboard.
 * Attendance ticks live using a memoized interval callback.
 */
export function OpsKPIs() {
  const baseAttendance =
    typeof OPS_KPIS[0].value === "number" ? OPS_KPIS[0].value : 82450;
  const [attendance, setAttendance] = React.useState(baseAttendance);

  // Memoize callback to prevent stale closure re-creation on every render
  const tick = React.useCallback(() => {
    setAttendance((prev) =>
      Math.min(82500, prev + Math.floor(Math.random() * 5)),
    );
  }, []);

  React.useEffect(() => {
    const interval = setInterval(tick, 3000);
    return () => clearInterval(interval);
  }, [tick]);

  return (
    <section aria-label="Key performance indicators">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Live Attendance"
          value={formatAttendance(attendance)}
          trend="up"
          trendValue="+12/min"
          icon={<Users className="w-5 h-5" aria-hidden="true" />}
        />
        <MetricCard
          title="Network Load"
          value="64.2 TB"
          trend="up"
          trendValue="Spiking"
          icon={
            <Wifi
              className="w-5 h-5 text-[var(--accent-cyan)]"
              aria-hidden="true"
            />
          }
        />
        <MetricCard
          title="Critical Incidents"
          value="2"
          trend="down"
          trendValue="Resolved 1"
          icon={
            <AlertTriangle
              className="w-5 h-5 text-[var(--danger)]"
              aria-hidden="true"
            />
          }
        />
        <MetricCard
          title="Active Volunteers"
          value="124/150"
          trend="neutral"
          trendValue="Deployed"
          icon={
            <UserCheck
              className="w-5 h-5 text-[var(--success)]"
              aria-hidden="true"
            />
          }
        />
      </div>
    </section>
  );
}
