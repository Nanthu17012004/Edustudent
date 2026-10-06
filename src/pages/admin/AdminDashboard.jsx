import React from "react";
import { BookOpen, GraduationCap, UserCheck, Users } from "lucide-react";
import StatCard from "../../components/dashboard/StatCard";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import RecentActivity from "../../components/dashboard/RecentActivity";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import AIInsightCard from "../../components/ai/AIInsightCard";

export default function AdminDashboard() {
  return <div><div className="page-heading"><div><span className="eyebrow">Overview</span><h1>Good morning, Admin 👋</h1><p>Here’s what's happening across your school today.</p></div></div><div className="stats-grid"><StatCard title="Total Students" value="1,248" change="+8.2% from last month" icon={<Users/>}/><StatCard title="Active Courses" value="42" change="+3 new courses" tone="purple" icon={<BookOpen/>}/><StatCard title="Attendance" value="94.6%" change="+2.1% this month" tone="green" icon={<UserCheck/>}/><StatCard title="Avg. Performance" value="87.4%" change="+5.8% this term" tone="orange" icon={<GraduationCap/>}/></div><div className="dashboard-grid"><PerformanceChart/><AttendanceChart/></div><div className="dashboard-grid lower"><RecentActivity/><UpcomingEvents/></div><AIInsightCard title="EduFlow AI insight">Students with attendance below 80% are concentrated in Grade 10-A. Consider scheduling a parent follow-up this week.</AIInsightCard></div>;
}