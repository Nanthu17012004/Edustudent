import React from "react";
import { initials } from "../../utils/helpers";

export default function Avatar({ name = "User", src, size = "md" }) {
  return src
    ? <img className={`avatar avatar-${size}`} src={src} alt={name} />
    : <div className={`avatar avatar-${size}`}>{initials(name)}</div>;
}