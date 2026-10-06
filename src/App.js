import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import AdminLayout from "./components/layout/AdminLayout";
import ParentLayout from "./components/layout/ParentLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import StudentDetails from "./pages/admin/StudentDetails";
import Courses from "./pages/admin/Courses";
import AcademicSchedule from "./pages/admin/AcademicSchedule";
import Settings from "./pages/admin/Settings";
import HelpSupport from "./pages/admin/HelpSupport";
import CreateStudent from "./pages/admin/CreateStudent";
import CreateCourse from "./pages/admin/CreateCourse";

import ParentDashboard from "./pages/parent/ParentDashboard";
import Academics from "./pages/parent/Academics";
import Payments from "./pages/parent/Payments";
import CalendarPage from "./pages/parent/CalendarPage";
import Inbox from "./pages/parent/Inbox";
import Profile from "./pages/parent/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="students/:id" element={<StudentDetails />} />
        <Route path="students/create" element={<CreateStudent />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/create" element={<CreateCourse />} />
        <Route path="schedule" element={<AcademicSchedule />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<HelpSupport />} />
      </Route>

      <Route path="/parent" element={<ParentLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ParentDashboard />} />
        <Route path="academics" element={<Academics />} />
        <Route path="payments" element={<Payments />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}