import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StudentProfile from "../../components/students/StudentProfile";
import { studentService } from "../../services/studentService";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import AttendanceChart from "../../components/dashboard/AttendanceChart";

export default function StudentDetails() {
  const { id } = useParams();
  const student = studentService.getById(id);
  if (!student) return <div className="empty-state"><h2>Student not found</h2></div>;
  return <div><Link className="back-link" to="/admin/students"><ArrowLeft size={16}/> Back to students</Link><div className="page-heading"><h1>{student.name}</h1><p>Student profile and academic overview.</p></div><div className="student-detail-grid"><StudentProfile student={student}/><div className="detail-side"><div className="mini-stats"><div><span>Score</span><b>{student.score}%</b></div><div><span>Attendance</span><b>{student.attendance}%</b></div><div><span>Status</span><b>{student.status}</b></div></div><AttendanceChart/></div></div><PerformanceChart/></div>;
}