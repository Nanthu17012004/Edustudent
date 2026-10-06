import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../../data/events";

export default function Calendar({ onEventClick }) {
  const [date, setDate] = useState(new Date(2026, 9, 1));
  const days = useMemo(() => {
    const first = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const count = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return [...Array(first).fill(null), ...Array.from({length: count}, (_, i) => i + 1)];
  }, [date]);
  const eventFor = (day) => events.filter(e => new Date(e.date).getDate() === day && new Date(e.date).getMonth() === date.getMonth());
  return <div className="calendar-card"><div className="calendar-header"><button className="icon-btn" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth()-1, 1))}><ChevronLeft /></button><h3>{date.toLocaleString("en-US", {month:"long", year:"numeric"})}</h3><button className="icon-btn" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth()+1, 1))}><ChevronRight /></button></div><div className="calendar-week">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=><b key={d}>{d}</b>)}</div><div className="calendar-grid">{days.map((day,i)=><div className={`calendar-day ${day===new Date().getDate() && date.getMonth()===new Date().getMonth() ? "today":""}`} key={i}>{day && <><span>{day}</span>{eventFor(day).map(e=><button key={e.id} onClick={()=>onEventClick?.(e)}>{e.title}</button>)}</>}</div>)}</div></div>;
}