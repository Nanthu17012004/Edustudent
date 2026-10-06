import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [{ name: "Present", value: 91 }, { name: "Absent", value: 9 }];

export default function AttendanceChart() {
  return <div className="chart-card attendance-card"><div className="card-heading"><div><h3>Attendance</h3><p>Current academic year</p></div></div><div className="attendance-content"><div className="donut"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data} innerRadius={55} outerRadius={78} dataKey="value" startAngle={90} endAngle={-270} stroke="none"><Cell fill="#2563eb" /><Cell fill="#e5e7eb" /></Pie><Tooltip /></PieChart></ResponsiveContainer><strong>91%</strong></div><div className="legend"><div><span className="dot present" />Present <b>91%</b></div><div><span className="dot absent" />Absent <b>9%</b></div></div></div></div>;
}