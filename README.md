# MyPortfolio — Flask + HTML/CSS/JS version
Live at - https://my-protfolio-delta-three.vercel.app/

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


## Notes ////

- The contact form was already commented out in the original React code
  (only the contact info cards were live), so this version keeps that
  same behavior.
- The `Services` section was also commented out/unused in the original
  `App.jsx`, so it isn't included here either — matching the original
  site exactly.
