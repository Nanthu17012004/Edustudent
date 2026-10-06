import React from "react";
export default function CourseCard({ course }) {
  return <div className="course-card"><div className={`course-color ${course.color}`} /><h3>{course.name}</h3><p>{course.code}</p><strong>{course.teacher}</strong><div className="course-meta"><span>{course.students} students</span><span>{course.progress}% complete</span></div><div className="progress"><span style={{ width: `${course.progress}%` }} /></div></div>;
}