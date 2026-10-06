export async function askAI(question) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const q = question.toLowerCase();
  if (q.includes("attendance")) return "Overall attendance is healthy. Consider contacting students below 80% attendance.";
  if (q.includes("performance") || q.includes("score")) return "The class average is trending upward. Mathematics and Computer Science show the strongest progress.";
  if (q.includes("fee") || q.includes("payment")) return "There is one pending activity fee. You can review payment details from the Payments page.";
  return "I can help summarize attendance, academic performance, upcoming events, and payment information.";
}