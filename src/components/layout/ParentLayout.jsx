import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileNav from "./MobileNav";

export default function ParentLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="app-layout"><Sidebar role="parent" /><div className="main-area"><Topbar role="parent" onMenu={() => setMobileOpen(true)} /><main className="page-content"><Outlet /></main></div><MobileNav role="parent" open={mobileOpen} onClose={() => setMobileOpen(false)} /></div>;
}