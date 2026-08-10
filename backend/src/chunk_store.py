import json


def save_chunks(chunks, file_path="chunks.json"):

    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(chunks, file, indent=4)

    print("Chunks saved:", len(chunks))