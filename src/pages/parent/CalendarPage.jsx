import React, { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import EventModal from "../../components/calendar/EventModal";
export default function CalendarPage() { const [event,setEvent]=useState(null); return <div><div className="page-heading"><span className="eyebrow">Schedule</span><h1>Calendar</h1><p>Upcoming exams, meetings and school activities.</p></div><Calendar onEventClick={setEvent}/><EventModal event={event} onClose={()=>setEvent(null)}/></div>; }