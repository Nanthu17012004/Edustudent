import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "May", score: 72 }, { month: "Jun", score: 76 }, { month: "Jul", score: 78 },
  { month: "Aug", score: 82 }, { month: "Sep", score: 86 }, { month: "Oct", score: 89 }
];

export default function PerformanceChart() {
  return <div className="chart-card"><div className="card-heading"><div><h3>Academic Performance</h3><p>Average score over the last 6 months</p></div><span className="chart-badge">+12.4%</span></div><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" /><YAxis domain={[50, 100]} /><Tooltip /><Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} /></LineChart></ResponsiveContainer></div></div>;
}