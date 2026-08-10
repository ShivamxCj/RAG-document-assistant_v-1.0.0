import faiss


def create_vector_store(embeddings, index_path="faiss_index.bin"):

    dimension = embeddings.shape[1]

    index = faiss.IndexFlatL2(dimension)

    index.add(embeddings)

    faiss.write_index(index, index_path)

    print("Vectors stored:", index.ntotal)

    return index