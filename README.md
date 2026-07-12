# MyPortfolio — Flask + HTML/CSS/JS version

This is a full conversion of the original React (Vite) portfolio into a
plain **Flask + HTML + CSS + JavaScript** stack. The visual design,
layout, animations, and behavior are the same as the React version —
only the underlying technology changed.

## Project structure

```
flask_portfolio/
├── app.py                 # Flask app (single route, renders index.html)
├── requirements.txt
├── templates/
│   └── index.html         # Full single-page site (header, home, about,
│                           # skills, qualification, work, contact, footer)
└── static/
    ├── css/
    │   └── main.css       # All component CSS merged into one stylesheet
    ├── js/
    │   ├── projects.js    # Project/portfolio data (used by work.js logic)
    │   └── main.js         # All interactivity: nav menu, dark mode,
    │                        # text-decrypt name effect, typing animation,
    │                        # qualification tabs, work filters, scroll-up
    └── images/             # All images, icons, and the resume PDF
```

## How to run it

1. Install dependencies (Python 3.9+ recommended):

   ```bash
   cd flask_portfolio
   pip install -r requirements.txt
   ```

2. Start the development server:

   ```bash
   python app.py
   ```

3. Open your browser at:

   ```
   http://127.0.0.1:5000
   ```

## What was converted

| React (original)                          | Now                                   |
|--------------------------------------------|----------------------------------------|
| `Header.jsx` + `DarkMode.jsx`               | Static markup in `index.html` + logic in `main.js` |
| `Home.jsx`, `Data.jsx`, `Social.jsx`, `ScrollDown.jsx` | Static markup in `index.html` |
| `TextDecrypt.jsx` (`use-dencrypt-effect`)   | `decryptText()` in `main.js` |
| `react-type-animation`                      | `typeAnimation()` in `main.js` |
| `About.jsx`                                 | Static markup in `index.html` |
| `Skills.jsx`, `Frontend.jsx`, `Backend.jsx` | Static markup in `index.html` |
| `Qualification.jsx` (tab state)             | Tab logic in `main.js` |
| `Work.jsx` + `Projects.jsx` (filter state)  | `projects.js` (data) + render/filter logic in `main.js` |
| `Contact.jsx`                               | Static markup in `index.html` |
| `Footer.jsx`, `ScrollUp.jsx`                | Static markup + scroll logic in `main.js` |
| All component `.css` files                  | Merged into `static/css/main.css` |

Everything (fonts, icon libraries — Boxicons & Unicons — Google Fonts,
animations, dark mode toggle, mobile nav, scroll-triggered header/scroll-up
button, qualification tabs, and work filtering) behaves exactly as it did
in the React version.

## Notes

- The contact form was already commented out in the original React code
  (only the contact info cards were live), so this version keeps that
  same behavior.
- The `Services` section was also commented out/unused in the original
  `App.jsx`, so it isn't included here either — matching the original
  site exactly.
