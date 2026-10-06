import React from "react";

export default function StatCard({ title, value, change, icon, tone = "blue" }) {
  return <div className="stat-card"><div className="stat-top"><div><p>{title}</p><h2>{value}</h2></div><div className={`stat-icon ${tone}`}>{icon}</div></div><div className={change?.startsWith("-") ? "stat-change negative" : "stat-change"}>{change}</div></div>;
}