export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export const initials = (name = "") =>
  name.split(" ").filter(Boolean).slice(0, 2).map((x) => x[0]).join("").toUpperCase();

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

export const getStatusClass = (status = "") => status.toLowerCase().replace(/\s+/g, "-");