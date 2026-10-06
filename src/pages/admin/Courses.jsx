import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Button from "../../components/common/Button";
import CourseTable from "../../components/courses/CourseTable";
import CourseCard from "../../components/courses/CourseCard";
import { courses } from "../../data/courses";

export default function Courses() {
  return <div><div className="page-heading heading-row"><div><span className="eyebrow">Curriculum</span><h1>Courses</h1><p>Manage subjects, teachers and course progress.</p></div><Link to="/admin/courses/create"><Button icon={<Plus size={17}/>}>Create Course</Button></Link></div><div className="course-cards">{courses.map(c=><CourseCard key={c.id} course={c}/>)}</div><CourseTable/></div>;
}