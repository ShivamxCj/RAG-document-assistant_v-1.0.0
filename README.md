# 🚀 ContextaAI - RAG Powered AI Knowledge Assistant

![ContextaAI Banner](./assets/banner.png)

ContextaAI is a **Retrieval-Augmented Generation (RAG) powered AI document assistant** that transforms static PDF documents into interactive knowledge sources.

Users can upload PDF documents and ask questions in natural language. The system retrieves relevant information from the document using semantic search and generates grounded responses using a Large Language Model (LLM).

The project demonstrates an end-to-end **Generative AI application pipeline**, including document processing, embeddings generation, vector search, LLM inference, API deployment, and interactive UI development.

---

# 🌟 Features

## 📄 Document Understanding

- Upload PDF documents
- Extract text from documents
- Automatically split documents into meaningful chunks
- Generate semantic embeddings
- Store embeddings for efficient retrieval


## 🔎 Intelligent Retrieval

- Uses vector similarity search
- Retrieves the most relevant document context
- Provides source page references with answers


## 🤖 AI Question Answering

- Context-aware responses using LLM
- Reduces hallucination by grounding answers on retrieved document information
- Supports natural language conversations with documents


## ⚡ Full Stack AI Application

- React-based interactive frontend
- FastAPI backend
- Local LLM inference
- Cloud deployment on Azure VM


---
             User
              |
              |
              v
    +----------------+
    | React Frontend |
    +----------------+
              |
              |
              v
    +----------------+
    | FastAPI Backend|
    +----------------+
              |
              |
    Upload PDF Document
              |
              v
    +----------------+
    | PDF Processing |
    |   PyMuPDF      |
    +----------------+
              |
              |
              v
    +----------------+
    | Text Chunking  |
    | LangChain      |
    +----------------+
              |
              |
              v
    +----------------+
    | Embeddings     |
    | Sentence       |
    | Transformers   |
    +----------------+
              |
              |
              v
    +----------------+
    | FAISS Vector   |
    | Database       |
    +----------------+
              |
              |
      User Question
              |
              v
    +----------------+
    | Similarity     |
    | Retrieval      |
    +----------------+
              |
              |
              v
    +----------------+
    | Ollama Phi-3   |
    | Local LLM      |
    +----------------+
              |
              |
              v

      Grounded Answer
  
---

# 🔄 RAG Pipeline Workflow

## 1. Document Upload

The user uploads a PDF document through the React interface.

The document is sent to the FastAPI backend.

---

## 2. PDF Text Extraction

Technology:

**PyMuPDF**

Purpose:

- Extract text content from PDF pages
- Preserve page information for source citation


---

## 3. Text Chunking

Technology:

**LangChain Recursive Character Text Splitter**

Purpose:

Large documents cannot directly be passed to LLMs.

The document is divided into smaller chunks:

PDF
|
|-- Chunk 1
|-- Chunk 2
|-- Chunk 3
|

Benefits:

- Better retrieval accuracy
- Reduced context size
- Improved response quality


---

## 4. Embedding Generation

Technology:

**Hugging Face Sentence Transformers**

Model:
all-MiniLM-L6-v2

Purpose:

Convert text chunks into numerical vector representations.

Example:
Text:

"What are compression algorithms?"

    |
    v

[0.231,0.542,-0.121....]

These vectors represent semantic meaning.

---

## 5. Vector Storage

Technology:

**FAISS (Facebook AI Similarity Search)**


Purpose:

Efficient similarity search over document embeddings.


When the user asks:
"What compression methods are used?"

The question is converted into an embedding and compared with stored vectors.

The most relevant chunks are retrieved.

---

## 6. LLM Response Generation

Technology:

**Ollama + Phi-3**

Purpose:

Generate final responses using:

User Question
+
Retrieved Context
+
LLM

Final Answer



The model does not answer from memory.

It generates responses based on retrieved document information.


---

# 🛠️ Technology Stack


| Technology | Purpose |
|-|-|
| React | Frontend user interface |
| Tailwind CSS | UI styling and responsive design |
| FastAPI | Backend REST API |
| Python | Backend development |
| PyMuPDF | PDF text extraction |
| LangChain | Document processing pipeline |
| Recursive Text Splitter | Document chunking |
| Hugging Face Sentence Transformers | Text embeddings |
| FAISS | Vector similarity search |
| Ollama | Local LLM inference |
| Phi-3 | Language generation model |
| Azure VM | Backend deployment |
| Git/GitHub | Version control |


---

# 📂 Project Structure

ContextaAI
│
├── backend
│
│ ├── api.py
│ ├── rag_pipeline.py
│ ├── embeddings.py
│ ├── retriever.py
│ ├── llm.py
│ ├── vector_store.py
│ ├── session_manager.py
│ └── requirements.txt
│
│
├── frontend
│
│ ├── src
│ │
│ ├── components
│ │ ├── Header.jsx
│ │ ├── FileUpload.jsx
│ │ ├── ChatBox.jsx
│ │ ├── Message.jsx
│ │ └── HowItWorks.jsx
│ │
│ └── package.json
│
│
└── README.md


# 🏗️ System Architecture

