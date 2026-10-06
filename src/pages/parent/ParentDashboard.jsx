import React from "react";
import { BookOpen, CalendarDays, CreditCard, TrendingUp } from "lucide-react";
import StatCard from "../../components/dashboard/StatCard";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import AIInsightCard from "../../components/ai/AIInsightCard";

export default function ParentDashboard() {
  return <div><div className="page-heading"><span className="eyebrow">Parent portal</span><h1>Welcome back 👋</h1><p>Here’s a quick overview of your child's progress.</p></div><div className="stats-grid"><StatCard title="Current Score" value="91%" change="+4.2% this term" icon={<TrendingUp/>}/><StatCard title="Attendance" value="96%" change="Excellent attendance" tone="green" icon={<CalendarDays/>}/><StatCard title="Courses" value="6" change="All active" tone="purple" icon={<BookOpen/>}/><StatCard title="Pending Fee" value="₹2,500" change="Due Oct 10" tone="orange" icon={<CreditCard/>}/></div><div className="dashboard-grid"><PerformanceChart/><AttendanceChart/></div><div className="dashboard-grid lower"><UpcomingEvents/><AIInsightCard title="Academic insight">Your child's recent performance is above the class average. Keep supporting regular revision before the upcoming Mathematics exam.</AIInsightCard></div></div>;
}