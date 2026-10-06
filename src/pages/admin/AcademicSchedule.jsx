import React, { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import EventModal from "../../components/calendar/EventModal";

export default function AcademicSchedule() {
  const [event,setEvent]=useState(null);
  return <div><div className="page-heading"><span className="eyebrow">Planning</span><h1>Academic Schedule</h1><p>Exams, meetings and important school events.</p></div><Calendar onEventClick={setEvent}/><EventModal event={event} onClose={()=>setEvent(null)}/></div>;
}