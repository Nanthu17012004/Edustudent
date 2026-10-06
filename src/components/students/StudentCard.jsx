import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../common/Avatar";

export default function StudentCard({ student }) {
  const navigate = useNavigate();
  return <button className="student-card" onClick={() => navigate(`/admin/students/${student.id}`)}><Avatar name={student.name} size="lg" /><div><h3>{student.name}</h3><p>Grade {student.grade}-{student.section}</p><span>{student.attendance}% attendance · {student.score}% score</span></div></button>;
}