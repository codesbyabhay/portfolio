# CodesByAbhay Portfolio

A responsive, static portfolio for Abhay Singh, designed for GitHub Pages at `https://codesbyabhay.github.io/portfolio/`.

## Technology
- HTML5
- One shared CSS file: `assets/css/style.css`
- Vanilla JavaScript (ES6+)
- JSON data files
- FormSubmit for the contact form

No framework, database, admin panel, platform API, tracking script, or social data synchronization is included.

## Folder structure

```text
CodesByAbhay-Portfolio/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── services.html
├── experience.html
├── education.html
├── social-links.html
├── activity.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── js/projects.js
│   ├── js/social-links.js
│   ├── images/project-placeholder.svg
│   └── documents/                 # Put your real PDF resume here
└── data/
    ├── projects.json
    ├── skills.json
    ├── social-links.json
    ├── experience.json
    └── education.json
```

## Before publishing
1. Add your real PDF as `assets/documents/Abhay-Singh-Resume.pdf`. Until that exact file exists, the download link is not functional.
2. Replace `YOUR_EMAIL@example.com` in `contact.html` with an intentionally selected receiving email address. The address is public in the website source.
3. FormSubmit may send a one-time activation email to the recipient. Complete activation and submit a real test after deployment. Delivery has not been tested by this project generator.
4. Confirm or remove candidate experience and education entries. Add accurate dates, responsibilities, and completion status.
5. Review the skills and services lists; remove anything you cannot demonstrate.
6. Replace the project placeholder with a real screenshot and add verified project descriptions, repository links, and demo links.
7. Review all social profile URLs before publishing. The 33 supplied URLs are stored once each in `data/social-links.json`.

## Update content
- Projects: edit `data/projects.json`. Use valid JSON and preserve the existing field names.
- Social profiles: edit `data/social-links.json`. Each supplied URL currently appears exactly once.
- Skills: edit `data/skills.json` for reference and update the visible cards in `skills.html` to match.
- Experience: edit `data/experience.json` and update `experience.html` to match.
- Education: edit `data/education.json` and update `education.html` to match.
- Page copy and navigation: edit the relevant HTML file.
- Design: edit only `assets/css/style.css`. Do not add another stylesheet.
- Resume: replace the PDF file at the exact path used by the download links.

## Run locally
The projects and social pages use `fetch()` to read local JSON, so opening the HTML files directly with `file://` may block these requests. From this directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. VS Code Live Server is also suitable.

## Deploy to GitHub Pages
1. Upload the **contents** of this folder to the root of the `portfolio` repository. The root should contain `index.html`, `assets/`, and `data/`.
2. Commit and push to the branch used for publishing.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select the intended branch (commonly `main`) and `/(root)`, then save. If the repository already uses a Pages workflow, retain and configure that workflow instead.
5. Wait for the Pages deployment to complete and visit `https://codesbyabhay.github.io/portfolio/`.
6. Test all pages, mobile navigation, theme persistence, JSON rendering, project search/filtering, image paths, resume download, and contact form.

## Contact form and privacy
The contact form sends submissions through FormSubmit. Replace the placeholder recipient in the form action with your selected email, complete any one-time activation, and test actual delivery. The form uses required fields, native email validation, a subject, the table template, and CAPTCHA enabled. Review FormSubmit's current privacy information before publishing. Do not collect passwords or sensitive personal information.

## Validation status
- [x] 11 HTML pages created
- [x] Exactly one CSS file
- [x] JSON files parse successfully
- [x] 33 supplied profile URLs included once each
- [x] Internal links and asset paths use relative URLs
- [x] Per-page titles, descriptions, canonical URLs, and Open Graph metadata
- [x] Sitemap, robots file, and custom 404 page
- [ ] Add and test the actual resume PDF
- [ ] Configure FormSubmit recipient, activate, and verify email delivery
- [ ] Verify education and experience details
- [ ] Replace project screenshot placeholder and verify project content
- [ ] Browser-test responsive behavior and deployed GitHub Pages paths

## Visual direction
The interface uses a modern dark editorial look with electric-blue accents, soft violet gradients, subtle grid texture, glass-like panels, responsive layouts, and restrained motion. Theme switching remains available. The visual system is implemented in the single stylesheet at `assets/css/style.css`.

## Resume note
A basic resume PDF is included so the site's download links resolve. It deliberately avoids unverified education, employment dates, and achievements; update it with verified details before using it for job applications.

## Resume and profile data
The resume PDF in `assets/documents/Abhay-Singh-Resume.pdf` is the uploaded source resume. Skills, experience, education, certifications, achievements, and project summaries were updated from it. Public LinkedIn search results were used only to cross-check the supplied profile and professional positioning; the website does not fetch LinkedIn data at runtime.
