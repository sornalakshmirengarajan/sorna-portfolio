# Sorna Lakshmi — Visual Arts Portfolio

A premium, minimal-editorial portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Hosting on Vercel (Step by Step)

### Prerequisites
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free, sign up with GitHub)

### Step 1: Push to GitHub
```bash
# In the c:\sorna-protfolio directory, open PowerShell

# Initialize git (first time only)
git init
git add .
git commit -m "Initial portfolio commit"

# Create a repo on GitHub: https://github.com/new
# Then link and push:
git remote add origin https://github.com/YOUR_USERNAME/sorna-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your **sorna-portfolio** repository
4. Vercel auto-detects Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy** ✅

Your portfolio will live at: `https://sorna-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)
In Vercel dashboard → Settings → Domains → Add your domain.

---

## 🛠 Running Locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## 📂 Project Structure

```
sorna-protfolio/
├── public/
│   └── assets/
│       ├── art/        # 27 paintings & drawings
│       ├── digital/    # 4 digital works + video + PDF comic
│       └── photograph/ # 19 photographs
├── src/
│   ├── components/     # 12 React components
│   ├── data/assets.js  # Media registry
│   ├── App.jsx
│   └── index.css
├── vercel.json
└── package.json
```

## ✨ Features
- Molten Espresso + Peach Whisper theme
- Animated loading screen with SVG monogram
- Custom cursor with smooth follower
- Scroll progress bar
- Art gallery with CSS masonry + lightbox
- Digital works with hover-play video
- "Where's My Roar?" comic PDF viewer
- Photography grid with lightbox
- Animated skills with progress bars
- Marquee strip
- Sound effects toggle
- Easter egg: type `↑↑↓↓←→←→BA` for a hidden message
- Mobile-responsive + PWA manifest
- SEO meta tags + Open Graph
