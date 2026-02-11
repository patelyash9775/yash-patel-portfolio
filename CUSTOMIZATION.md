# Customization Guide

This guide will help you customize the portfolio to match your preferences.

## 🎨 Changing Colors

The portfolio uses a cyan/blue color scheme. To change this:

### Option 1: Change Accent Color Only

In `portfolio.jsx`, find and replace these color values:
- `cyan-400`, `cyan-500`, `cyan-600` → Your new color (e.g., `purple-400`)
- `blue-400`, `blue-500`, `blue-600` → Your secondary color

### Option 2: Complete Color Overhaul

1. **Update Tailwind Config** (`tailwind.config.js`):
   ```javascript
   safelist: [
     {
       pattern: /bg-(purple|pink|emerald)-(400|500|600)/,
     },
     // ... add your colors
   ]
   ```

2. **Update Gradient Classes** in `portfolio.jsx`:
   ```jsx
   // Find:
   from-cyan-400 to-blue-500
   // Replace with:
   from-purple-400 to-pink-500
   ```

## 📝 Updating Content

### Personal Information (Hero Section)

Find the `<Hero />` component and update:
```jsx
<motion.h1>Yash Patel</motion.h1>  // Your name
<motion.div>
  <span>Full-Stack Developer</span> |  // Your title
  <span>Cloud Architect</span> |       // Your title
  <span>Sales Leader</span>            // Your title
</motion.div>
```

### Contact Information

In the `<Contact />` component:
```jsx
{ icon: Mail, value: 'your-email@example.com', link: 'mailto:your-email@example.com' },
{ icon: Phone, value: 'your-phone', link: 'tel:your-phone' },
```

### About Section

In the `<About />` component, update the paragraphs with your story.

### Experience

In the `<Experience />` component:
```jsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Start - End',
    description: 'Brief description',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
    color: 'cyan' // cyan, blue, purple, emerald
  },
  // Add more experiences
];
```

### Projects

In the `<Projects />` component:
```jsx
const projects = [
  {
    title: 'Project Name',
    category: 'Project Type',
    period: 'Date',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    highlights: ['Feature 1', 'Feature 2'],
    icon: Cloud, // Cloud, Code, Users, BarChart, Database
    color: 'cyan',
    link: 'project-url'
  },
];
```

### Skills

In the `<Skills />` component:
```jsx
const skillCategories = [
  {
    title: 'Category Name',
    icon: Code, // Code, Cloud, Terminal, Users, Database
    color: 'cyan',
    skills: [
      { name: 'Skill Name', level: 90 }, // level: 0-100
    ]
  },
];
```

### Education

In the `<Education />` component, update the education array with your degrees.

### Certifications

In the `<Certifications />` component, add your certifications.

## 🖼️ Adding a Profile Picture

1. **Create a `public` folder** in your project root

2. **Add your image** (e.g., `profile.jpg`)

3. **Update the Hero section**:
   ```jsx
   import Image from 'next/image'
   
   // Replace the YP avatar with:
   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
     <Image 
       src="/profile.jpg" 
       alt="Your Name"
       width={128}
       height={128}
       className="object-cover"
     />
   </div>
   ```

## ⚡ Changing Animations

### Animation Speed

Find `transition` props in components:
```jsx
transition={{ duration: 0.8 }} // Change to 0.5 for faster, 1.5 for slower
```

### Animation Delays

```jsx
transition={{ delay: 0.2 }} // Increase for longer delay
```

### Disable Specific Animations

Remove or comment out `initial`, `animate`, and `transition` props:
```jsx
// Before:
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// After (no animation):
<div>
```

## 🎭 Changing Fonts

### Current Fonts
- Display: Poppins
- Body: Poppins

### To Change Fonts

1. **Update Google Fonts import** in `globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
   ```

2. **Update font-family**:
   ```css
   body {
     font-family: 'Montserrat', sans-serif;
   }
   ```

## 📱 Adding Social Links

In the Hero and Footer sections:
```jsx
{ icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
{ icon: Instagram, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
```

## 🔗 Adding Resume Download

1. **Add resume PDF** to `public/` folder (e.g., `resume.pdf`)

2. **Update Download CV button** in Contact section:
   ```jsx
   <a 
     href="/resume.pdf" 
     download="YourName_Resume.pdf"
     className="..."
   >
     Download CV
   </a>
   ```

## 🎯 SEO Optimization

In `pages/index.js`, update:
```jsx
<Head>
  <title>Your Name - Your Title</title>
  <meta name="description" content="Your custom description" />
  <meta name="keywords" content="your, keywords, here" />
</Head>
```

## 🌙 Adding Light/Dark Mode Toggle

This requires more advanced customization. Here's a basic approach:

1. **Install theme package**:
   ```bash
   npm install next-themes
   ```

2. **Wrap app with ThemeProvider** in `_app.js`

3. **Add toggle button** in Navbar

4. **Update Tailwind config** for dark mode

(Detailed implementation available in Next.js docs)

## 💡 Tips

1. **Test changes locally** before deploying
2. **Keep backups** of your customizations
3. **Use consistent color schemes** (2-3 colors max)
4. **Maintain readability** when changing fonts/colors
5. **Test on mobile** after customizations

## 🆘 Need More Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Framer Motion docs](https://www.framer.com/motion/)
- Explore [Tailwind CSS docs](https://tailwindcss.com/docs)

---

Remember: Small, incremental changes are better than large overhauls. Test frequently!
