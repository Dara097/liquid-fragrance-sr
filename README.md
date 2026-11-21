# Campaign Challenge - Facebook Profile Frame & Twibbon Maker

A modern, responsive, mobile-optimized web application to generate custom Facebook profile pictures with a single official branded campaign challenge frame (Twibbon style).

## 🌟 How the Default Frame Works

### 👥 For All Visitors:
- **Zero Confusion**: When visitors land on the page, the **Official Campaign Frame** is already applied and ready.
- **3 Simple Steps for Visitors**:
  1. Click **"Select Photo"** (or drag & drop, or snap photo on phone).
  2. Drag with one finger to pan, pinch to zoom, or rotate to fit inside the official frame.
  3. Click **"Download Profile Image (HD)"** and tap **"Copy Caption"** to share on Facebook!

### 👑 For the Campaign Admin:
You have **two ways** to set or change the official default frame:
1. **Direct File Method (Permanent for Hosting & Deployment)**:
   - Place your transparent PNG frame in the project folder at [`assets/frame.png`](file:///z:/work/Website/frame%20border/assets/frame.png).
   - Your frame (e.g. 2000×2000 HD) will automatically be loaded as the default for all visitors worldwide!
2. **In-Browser Admin Controls**:
   - Click the **"Admin Controls"** button in the header (or **"Replace Frame (Admin)"** on the frame card).
   - Upload any new PNG frame directly. It updates immediately on the canvas and persists in your browser!
   - You can also customize the **Campaign Title**, **Tagline**, **Description**, and **Hashtags / Caption Template**.

---

## ✨ Features

- **📱 Fully Responsive & Mobile-First**:
  - Touch-friendly controls with single-finger pan and two-finger pinch-to-zoom.
  - Mouse wheel zoom and drag support on desktops.
  - Mobile bottom sticky toolbars and sliders.
- **🎯 1 Official Default Frame**:
  - Pre-loaded with your official 2000×2000 PNG frame border.
- **👤 Facebook Profile Alignment Simulator**:
  - Toggle between **Square (1:1)** and **FB Circle** view to verify that your face and frame elements align with Facebook's circular avatar crop.
- **⚡ Interactive Studio Tools**:
  - Zoom (0.2x to 3.0x), 90° rotation, fine angle rotation slider (-180° to +180°), and horizontal flip.
  - Instant "Center & Fit" button.
  - Instant "Try Sample Photo" button for instant testing.
- **📥 Ultra-HD Export & Social Sharing**:
  - Automatically exports matching the native resolution of your frame (2000×2000 Ultra HD).
  - Native Web Share API integration on mobile.
  - One-click "Copy Campaign Caption & Hashtags" for quick posting.
- **🔒 100% Client-Side & Private**:
  - All photo processing happens locally in the browser via HTML5 Canvas. No photos are ever uploaded to any third-party server.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it with Python or Node:

### With Python:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### With Node.js:
```bash
npx serve .
```

---
