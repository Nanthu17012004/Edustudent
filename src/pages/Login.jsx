import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import Logo from "../components/common/Logo";
import Button from "../components/common/Button";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const submit = (e) => { e.preventDefault(); navigate(role === "admin" ? "/admin/dashboard" : "/parent/dashboard"); };
  return <div className="auth-page"><div className="auth-brand"><Logo /><div className="auth-art"><div className="auth-orb">EDU</div><h2>One platform.<br/><span>Every student.</span></h2><p>Manage your school's everyday workflow with clarity.</p></div></div><div className="auth-panel"><div className="auth-form"><Link to="/" className="back-link">← Back to home</Link><h1>Welcome back</h1><p>Sign in to continue to EduFlow.</p><div className="role-switch"><button className={role==="admin"?"active":""} onClick={()=>setRole("admin")}>Admin</button><button className={role==="parent"?"active":""} onClick={()=>setRole("parent")}>Parent</button></div><form onSubmit={submit}><label>Email<div className="input-icon"><Mail size={17}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required /></div></label><label>Password<div className="input-icon"><LockKeyhole size={17}/><input type="password" placeholder="••••••••" required /></div></label><div className="login-options"><label className="check"><input type="checkbox"/> Remember me</label><button type="button" className="text-btn">Forgot password?</button></div><Button type="submit" size="lg">Sign in <ArrowRight size={17}/></Button></form><small className="demo-note">Demo: any valid email/password will open the selected portal.</small></div></div></div>;
}