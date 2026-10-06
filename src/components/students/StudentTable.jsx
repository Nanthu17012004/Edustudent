import React from "react";
import { Eye, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Avatar from "../common/Avatar";

export default function StudentTable({ students }) {
  const navigate = useNavigate();
  return <div className="table-card"><table><thead><tr><th>Student</th><th>Grade</th><th>Attendance</th><th>Score</th><th>Status</th><th /></tr></thead><tbody>{students.map((s) => <tr key={s.id}><td><div className="student-cell"><Avatar name={s.name} size="sm" /><div><strong>{s.name}</strong><small>{s.email}</small></div></div></td><td>{s.grade}-{s.section}</td><td><div className="progress-inline"><span style={{ width: `${s.attendance}%` }} /><b>{s.attendance}%</b></div></td><td><strong>{s.score}%</strong></td><td><span className={`status-pill ${s.status.toLowerCase()}`}>{s.status}</span></td><td><div className="table-actions"><button className="icon-btn" onClick={() => navigate(`/admin/students/${s.id}`)}><Eye size={17} /></button><button className="icon-btn"><Pencil size={16} /></button></div></td></tr>)}</tbody></table></div>;
}