import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";
import StudentTable from "../../components/students/StudentTable";
import StudentCard from "../../components/students/StudentCard";
import { students } from "../../data/students";

export default function Students() {
  const [query,setQuery]=useState("");
  const filtered=useMemo(()=>students.filter(s=>`${s.name} ${s.email}`.toLowerCase().includes(query.toLowerCase())),[query]);
  return <div><div className="page-heading heading-row"><div><span className="eyebrow">Directory</span><h1>Students</h1><p>Manage student records and performance.</p></div><Link to="/admin/students/create"><Button icon={<Plus size={17}/>}>Add Student</Button></Link></div><div className="toolbar"><SearchBar value={query} onChange={setQuery} placeholder="Search students..." /><select><option>All grades</option><option>Grade 10</option><option>Grade 12</option></select><select><option>All status</option><option>Active</option><option>Inactive</option></select></div><div className="desktop-only"><StudentTable students={filtered}/></div><div className="mobile-cards">{filtered.map(s=><StudentCard key={s.id} student={s}/>)}</div></div>;
}