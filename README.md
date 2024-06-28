# PDFLatex + preview.js

A template for using pdf-latex with an auto-refreshing preview - with support for multiple languages.

## Requirements

-   pdflatex (miktex)
-   pnpm (you can probably use another package manger but it's meant for pnpm)
-   git (surprisingly)

## Usage

Clone this repo:

```bash
git clone https://github.com/danielFHcode/latex-previewed.js.git .
```

Install the dependencies:

```bash
pnpm install
```

Run dev server:

```bash
pnpm run dev
```

Now you can now edit the src/index.tex file and see you're changes updated in the browser.

When you're done, you can run:

```bash
pnpm build
```

To get a final pdf in dist/index.pdf.
