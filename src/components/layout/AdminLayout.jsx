import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileNav from "./MobileNav";

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="app-layout"><Sidebar role="admin" /><div className="main-area"><Topbar role="admin" onMenu={() => setMobileOpen(true)} /><main className="page-content"><Outlet /></main></div><MobileNav role="admin" open={mobileOpen} onClose={() => setMobileOpen(false)} /></div>;
}