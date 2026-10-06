import { students } from "../data/students";

export const studentService = {
  getAll: () => students,
  getById: (id) => students.find((student) => String(student.id) === String(id)),
  search: (query) => students.filter((s) =>
    `${s.name} ${s.email} ${s.grade} ${s.section}`.toLowerCase().includes(query.toLowerCase())
  )
};