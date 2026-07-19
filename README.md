# Vessel Investor Material Consistency Checker

Weekend-hackathon prototype for reconciling active investor-facing materials before LP access.

## Practical stack

- Static browser app using HTML, CSS, and JavaScript modules.
- Browser File API for multi-document upload.
- Parser adapters by extension for PDF, PPTX, DOCX, and XLSX text extraction.
- Rule-based structured metric extraction for IRR, MOIC, DPI, TVPI, occupancy, NAV, fund size, dates, and valuation methodology.
- Deterministic conflict scoring plus rule-based AI-style explanations for the demo path.

This keeps the prototype portable and easy to run. A production version would move parsing to server workers with `pdf-parse`, `mammoth`, `xlsx`, and a PPTX text extractor, then add LLM structured extraction for messier source material.

## Run

Start a local static server from this folder:

```powershell
python -m http.server 4173
```

Open `http://localhost:4173`.

Use **Load sample set** to run the happy path.
