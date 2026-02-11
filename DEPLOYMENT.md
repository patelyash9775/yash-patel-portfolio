# Deployment Guide

## Quick Deploy to Vercel (Recommended - FREE)

Vercel is the company behind Next.js and offers the best deployment experience for Next.js applications.

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts** - That's it! Your site will be live in seconds.

### Method 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Click "Deploy"** - Vercel will automatically detect Next.js and configure everything!

6. **Your site is live!** You'll get a URL like: `https://your-portfolio.vercel.app`

### Custom Domain

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. SSL certificate is automatically provisioned!

## Deploy to Netlify

1. **Push your code to GitHub**

2. **Go to [netlify.com](https://netlify.com)**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub and select your repository**

5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

6. **Click "Deploy"**

## Deploy to Cloudflare Pages

1. **Push your code to GitHub**

2. **Go to [pages.cloudflare.com](https://pages.cloudflare.com)**

3. **Click "Create a project"**

4. **Connect to your GitHub repository**

5. **Build settings**:
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`

6. **Click "Save and Deploy"**

## Performance Optimization Checklist

Before deploying, ensure:

- [ ] All images are optimized
- [ ] No console errors in production build
- [ ] Meta tags are properly set for SEO
- [ ] Mobile responsiveness is tested
- [ ] Page load speed is acceptable (test with Lighthouse)
- [ ] All links work correctly
- [ ] Contact information is up to date

## Post-Deployment

1. **Test your live site** on multiple devices and browsers

2. **Set up analytics** (Google Analytics, Vercel Analytics, etc.)

3. **Submit to search engines**:
   - Google Search Console
   - Bing Webmaster Tools

4. **Share your portfolio**:
   - Update LinkedIn
   - Add to resume
   - Share on social media

## Continuous Deployment

Once set up with Vercel/Netlify/Cloudflare:
- Every push to your main branch automatically deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Docs**: https://nextjs.org/docs

---

**Pro Tip**: Use Vercel for the best Next.js experience. It's free, incredibly fast, and handles everything automatically!
