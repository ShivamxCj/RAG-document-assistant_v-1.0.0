const API_URL = "http://20.39.195.152:8000";


export async function uploadPDF(file) {

  const formData = new FormData();

  formData.append("file", file);


  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });


  return await response.json();
}
export async function askQuestion(question, sessionId) {

  const response = await fetch(
    `${API_URL}/ask`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        session_id: sessionId,
      }),
    }
  );


  return await response.json();
}