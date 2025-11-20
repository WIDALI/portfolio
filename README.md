# Portfolio Website

A modern, professional portfolio website built with React, featuring animated backgrounds and smooth scrolling navigation.

## 🎨 Design Features

- **Navy Blue + White + Orange/Coral** color scheme
- **Inter font** for professional typography
- **Animated beam background** on hero section
- **Apple-style single scroll** layout
- **Smooth scroll navigation**
- **Fully responsive** design

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📝 Customization Guide

### 1. Personal Information

Edit `src/App.js` to update:
- Your name in the footer
- GitHub username links
- LinkedIn profile
- Email address

### 2. Hero Section

Edit `src/components/Hero.jsx`:
- Update the title and subtitle text
- Change your role/tagline

### 3. Projects

Edit the `projects` array in `src/App.js`:
- Update project descriptions
- Add your GitHub repository links
- Modify tech stacks
- Update features lists

### 4. Add Video Demos

For each project, replace the video placeholder in `src/components/ProjectSection.jsx`:

**Option 1: Local Video Files**
```jsx
<video controls width="100%">
  <source src="/videos/race-control-demo.mp4" type="video/mp4" />
</video>
```

**Option 2: YouTube Embed**
```jsx
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

**Option 3: Vimeo Embed**
```jsx
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
  width="100%"
  height="100%"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>
```

### 5. Update GitHub Links

Replace all instances of `yourusername` with your actual GitHub username:
- Navigation bar
- Hero section buttons
- Project GitHub buttons
- Footer links

## 🎯 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Beams.jsx          # Animated background
│   │   ├── Beams.css
│   │   ├── Hero.jsx            # Landing section
│   │   ├── Hero.css
│   │   ├── Navigation.jsx      # Top navbar
│   │   ├── Navigation.css
│   │   ├── ProjectSection.jsx  # Reusable project card
│   │   └── ProjectSection.css
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   ├── index.js
│   └── index.css
└── package.json
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect React and deploy
5. Connect your custom domain in settings

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Add custom domain in settings

## 🎨 Color Palette

```css
--navy-primary: #0A2540
--navy-secondary: #1E3A8A
--orange-accent: #FF6B35
--orange-hover: #FF8C42
--white: #FFFFFF
--off-white: #F8FAFC
--text-primary: #1F2937
--text-secondary: #475569
--text-light: #CBD5E1
```

## 📱 Features

- ✅ Smooth scrolling navigation
- ✅ Animated hero background
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional typography
- ✅ Hover animations
- ✅ Easy to customize
- ✅ Production-ready

## 🔧 Technologies

- React 18
- Three.js (for beam animations)
- React Three Fiber
- React Three Drei
- CSS3 (Flexbox, Grid, Animations)
- Google Fonts (Inter)

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React

