import React from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";
import Avatar from "../common/Avatar";

export default function Topbar({ role = "admin", onMenu }) {
  const name = role === "admin" ? "Admin User" : "Parent User";
  return (
    <header className="topbar">
      <button className="mobile-menu icon-btn" onClick={onMenu}><Menu size={22} /></button>
      <div className="topbar-spacer" />
      <button className="notification-btn icon-btn"><Bell size={20} /><span /></button>
      <div className="profile-mini"><Avatar name={name} size="sm" /><div><strong>{name}</strong><small>{role === "admin" ? "Administrator" : "Parent"}</small></div><ChevronDown size={16} /></div>
    </header>
  );
}