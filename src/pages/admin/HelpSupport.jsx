import React from "react";
import AIChat from "../../components/ai/AIChat";
export default function HelpSupport() {
  return <div><div className="page-heading"><span className="eyebrow">Support</span><h1>Help & Support</h1><p>Find answers or ask EduFlow AI.</p></div><div className="support-grid"><div className="faq-card"><h3>Frequently asked questions</h3>{["How do I add a student?","How can I update a course?","Where can I see payments?","How does parent access work?"].map(q=><details key={q}><summary>{q}</summary><p>Use the corresponding section from the sidebar. EduFlow keeps each workflow simple and centralized.</p></details>)}</div><AIChat/></div></div>;
}