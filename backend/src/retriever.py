from sentence_transformers import SentenceTransformer


model = SentenceTransformer("all-MiniLM-L6-v2")


def retrieve(query, index, chunks, k=2, threshold=1.8):

    query_vector = model.encode([query])

    distances, indices = index.search(query_vector, k)

    results = []

    for distance, idx in zip(distances[0], indices[0]):

        if distance < threshold:
            results.append(chunks[idx])

    if len(results) == 0:
        return ["No relevant information found in the document."]

    return results