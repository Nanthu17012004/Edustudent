import React from "react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export default function Notification({ type = "success", children }) {
  const Icon = type === "success" ? CheckCircle2 : type === "error" ? AlertCircle : Info;
  return <div className={`notification notification-${type}`}><Icon size={18} />{children}</div>;
}