export default async function handler(req, res) {
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.GROQ_API_KEY
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: req.body.messages
    })
  });
  const d = await r.json();
  res.status(200).json({
    reply: d.choices?.[0]?.message?.content || "Erreur : " + JSON.stringify(d)
  });
}
