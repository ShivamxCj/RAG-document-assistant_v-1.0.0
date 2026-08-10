from document_loader import load_pdf
from text_splitter import split_text
from embeddings import create_embeddings
from vector_store import create_vector_store
from retriever import retrieve
from llm import generate_answer
import json
from session_manager import create_session, delete_session, get_session

pdf_path = input("Enter PDF path: ")

# session created ----- session_manager.py
session_id = create_session()

session = get_session(session_id)
print("Session started...\nRAG Initialization in process...")
# Create chunks ---- text_splitter.py
chunks = split_text(pdf_path)

print("Chunks created:", len(chunks))


# Create embeddings ---- embeddings.py
vectors = create_embeddings(chunks)

print("Embeddings created")


# Create FAISS index ---- vector_store.py
index = create_vector_store(vectors)


#Store chunks and index in session
session["chunks"] = chunks
session["index"] = index

print("RAG Initialized....\nYou can now ask questions about the PDF....\n***Type 'exit' to quit.")


while True:

    question = input("\nAsk your question: ")

    if question.lower() == "exit":

        delete_session(session_id)

        print("Session ended.\nThank You for using the RAG Document Assistant.")

        break


    context_chunks = retrieve(
        question,
        session["index"],
        session["chunks"]
    )

    context = "\n\n".join(
    [
        chunk["text"]
        for chunk in context_chunks
    ]
)

    answer = generate_answer(
        context,
        question
    )

    sources = sorted(
    set(
        chunk["page"]
        for chunk in context_chunks
    )
)

    print("\nAnswer:")
    print(answer)

    print("\nSources:")
    for page in sources:
        print(f"- Page {page}")