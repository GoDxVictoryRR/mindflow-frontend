export async function fetchMindMap(text) {
  const response = await fetch("https://mindflow-backend-xh0z.onrender.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return await response.json();
}
