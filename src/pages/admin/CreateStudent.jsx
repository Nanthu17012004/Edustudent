import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentForm from "../../components/students/StudentForm";
export default function CreateStudent() {
  const navigate=useNavigate(); const [saved,setSaved]=useState(false);
  return <div><Link className="back-link" to="/admin/students">← Back to students</Link><div className="page-heading"><span className="eyebrow">Directory</span><h1>Add Student</h1><p>Create a new student record.</p></div>{saved?<div className="success-card"><h2>Student created successfully</h2><button className="text-btn" onClick={()=>navigate("/admin/students")}>Return to students</button></div>:<StudentForm onSubmit={()=>setSaved(true)}/>}</div>;
}