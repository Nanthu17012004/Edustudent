import React from "react";
import Sidebar from "./Sidebar";

export default function MobileNav({ role, open, onClose }) {
  if (!open) return null;
  return <div className="mobile-nav-backdrop" onClick={onClose}><div className="mobile-sidebar" onClick={(e) => e.stopPropagation()}><Sidebar role={role} onNavigate={onClose} /></div></div>;
}