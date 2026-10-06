import React, { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { askAI } from "../../services/aiService";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "ai", text: "Hello! Ask me about attendance, performance, payments, or school events." }]);
  const send = async (e) => { e.preventDefault(); if (!input.trim()) return; const q=input.trim(); setInput(""); setMessages(m=>[...m,{role:"user",text:q}]); const answer=await askAI(q); setMessages(m=>[...m,{role:"ai",text:answer}]); };
  return <div className="ai-chat"><div className="ai-chat-head"><Sparkles size={19}/> EduFlow AI</div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={`chat-message ${m.role}`}>{m.text}</div>)}</div><form onSubmit={send}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask EduFlow AI..." /><button><Send size={17}/></button></form></div>;
}