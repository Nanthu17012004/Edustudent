import React from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark"><GraduationCap size={21} /></span>
      <span>Edu<span>Flow</span></span>
    </Link>
  );
}