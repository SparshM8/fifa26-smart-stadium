"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/design-system/Card";
import { Badge } from "@/components/design-system/Badge";
import { motion } from "framer-motion";
import { Coffee, Droplets } from "lucide-react";
import { QUEUES } from "@/lib/mock-data";
import { formatWaitTime, getLoadColor } from "@/lib/utils/format";

/**
 * QueueStatus — displays real-time wait times for food and restroom queues.
 * Uses centralized mock data and accessible progress bar markup.
 */
export const QueueStatus = React.memo(function QueueStatus() {
  const foodQueue = QUEUES.find((q) => q.type === "food")!;
  const restroomQueue = QUEUES.find((q) => q.type === "restroom")!;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Real-time Queues</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Food Queue */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                {foodQueue.label}
              </span>
            </div>
            <Badge
              variant={foodQueue.status === "high" ? "warning" : "success"}
            >
              {formatWaitTime(foodQueue.waitMinutes)}
            </Badge>
          </div>
          <div
            role="progressbar"
            aria-valuenow={foodQueue.currentLoad}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Food queue load: ${foodQueue.currentLoad}%`}
            className="h-2 w-full bg-white/5 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${foodQueue.currentLoad}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: getLoadColor(foodQueue.currentLoad) }}
            />
          </div>
        </div>

        {/* Restroom Queue */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                {restroomQueue.label}
              </span>
            </div>
            <Badge
              variant={
                restroomQueue.status === "moderate" ? "warning" : "success"
              }
            >
              {formatWaitTime(restroomQueue.waitMinutes)}
            </Badge>
          </div>
          <div
            role="progressbar"
            aria-valuenow={restroomQueue.currentLoad}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Restroom queue load: ${restroomQueue.currentLoad}%`}
            className="h-2 w-full bg-white/5 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${restroomQueue.currentLoad}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                backgroundColor: getLoadColor(restroomQueue.currentLoad),
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
