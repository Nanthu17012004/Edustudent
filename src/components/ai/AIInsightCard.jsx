import React from "react";
import { Sparkles } from "lucide-react";

export default function AIInsightCard({ title = "AI Insight", children }) {
  return <div className="ai-insight"><div className="ai-icon"><Sparkles size={19} /></div><div><strong>{title}</strong><p>{children}</p></div></div>;
}