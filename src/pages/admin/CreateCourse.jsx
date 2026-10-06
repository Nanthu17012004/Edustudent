import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourseForm from "../../components/courses/CourseForm";
export default function CreateCourse() {
  const navigate=useNavigate(); const [saved,setSaved]=useState(false);
  return <div><Link className="back-link" to="/admin/courses">← Back to courses</Link><div className="page-heading"><span className="eyebrow">Curriculum</span><h1>Create Course</h1><p>Add a new course to your curriculum.</p></div>{saved?<div className="success-card"><h2>Course created successfully</h2><button className="text-btn" onClick={()=>navigate("/admin/courses")}>Return to courses</button></div>:<CourseForm onSubmit={()=>setSaved(true)}/>}</div>;
}