import React, { useState } from "react";
import Button from "../common/Button";

export default function StudentForm({ initial = {}, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", section: "", guardian: "", ...initial });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return <form className="form-card" onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}><div className="form-grid"><label>Full name<input name="name" value={form.name} onChange={update} required /></label><label>Email<input type="email" name="email" value={form.email} onChange={update} required /></label><label>Phone<input name="phone" value={form.phone} onChange={update} /></label><label>Grade<input name="grade" value={form.grade} onChange={update} /></label><label>Section<input name="section" value={form.section} onChange={update} /></label><label>Guardian<input name="guardian" value={form.guardian} onChange={update} /></label></div><div className="form-actions"><Button type="submit">Save Student</Button></div></form>;
}