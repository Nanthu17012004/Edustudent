import React from "react";
import Modal from "../common/Modal";

export default function EventModal({ event, onClose }) {
  return <Modal open={!!event} title={event?.title || "Event"} onClose={onClose}>{event && <div><p><b>Date:</b> {event.date}</p><p><b>Time:</b> {event.time}</p><p><b>Type:</b> {event.type}</p></div>}</Modal>;
}