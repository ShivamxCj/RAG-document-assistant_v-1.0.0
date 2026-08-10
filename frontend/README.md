# RAG Document Assistant v1.0.0

A Retrieval-Augmented Generation (RAG) based document assistant that allows users to upload PDF documents and ask questions. The system retrieves relevant information from the document and generates grounded answers using a local LLM with source page citations.

## Features

- PDF document processing
- Text extraction and chunking
- Semantic search using embeddings
- FAISS vector similarity retrieval
- Local LLM answer generation using Ollama
- Page-level source citations
- Session-based temporary document processing

---

## Tech Stack

- Python
- PyMuPDF
- LangChain Text Splitters
- Hugging Face Sentence Transformers
- FAISS
- Ollama (Phi-3.8B)

---

## RAG Pipeline
PDF
->
Text Extraction
->
Chunking
->
Embedding Generation
->
FAISS Vector Search
->
Relevant Context
->
LLM Response + Citations


---

## Installation

Clone the repository:

```bash
git clone <repository-url>

python -m venv venv

venv\Scripts\activate

Ollama Setup

Install Ollama from:

https://ollama.com

Download the LLM model:

ollama pull phi3:3.8b
Run Application

Navigate to the source folder:

cd backend/src

Run:

python main.py

Provide the PDF path when prompted:

Enter PDF path: example- '../documents/sample.pdf'

Ask questions related to the document.

Exit: tpye 'exit'

Project Structure
RAG-Document-Assistant

├── backend
│   └── src
│       ├── main.py
│       ├── document_loader.py
│       ├── text_splitter.py
│       ├── embeddings.py
│       ├── vector_store.py
│       ├── retriever.py
│       ├── llm.py
│       └── session_manager.py
│
├── documents
├── requirements.txt
└── README.md
Version

```
## Current Version: v1.0.0

Future Improvements:
-Conversation memory
-FastAPI backend
-React frontend
-Better retrieval with reranking
-Persistent vector storage
