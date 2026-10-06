import React from "react";
import Avatar from "../common/Avatar";

export default function StudentProfile({ student }) {
  return <div className="profile-card"><Avatar name={student.name} size="xl" /><h2>{student.name}</h2><p>Grade {student.grade}-{student.section}</p><div className="profile-details"><div><span>Email</span><strong>{student.email}</strong></div><div><span>Phone</span><strong>{student.phone}</strong></div><div><span>Guardian</span><strong>{student.guardian}</strong></div><div><span>Joined</span><strong>{student.joined}</strong></div></div></div>;
}