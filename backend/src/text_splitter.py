from langchain_text_splitters import RecursiveCharacterTextSplitter
from document_loader import load_pdf


def split_text(file_path):

    pages = load_pdf(file_path)

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100
    )

    chunks = []

    for page in pages:

        page_chunks = splitter.split_text(page["text"])

        for chunk in page_chunks:

            chunks.append(
                {
                    "text": chunk,
                    "page": page["page"]
                }
            )

    return chunks
#------------------------testing--------------------
# chunks = split_text("../documents/sample.pdf")

# print(chunks[0])