<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🍎 PREMIUM "APPLE-TIER" DESIGN AGENT WORKFLOW
**System Prompt & Master Instructions for AI Agents**

If you are an AI agent reading this file, you have been tasked with building an ultra-premium, cinematic website (Apple, Google Hardware, Microsoft Surface aesthetic). You must execute the following automated workflow in order. **Do not use your default generic styling.**

## 🛑 AGENT DIRECTIVES
1. **No Generic Colors:** You must use the OLED pure black (`#000000`) and the muted ink grayscale defined below.
2. **No Fast Animations:** All animations must use slow, cinematic cubic-beziers. 
3. **No Flat Cards:** Use glassmorphism Bento Grids.
4. **Task Management:** You MUST create a `task.md` artifact immediately to track your progress across these phases.

---

## 🔍 PHASE 0: RESEARCH & AESTHETIC ALIGNMENT
**CRITICAL:** Before you write a single line of code or generate any images, you MUST use your web browsing or search tools to browse a highly relevant premium website (e.g., apple.com, store.google.com, microsoft.com/surface, or a direct high-end competitor).
1. Spend a minute analyzing their exact use of negative space, typography weights, and micro-interactions.
2. Observe how they structure their bento grids and hero sections.
3. Use this real-world browsing context to ground your design decisions before moving to Phase 1. Do not rely solely on your training data.

---

## 🛠️ PHASE 1: FOUNDATION & TOKENS
First, configure `/src/styles/tokens.css` with the strict Apple-tier color palette.

```css
:root {
  /* Surfaces */
  --color-surface-0: #000000;      /* Pure OLED Black */
  --color-surface-1: #111111;      /* Elevated Bento Cards */
  --color-surface-2: #1d1d1f;      /* Interactions/Hover */
  
  /* Typography */
  --color-ink-100: #f5f5f7;        /* Primary Headings */
  --color-ink-200: #e8e8ed;        /* Body Text */
  --color-ink-300: #86868b;        /* Subtitles & Descriptions */
  
  /* Typography Variables */
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
}
```
*Note: Make sure your Tailwind config uses these CSS variables.*

---

## 🎨 PHASE 2: ASSET GENERATION
Before building the UI, you must generate premium 3D assets to fill the layout. Use your native image generation tools (`generate_image`) with these exact prompt formats:

- **Hero Visual:** `"Ultra-high-end Apple style 3D abstract fluid art. Dark mode, deep blacks, subtle glowing edges of titanium and deep ocean blue. Minimalist, premium, smooth lighting, 8k resolution."`
- **Bento Hardware Assets:** `"High-end 3D render of an AI neural processor. Dark mode, glassmorphism style, pure black background, subtle blue neon traces. Apple hardware aesthetic, extremely detailed, photorealistic, 4k."`

Save these generated assets directly into the `/public/images/` directory.

---

## 🏗️ PHASE 3: COMPONENT ARCHITECTURE
Build the layout using these strict patterns.

### 1. Cinematic Typography
Use huge display fonts with negative tracking (`letter-spacing: -0.04em`) and extremely bold weights for heroes. Do NOT use pure white; use `ink-100` (`#f5f5f7`). Combine with gradient text for emphasis.
```tsx
<h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-ink-100">
  Pro. <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-300 to-ink-500">Beyond.</span>
</h1>
```

### 2. The "Bento" Grid System
Do not build standard flex-box columns. Build asymmetrical grids (`grid-cols-1 md:grid-cols-3` etc) where items span multiple columns. Wrap them in Bento Cards:
```tsx
<div className="bg-surface-1/80 backdrop-blur-2xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl hover:border-white/10 transition-colors">
  {/* Position absolute images/videos in the background, text in the foreground */}
</div>
```

### 3. Advanced Motion & Transitions (Framer Motion)
**CRITICAL:** Do NOT just use basic time-delayed fades everywhere. 

**A. Accessibility First:**
All cinematic animations MUST respect the user's OS-level accessibility settings. 
```tsx
import { useReducedMotion } from "framer-motion";
const shouldReduceMotion = useReducedMotion();
// Use this boolean to conditionally render static states instead of heavy animations.
```

**B. Scroll-Driven "Digital Flipbook":**
Tie heavy graphical transformations (like scaling videos, revealing 3D hardware, or scrubbing `<canvas>` frames) directly to the scroll position so it feels physically connected to the mouse wheel.
```tsx
import { useScroll, useTransform, motion } from "framer-motion";
const { scrollYProgress } = useScroll({ target: containerRef });
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
// Apply this scale to a hero background image
```

**C. Standard Entry Animations (For Text/UI):**
Use a slow, blurry fade-up for UI elements entering the viewport. This replicates the cinematic Apple product reveals.
```tsx
import { motion } from "framer-motion";

<motion.div 
  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
  Content
</motion.div>
```

---

## 🚀 PHASE 4: AUTOMATED EXECUTION & DELIVERY
1. **Initialize `task.md`**: Create a checklist covering Tokens, Asset Generation, Hero Component, Bento Grid, and Final Polish.
2. **Execute Steps 1-3**: Overwrite existing files with the Apple-tier design system.
3. **Verify Design**: Ensure no bright backgrounds exist. Ensure padding inside Bento cards is massive (`p-10 md:p-16`).
4. **Write Walkthrough**: Deliver a `walkthrough.md` summarizing the cinematic transformation and presenting the generated 3D assets to the user.
5. **Commit**: Run `git add . && git commit -m "feat: Apple-tier redesign and AI asset generation"`

**END OF INSTRUCTIONS. COMMENCE WORKFLOW NOW.**
