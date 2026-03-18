# MJ Foods — Premium Nigerian Groceries

> The authentic taste of home, wherever you are.

A landing page for **MJ Foods**, a premium Nigerian grocery export brand serving the diaspora in the UK, US, and Canada. Built with vanilla HTML, CSS, and JavaScript. Optimised images generated via Node.js.

🌐 **Live site:** [mjfooodsluxe.netlify.app](https://mjfooodsluxe.netlify.app)

---

## Project Overview

MJ Foods sells 100% natural, additive-free Nigerian groceries — Yam Flour, Honey Beans, Palm Oil, Egusi, and more — shipped internationally. This site serves as the brand's primary landing page, driving orders through WhatsApp.

**Key features:**
- Fully responsive (mobile-first)
- WhatsApp order integration on every product card
- Scroll-reveal animations with fallback for all browsers
- Real SVG social icons (Instagram, Facebook, TikTok, WhatsApp)
- Image optimisation pipeline (WebP + JPEG at 3 sizes via Sharp)
- Netlify auto-deploy on every push to `main`

---

## Folder Structure

```
MJ-FOODS-WEBSITE/
├── index.html              # Main site — all HTML, CSS, JS in one file
├── _headers                # Netlify headers config (prevents Cloudflare email mangling)
├── netlify.toml            # Netlify build config
├── package.json            # Node dependencies
├── package-lock.json
├── .gitignore
│
├── scripts/
│   └── resize-images.js    # Image optimisation script (Sharp)
│
├── img/                    # Auto-generated optimised images (480/800/1200px, WebP + JPEG)
│   └── ...
│
├── node_modules/           # Dependencies (not committed to Git)
│
└── *.jpeg                  # Raw product images (source files for the optimiser)
    ├── ewa-oloyin.jpeg
    ├── yam-flour.jpeg
    ├── palm-oil.jpeg
    ├── pepper-soup.jpeg
    ├── rice-poundo.jpeg
    ├── garri-ijebu.jpeg
    ├── plantain-flour.jpeg
    ├── ogbono.jpeg
    ├── locust-beans.jpeg
    ├── suya-spice.jpeg
    ├── cray-fish.jpeg
    ├── ofada-rice.jpeg
    ├── wheat-flour.jpeg
    └── Egusi__2_.jpeg
```

---

## How to Run Locally

**Prerequisites:** [Node.js](https://nodejs.org) and [VS Code](https://code.visualstudio.com) with the Live Server extension installed.

**1. Clone the repo**
```bash
git clone https://github.com/ajokepopoola86-crypto/mjfooodsluxe.git
cd mjfooodsluxe
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the image optimiser** (only needed when new product images are added)
```bash
node scripts/resize-images.js
```
This generates resized WebP and JPEG versions of all product images into the `img/` folder.

**4. Open the site locally**

Right-click `index.html` in VS Code and select **Open with Live Server**.
The site will open at `http://127.0.0.1:5500/index.html`.

---

## How to Deploy to Netlify

This repo is connected to Netlify for automatic deployment.

**Automatic (recommended):**

Every push to the `main` branch triggers an instant redeploy on Netlify. No manual steps needed.

```bash
git add .
git commit -m "your message here"
git push origin main
```

Netlify detects the push, builds, and goes live within ~60 seconds.

**Manual (drag and drop):**

1. Zip the entire project folder (excluding `node_modules`)
2. Go to [netlify.com](https://netlify.com) → your site dashboard
3. Drag and drop the zip onto the deploy area

---

## Adding a New Product

1. Drop the product image (`.jpeg`) into the project root folder
2. Add the image filename to the `images` array in `scripts/resize-images.js`
3. Copy an existing product card block in `index.html` and update the `src`, `alt`, `h3`, `p`, and WhatsApp `text` parameter
4. Run `node scripts/resize-images.js` to optimise the new image
5. Commit and push

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML / CSS / JS | Site structure, styling, interactivity |
| [Sharp](https://sharp.pixelplumbing.com/) | Image resisation and WebP conversion |
| [Netlify](https://netlify.com) | Hosting and auto-deploy |
| [Google Fonts](https://fonts.google.com) | Cormorant Garamond + Poppins |

---

## Contact

- 📧 mjfoods.exports@gmail.com
- 💬 [WhatsApp](https://wa.me/2347084415224)
- 📸 [@mjfoods.luxe](https://www.instagram.com/mjfoods.luxe)
