import React from "react";

export default function Button({ children, variant = "primary", size = "md", icon, type = "button", ...props }) {
  return (
    <button type={type} className={`btn btn-${variant} btn-${size}`} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}