import React from "react";
import { CalendarDays } from "lucide-react";
import { events } from "../../data/events";

export default function UpcomingEvents() {
  return <div className="panel"><div className="panel-heading"><h3>Upcoming Events</h3><CalendarDays size={18} /></div><div className="event-list">{events.slice(0, 3).map((event) => <div className="event-item" key={event.id}><div className="event-date"><strong>{new Date(event.date).getDate()}</strong><small>{new Date(event.date).toLocaleString("en-US", { month: "short" })}</small></div><div><strong>{event.title}</strong><p>{event.time} · {event.type}</p></div></div>)}</div></div>;
}