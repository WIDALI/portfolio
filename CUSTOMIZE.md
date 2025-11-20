# ✏️ Quick Customization Checklist

Follow this checklist to personalize your portfolio. Each item tells you exactly which file to edit.

---

## 🎯 Essential Updates (Do First!)

### 1. Your Name & Info

**File:** `src/App.js`

Find and replace:
```javascript
// Line ~64 - Footer
<p>© 2024 Your Name. Built with React & passion.</p>

// Update to:
<p>© 2024 [YOUR NAME]. Built with React & passion.</p>
```

**File:** `src/components/Hero.jsx`

Update your role/title:
```javascript
// Line ~17-18
<p className="hero-subtitle">
  Software Engineer specializing in React, Flutter, and modern web technologies.
  <br />
  Crafting elegant solutions to complex problems.
</p>

// Customize to your actual skills/role
```

---

### 2. GitHub Username

**Find & Replace All:** `yourusername` → `your-actual-github-username`

Files to update:
- `src/components/Navigation.jsx` (line 23)
- `src/components/Hero.jsx` (line 29)
- `src/App.js` (lines 44, 51, 58, 69)

**Quick way:**
```bash
# In VS Code: Cmd+Shift+F (Mac) or Ctrl+Shift+H (Windows)
# Search: yourusername
# Replace: your-actual-username
# Click "Replace All"
```

---

### 3. Contact Links

**File:** `src/App.js`

Around line 67-77, update:
```javascript
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>

// Update to your actual links:
<a href="https://github.com/yourname">GitHub</a>
<a href="https://linkedin.com/in/yourname">LinkedIn</a>
<a href="mailto:yourname@gmail.com">Email</a>
```

---

### 4. Project Descriptions

**File:** `src/App.js`

Starting at line 8, update the `projects` array:

```javascript
{
  title: 'Race Control Dashboard',
  description: 'Update this with your actual project description...',
  techStack: ['Add', 'Your', 'Tech', 'Stack'],
  features: [
    'List your actual features',
    'One feature per line',
    'Keep it concise'
  ],
  githubLink: 'https://github.com/yourusername/race-control',
  // Update this with your repo URL
}
```

Repeat for all 3 projects!

---

### 5. Page Title & Meta Description

**File:** `public/index.html`

```html
<!-- Line 8 -->
<meta name="description" content="[Your Name] - Software Engineer Portfolio..." />

<!-- Line 14 -->
<title>[Your Name] - Software Engineer</title>
```

---

## 🎬 Adding Your Screen Recordings

### Option A: Local Video Files

1. **Add videos to `public` folder:**
   ```
   public/
   └── videos/
       ├── race-control-demo.mp4
       ├── student-75-demo.mp4
       └── scheduled-demo.mp4
   ```

2. **Update `src/components/ProjectSection.jsx`:**

Replace the video placeholder (around line 20):

```jsx
// OLD (placeholder):
<div className="video-placeholder">
  <p>{videoPlaceholder}</p>
  <div className="video-instructions">...</div>
</div>

// NEW (actual video):
<video controls className="project-video-player">
  <source src="/videos/race-control-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

3. **Add CSS for video player** in `src/components/ProjectSection.css`:

```css
.project-video-player {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

### Option B: YouTube Embeds

1. **Upload videos to YouTube**

2. **Get embed code:**
   - Click "Share" → "Embed"
   - Copy the `<iframe>` code

3. **Update `ProjectSection.jsx`:**

```jsx
// Pass YouTube video ID in App.js:
videoUrl: "dQw4w9WgXcQ", // Your YouTube video ID

// In ProjectSection.jsx, replace placeholder with:
<iframe
  width="100%"
  height="400"
  src={`https://www.youtube.com/embed/${videoUrl}`}
  title={title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="project-video-embed"
></iframe>
```

---

## 🎨 Color Customization (Optional)

If you want to tweak colors, here are the main files:

### Hero Section Colors
**File:** `src/components/Hero.css`
- Line 18: Hero title color
- Line 25: Accent color (orange)
- Line 30: Subtitle color
- Line 57: Primary button color

### Navigation Colors
**File:** `src/components/Navigation.css`
- Line 10: Navbar background
- Line 23: Logo/text color
- Line 52: Hover accent color

### Project Sections
**File:** `src/components/ProjectSection.css`
- Line 7-11: Section backgrounds
- Line 90: Title color
- Line 102: Tech tag colors

---

## 📸 Add Profile Image (Optional)

### In Hero Section:

1. **Add image to `public`:**
   ```
   public/
   └── images/
       └── profile.jpg
   ```

2. **Update `src/components/Hero.jsx`:**

```jsx
// Add above the hero-text div:
<div className="hero-profile">
  <img src="/images/profile.jpg" alt="Your Name" />
</div>
```

3. **Add CSS in `Hero.css`:**

```css
.hero-profile {
  margin-bottom: 2rem;
}

.hero-profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #FF6B35;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

---

## 🔍 Before You Deploy

### Test Everything:

```bash
npm start
```

**Checklist:**
- [ ] All text is personalized (no "Your Name" placeholders)
- [ ] All links work (GitHub, LinkedIn, email)
- [ ] Navigation scrolls to correct sections
- [ ] Videos play correctly (or placeholders look good)
- [ ] Mobile responsive (test in browser DevTools)
- [ ] No console errors (press F12 to check)

---

## 🚀 Ready to Deploy?

Once everything looks good:

1. **Build production version:**
   ```bash
   npm run build
   ```

2. **Test production build:**
   ```bash
   npx serve -s build
   ```

3. **Follow `DEPLOYMENT.md`** for hosting setup

---

## 💡 Pro Tips

### Make It Your Own:

1. **Add more projects** - Just add another object to the `projects` array in `App.js`

2. **Change font** - Update the Google Fonts import in `src/App.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
   ```

3. **Add sections** - Create new components like "Skills", "Experience", "Contact Form"

4. **Animations** - Install `framer-motion` for advanced animations:
   ```bash
   npm install framer-motion
   ```

5. **Dark mode toggle** - Implement with React state and CSS variables

---

## 📝 Quick Reference

| What to Update | File | Line # (approx) |
|----------------|------|-----------------|
| Your Name | `App.js` | 64 |
| Hero Title | `Hero.jsx` | 17 |
| GitHub Links | Multiple | Search "yourusername" |
| Projects | `App.js` | 8-60 |
| Page Title | `index.html` | 14 |
| Footer Links | `App.js` | 67-77 |
| Colors | Various `.css` files | See above |

---

**Need help? Check `README.md` for detailed documentation!**

**Questions? Open an issue or consult the deployment guide.**

---

✨ **Happy customizing!** ✨

