import React from "react";
export default function EmptyState({ title = "Nothing here yet", description = "No records found." }) {
  return <div className="empty-state"><div className="empty-icon">∅</div><h3>{title}</h3><p>{description}</p></div>;
}