# The Grimoire

A personal digital codex — part coding journal, part field manual, part knowledge archive.

**Live site:** [dollaralchemy.github.io/grimoire](https://dollaralchemy.github.io/grimoire)

---

## What This Is

The Grimoire is a GitHub Pages website built with plain HTML, CSS, and JavaScript. It is a living document — chapters are added and expanded over time.

It is organized into **Volumes**, each covering a different domain of knowledge:

- **Systemcraft** — HTML, CSS, JavaScript, and the architecture of the web
- **Codex Vitae** — Principles for a focused and deliberate life
- **Game Craft** — Game design theory and mechanics *(coming soon)*

---

## File Structure

```
/index.html              ← Main home page
/style.css               ← All visual styles (shared across every page)
/script.js               ← Shared JavaScript behaviors

/topics/
    /systemcraft/
        index.html           ← Systemcraft overview
        /html-basics/
            index.html       ← HTML Basics lesson
        /css-basics/
            index.html       ← CSS Basics lesson
    /codex-vitae/
        index.html           ← Codex Vitae overview
```

---

## Adding a New Page

1. Create a new folder inside `/topics/` (or inside an existing topic folder)
2. Add an `index.html` file to that folder
3. Copy the HTML skeleton from an existing page
4. Update the `<link rel="stylesheet">` path — count how many folders deep you are and use that many `../`
5. Add a link to the new page in the sidebar and/or chapter cards of the parent page

---

## Deploying to GitHub Pages

1. Push all files to the `main` branch
2. Go to repo Settings → Pages
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repositoryname/`

---

## Built With

- HTML5
- CSS3 (custom properties, flexbox, CSS grid)
- Vanilla JavaScript (no frameworks)
- Google Fonts: Cinzel + EB Garamond

---

*© 2025 Thomas Giardino. All rights reserved.*
