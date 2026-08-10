import fitz


def load_pdf(file_path):

    pdf = fitz.open(file_path)

    pages = []

    for page_number, page in enumerate(pdf):

        text = page.get_text()

        pages.append(
            {
                "text": text,
                "page": page_number + 1
            }
        )

    pdf.close()

    return pages
