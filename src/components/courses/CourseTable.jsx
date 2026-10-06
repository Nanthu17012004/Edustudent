import React from "react";
import { courses } from "../../data/courses";

export default function CourseTable({ items = courses }) {
  return <div className="table-card"><table><thead><tr><th>Course</th><th>Teacher</th><th>Students</th><th>Progress</th><th>Status</th></tr></thead><tbody>{items.map((c) => <tr key={c.id}><td><strong>{c.name}</strong><small className="table-sub">{c.code}</small></td><td>{c.teacher}</td><td>{c.students}</td><td><div className="progress-inline"><span style={{ width: `${c.progress}%` }} /><b>{c.progress}%</b></div></td><td><span className="status-pill active">Running</span></td></tr>)}</tbody></table></div>;
}