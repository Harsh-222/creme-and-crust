# Deployment Guide and Cloud Computing Overview

This guide explains how to publish the Crème & Crust website online for free, how to keep it updated from a GitHub repository, and how the project relates to cloud computing concepts.

## Before you deploy

1. Build the project once to confirm it works: `npm install`, then `npm run build`. The finished website is created in the `dist` folder.
2. Push the project to a GitHub repository (create a new repository on github.com, then upload or push the project files).
3. Check the contact details, social links and opening hours in `src/data/site.ts` and update them to the café's official information.

## Option 1: Vercel (recommended)

1. Sign in to vercel.com with your GitHub account.
2. Choose **Add New > Project**, then select your repository.
3. Vercel detects Vite automatically. Confirm these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Vercel gives you a live address such as `https://your-project.vercel.app`.
5. The included `vercel.json` makes every page (`/menu`, `/about`, `/login`) load correctly when opened directly or refreshed.

## Option 2: Netlify

1. Sign in to netlify.com and choose **Add new site > Import an existing project**.
2. Connect GitHub and select the repository.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.
5. The included `public/_redirects` file routes all pages to the app. It is copied into `dist` automatically.

## Option 3: GitHub Pages

GitHub Pages serves the site from a sub-path (for example `https://username.github.io/repository-name/`), so the Vite base path must match the repository name.

1. In `vite.config.ts`, add `base: '/your-repository-name/'` inside `defineConfig`.
2. In `src/main.tsx` and `src/App.tsx`, give `BrowserRouter` the same path with `basename="/your-repository-name"`.
3. Install the publishing helper once: `npm install --save-dev gh-pages`.
4. Add a script to `package.json`: `"deploy": "npm run build && gh-pages -d dist"`.
5. Run `npm run deploy`. In the repository settings under **Pages**, choose the `gh-pages` branch.

Note: GitHub Pages does not support the redirect files used by Vercel and Netlify. Visitors who open `/menu` or `/login` directly may see a 404 page. Navigating from the Home page always works. Vercel or Netlify are the simpler choices for this project.

## Updating the live website

1. Edit the files on your computer or in GitHub.
2. Commit and push the changes to the main branch.
3. Vercel and Netlify rebuild and publish the new version automatically within a minute or two. Nothing needs to be uploaded by hand.

---

## Cloud Computing Explanation

### 1. Cloud hosting
The website is a set of static files: HTML, CSS, JavaScript and photographs. Vercel or Netlify stores these files on their cloud servers. When a visitor types the address, the cloud platform returns the files from its storage. The café does not need its own computer or server running.

### 2. Scalability
Static files are cheap to serve, so the hosting provider can handle many visitors at once. Vercel and Netlify copy the files to a content delivery network (CDN): servers in many locations around the world. A visitor in Bengaluru and a visitor in London each receive the website from a nearby server, and a sudden spike in traffic is spread across that network.

### 3. Availability
The hosting provider runs its infrastructure across multiple data centres with monitoring and automatic failover. As long as the provider is online, the website is reachable from any internet connection. The café's own internet connection or power supply does not affect the site.

### 4. Performance
- **Optimised images:** the photographs are loaded at a suitable size and only when they are about to appear on screen (lazy loading).
- **Browser caching:** files such as the stylesheet and scripts are stored by the visitor's browser, so repeat visits load faster.
- **CDN delivery:** files are served from the nearest edge location, which reduces waiting time.
- **HTTPS:** the platforms provide free secure connections automatically.

### 5. Security
- **HTTPS:** all traffic between the visitor and the site is encrypted. Vercel and Netlify issue and renew certificates automatically.
- **Secure hosting configuration:** the static site has no server code, no database and no secret keys in the browser, which reduces the attack surface.
- **Why demo login is not suitable for real customers:** the login page only pretends to authenticate. Anyone viewing the page source can see that the check is done in the browser. Real customer accounts need passwords stored and checked on a secure server, with protection against brute-force attacks, which requires a proper backend or an authentication service.

### 6. Cost efficiency
Vercel, Netlify and GitHub Pages all offer free tiers that include hosting, HTTPS and a CDN for small projects. A demonstration website like this one normally stays within those limits. Limits (for example bandwidth or build minutes) change over time, so check the provider's current pricing page before relying on them for a live business.

### 7. Maintenance
The project is stored in a GitHub repository, which keeps a full history of every change. Updating the menu or prices means editing one data file and pushing the change. The hosting provider rebuilds and republishes the site automatically, and any earlier version can be restored from the deployment history in the provider's dashboard.

---

## Limits to mention in a viva

- The website has no real ordering, payments, bookings or message delivery.
- Liked items are saved only in the visitor's own browser.
- The login system is a demonstration. Real authentication requires a backend or an external authentication service.
- Photographs are Pexels stock images, not the café's own photos.
