# Sandeep Vangala Portfolio V1

Static personal portfolio website for job search positioning, interactive resume, project case studies, and blog-style technical writing.

## What is included

- `index.html` — homepage / positioning page
- `resume.html` — interactive resume page
- `projects.html` — filterable project index
- `projects/*.html` — project case studies
- `blog.html` — blog index
- `posts/*.html` — starter draft posts
- `contact.html` — contact page
- `assets/styles.css` — full responsive styling
- `assets/site.js` — simple interactivity
- `assets/Sandeep_Vangala_Staff_SRE_Resume.pdf` — downloadable resume
- `assets/sandeep-vangala-headshot.png` — extracted resume headshot

## Before publishing

1. Replace placeholder LinkedIn and GitHub links in `contact.html`.
2. Decide whether the public PDF should include your phone number.
3. Replace `your-domain.com` in `sitemap.xml` with your real domain.
4. Add real screenshots or sanitized diagrams to project pages.
5. Expand the draft blog posts with concrete examples.

## Local preview

Open `index.html` directly in your browser, or run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

This can be deployed as a static site to Cloudflare Pages, GitHub Pages, Netlify, Vercel, or any static web host.

For Cloudflare Pages:

- Push this folder to a GitHub repository.
- Create a Cloudflare Pages project.
- Connect the repository.
- Framework preset: `None`.
- Build command: leave blank.
- Output directory: `/`.
