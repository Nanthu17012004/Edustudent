import React from "react";
import { CheckCircle2, UserPlus, BookOpen, CreditCard } from "lucide-react";

const activities = [
  ["New student enrolled", "Ananya Rao joined Grade 12-B", "10 min ago", UserPlus],
  ["Course updated", "Computer Science curriculum updated", "1 hr ago", BookOpen],
  ["Payment received", "Tuition fee payment completed", "3 hrs ago", CreditCard],
  ["Attendance marked", "Grade 10-A attendance completed", "5 hrs ago", CheckCircle2]
];

export default function RecentActivity() {
  return <div className="panel"><div className="panel-heading"><h3>Recent Activity</h3><button className="text-btn">View all</button></div><div className="activity-list">{activities.map(([title, desc, time, Icon]) => <div className="activity" key={title}><div className="activity-icon"><Icon size={17} /></div><div><strong>{title}</strong><p>{desc}</p></div><time>{time}</time></div>)}</div></div>;
}