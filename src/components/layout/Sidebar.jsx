import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen, CalendarDays, Settings, CircleHelp, GraduationCap, CreditCard, Inbox, UserCircle } from "lucide-react";
import Logo from "../common/Logo";
import { ADMIN_NAV, PARENT_NAV } from "../../utils/constants";

const icons = { LayoutDashboard, Users, BookOpen, CalendarDays, Settings, CircleHelp, GraduationCap, CreditCard, Inbox, UserCircle };

export default function Sidebar({ role = "admin", onNavigate }) {
  const nav = role === "admin" ? ADMIN_NAV : PARENT_NAV;
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo"><Logo /></div>
      <nav className="sidebar-nav">
        <div className="nav-label">{role === "admin" ? "ADMIN PORTAL" : "PARENT PORTAL"}</div>
        {nav.map((item) => {
          const Icon = icons[item.icon];
          const active = location.pathname === item.path;
          return (
            <NavLink key={item.path} to={item.path} onClick={onNavigate} className={active ? "nav-item active" : "nav-item"}>
              <Icon size={19} /><span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-help"><div>Need help?</div><small>Our support team is here.</small></div>
      </div>
    </aside>
  );
}