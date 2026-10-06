import React, { useState } from "react";
import Button from "../../components/common/Button";
export default function Settings() {
  const [saved,setSaved]=useState(false);
  return <div><div className="page-heading"><span className="eyebrow">Configuration</span><h1>Settings</h1><p>Manage your EduFlow preferences.</p></div><div className="settings-card"><h3>School information</h3><div className="form-grid"><label>School name<input defaultValue="EduFlow International School"/></label><label>Admin email<input defaultValue="admin@eduflow.edu"/></label><label>Academic year<select defaultValue="2026-27"><option>2026-27</option><option>2027-28</option></select></label></div><div className="form-actions"><Button onClick={()=>setSaved(true)}>Save changes</Button>{saved&&<span className="saved-text">Changes saved.</span>}</div></div></div>;
}