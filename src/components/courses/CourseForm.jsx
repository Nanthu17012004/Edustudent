import React, { useState } from "react";
import Button from "../common/Button";

export default function CourseForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", code: "", teacher: "", students: "" });
  return <form className="form-card" onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}><div className="form-grid"><label>Course name<input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} /></label><label>Course code<input required value={form.code} onChange={e => setForm({...form,code:e.target.value})} /></label><label>Teacher<input required value={form.teacher} onChange={e => setForm({...form,teacher:e.target.value})} /></label><label>Students<input type="number" value={form.students} onChange={e => setForm({...form,students:e.target.value})} /></label></div><div className="form-actions"><Button type="submit">Create Course</Button></div></form>;
}