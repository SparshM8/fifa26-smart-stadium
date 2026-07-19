"use client"
import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/design-system/Card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const generateData = () => {
  const data = []
  let base = 500
  for (let i = 0; i < 20; i++) {
    base = base + Math.floor(Math.random() * 200) - 50
    data.push({ time: `18:${i < 10 ? '0'+i : i}`, ingress: base, egress: Math.floor(base * 0.1) })
  }
  return data
}

export function LiveCharts() {
  const [data, setData] = React.useState(generateData())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData.slice(1)]
        const last = newData[newData.length - 1]
        let nextMinute = parseInt(last.time.split(':')[1]) + 1
        let nextHour = parseInt(last.time.split(':')[0])
        if (nextMinute >= 60) {
          nextMinute = 0
          nextHour++
        }
        const timeStr = `${nextHour}:${nextMinute < 10 ? '0'+nextMinute : nextMinute}`
        const ingress = last.ingress + Math.floor(Math.random() * 200) - 50
        newData.push({ time: timeStr, ingress, egress: Math.floor(ingress * 0.1) })
        return newData
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(5, 8, 22, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="ingress" stroke="var(--primary)" fillOpacity={1} fill="url(#colorIngress)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
