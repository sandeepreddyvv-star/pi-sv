# Deploy to Cloudflare Pages

## 1. Create a GitHub repository

```bash
git init
git add .
git commit -m "Initial portfolio v1"
git branch -M main
git remote add origin git@github.com:<your-user>/sandeep-portfolio.git
git push -u origin main
```

## 2. Create Cloudflare Pages project

1. Go to Cloudflare Dashboard.
2. Open **Workers & Pages**.
3. Create a new **Pages** project.
4. Connect your GitHub repository.
5. Use these settings:
   - Framework preset: `None`
   - Build command: empty
   - Build output directory: `/`

## 3. Add custom domain

1. Buy or connect your domain in Cloudflare.
2. In the Pages project, open **Custom domains**.
3. Add your domain, for example `sandeepvangala.com`.
4. Cloudflare will issue HTTPS automatically once DNS is active.

## 4. Recommended Cloudflare settings

- Always Use HTTPS: On
- Automatic HTTPS Rewrites: On
- WAF Managed Rules: On
- Bot Fight Mode: optional
- Web Analytics: On

## 5. Security headers

For a static v1 site, add a `_headers` file if using Cloudflare Pages headers. A starter file is included in this project.
