import ollama


def generate_answer(context, question):

    prompt = f"""
You are a document assistant.

Use ONLY the information present in the context.

Do not use your own knowledge.
Do not add examples or explanations that are not present in the context.

Provide all relevant points from the context.
Do not summarize or remove important details.
If the answer is not present in the context, say:
"I could not find this information in the document.

Answer formatting rules:
- Provide a clear and complete answer.
- Use bullet points or numbered lists when explaining multiple concepts.
- Do not give only keywords unless the user explicitly asks for a list of names.
- Include short explanations for each point.
- Keep the answer concise but informative.
"

Context:
{context}

Question:
{question}

Answer:
"""

    response = ollama.chat(
        model="phi3:3.8b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]