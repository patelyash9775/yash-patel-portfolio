# 🚀 Quick Start Guide

## Getting Your Portfolio Live in 5 Minutes!

### Step 1: Install Node.js
Make sure you have Node.js installed (version 16 or higher).
Download from: https://nodejs.org/

### Step 2: Extract Files
Extract all the portfolio files to a folder on your computer.

### Step 3: Install Dependencies
Open a terminal/command prompt in the project folder and run:
```bash
npm install
```

This will download all required packages (React, Next.js, Framer Motion, etc.)

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: View Your Portfolio
Open your browser and go to:
```
http://localhost:3000
```

You should see your portfolio running! 🎉

## Next Steps

### 1. Customize Your Content
- Open `portfolio.jsx` in a code editor (VS Code recommended)
- Update your personal information, experience, projects, and skills
- See `CUSTOMIZATION.md` for detailed instructions

### 2. Test Everything
- Check all sections
- Test on mobile (resize browser window)
- Click all links
- Verify contact information

### 3. Deploy to the Web (FREE!)

**Easiest Method - Vercel (Recommended):**
1. Create a GitHub account if you don't have one
2. Create a new repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Go to https://vercel.com
4. Sign up with GitHub
5. Click "New Project"
6. Import your repository
7. Click "Deploy"
8. Your site is live! 🌐

See `DEPLOYMENT.md` for more deployment options.

## File Structure Overview

```
├── pages/               # Next.js pages
│   ├── _app.js         # App wrapper with global CSS
│   ├── _document.js    # HTML document structure
│   └── index.js        # Home page
├── portfolio.jsx       # Main portfolio component (CUSTOMIZE THIS!)
├── globals.css         # Global styles
├── package.json        # Dependencies
└── *.config.js         # Configuration files
```

## Customization Priority

1. **High Priority** (Update First):
   - Personal information (name, title, contact)
   - Experience and projects
   - Skills and certifications

2. **Medium Priority**:
   - Colors and theme
   - Profile picture
   - Resume download link

3. **Low Priority**:
   - Animations speed
   - Fonts
   - Advanced features

## Common Issues

**Q: Port 3000 already in use?**
A: Either close other apps using port 3000, or change the port:
```bash
npm run dev -- -p 3001
```

**Q: npm install gives errors?**
A: Try:
```bash
npm install --legacy-peer-deps
```

**Q: Site looks different locally vs deployed?**
A: Run `npm run build` locally to test production build

**Q: Need help?**
A: 
- Check README.md for detailed information
- Read CUSTOMIZATION.md for customization help
- Visit Next.js docs: https://nextjs.org/docs

## Development Tools (Recommended)

- **Code Editor**: Visual Studio Code (https://code.visualstudio.com/)
- **VS Code Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter

## Tips for Success

✅ Make small changes and test frequently
✅ Keep backups of your working code
✅ Use Git for version control
✅ Test on multiple browsers
✅ Optimize images before adding them
✅ Keep your content concise and impactful

## Support

If you encounter issues:
1. Check the error message carefully
2. Search for the error online
3. Consult the official documentation
4. Review the guide files (README, CUSTOMIZATION, DEPLOYMENT)

---

**You're all set!** Start customizing and make this portfolio truly yours. Good luck with your job search! 🚀
