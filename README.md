# Yash Patel - Portfolio Website

A modern, animated portfolio website built with Next.js, React, and Framer Motion. Features a stunning dark theme with gradient accents, smooth animations, and responsive design.

## 🚀 Features

- **Modern Design**: Dark theme with cyan/blue gradient accents
- **Smooth Animations**: Framer Motion animations throughout
- **Fully Responsive**: Works perfectly on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Sections

- **Hero**: Eye-catching landing section with animated introduction
- **About**: Professional summary and key strengths
- **Experience**: Timeline of professional experience
- **Projects**: Showcase of key projects with details
- **Skills**: Interactive skill visualization with progress bars
- **Education**: Academic background and achievements
- **Certifications**: Professional certifications
- **Contact**: Contact information and social links

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon set

## 📦 Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

1. **Create an optimized production build**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
yash-patel-portfolio/
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # Custom document
│   └── index.js         # Home page
├── portfolio.jsx        # Main portfolio component
├── globals.css          # Global styles
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Colors
The portfolio uses a cyan/blue color scheme. To change colors, update the Tailwind config and modify the gradient classes in `portfolio.jsx`.

### Content
All content is in the `portfolio.jsx` file. Update the following sections:
- Personal information in the Hero section
- Experience array
- Projects array
- Skills categories
- Education array
- Certifications array

### Animations
Animations are controlled via Framer Motion. Adjust `initial`, `animate`, and `transition` props to customize animation behavior.

## 🔧 Environment Setup

No environment variables are required for basic functionality. However, you may want to add:

- **Google Analytics** for tracking
- **Contact form backend** for form submissions
- **CMS integration** for dynamic content

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Tips

1. **Optimize images**: Use Next.js Image component for automatic optimization
2. **Lazy loading**: Sections load as you scroll using Framer Motion's viewport detection
3. **Code splitting**: Next.js automatically splits code for optimal loading

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any static hosting service

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Contact

**Yash Patel**
- Email: yashpatel9775@gmail.com
- LinkedIn: [yash-patel-4014a7207](https://www.linkedin.com/in/yash-patel-4014a7207/)
- Location: Truro, Nova Scotia, Canada

---

Built with ❤️ using Next.js, React, and Framer Motion
