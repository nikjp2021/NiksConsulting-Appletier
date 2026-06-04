# Apple-Tier Design Recipe

*Use this instruction set to prompt Claude, Gemini, or other AI agents to build premium, "Apple-tier" websites. Copy and paste this document into your project's `CLAUDE.md` or AI system instructions.*

---

## 1. Design Philosophy: "Brutalist Minimalism meets High-End Tech"

When building components, strictly adhere to the following principles:
- **Zero Clutter**: Remove unnecessary borders, shadows, and neon glows. Use pure whitespace and stark contrast.
- **Dark Mode Default**: The background should be pure black (`#000000`), not dark gray. Cards and secondary surfaces should be slightly elevated (`#111111` or `#18181b`) with extremely subtle white borders (`rgba(255, 255, 255, 0.05)`).
- **Typography as UI**: Rely on font sizing, weight, and negative letter-spacing for visual hierarchy. 
- **The Bento Grid**: Group information into large, rounded "Bento" style cards (`border-radius: 2rem;`) that are `overflow: hidden`.

## 2. Core CSS Tokens (globals.css)

Ensure the project uses these root variables:

```css
:root {
  /* Surfaces */
  --background: #000000;
  --surface-1: #111111;
  
  /* Text */
  --foreground: #f5f5f7;
  --ink-300: #86868b; /* For secondary text */
  --ink-400: #6e6e73; /* For tertiary text */

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Base styles */
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Utilities */
.heading-display {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.bento-card {
  background-color: var(--surface-1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}
```

## 3. Motion & Animation Principles

Do not use bouncy or fast animations. Everything must feel heavy, deliberate, and premium.
- Use **Framer Motion** (`motion/react`).
- **Spring Physics**: Use high stiffness and damping for a smooth, slow settle: `transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}`.
- **Scroll Reveals**: Elements should fade up slowly from the bottom while blurring out.
  - `initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}`
  - `whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}`

## 4. Imagery & Media Strategy

Do not use flat illustrations or stock vectors. 
- **AI 3D Renders**: Use midjourney/DALL-E to generate premium 3D assets. Prompt formula: 
  > *"High-end 3D render of [subject]. Dark mode, glassmorphism style, pure black background, subtle [color] neon traces. Apple hardware aesthetic, extremely detailed, photorealistic, 4k."*
- **Video Backgrounds**: Use slow-moving, abstract cinematic videos inside `.bento-card` containers.
- **Integration**: Apply an inner gradient overlay over images/videos so text remains legible:
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent"></div>
  ```

## 5. Layout Rules
- **Margins**: Use massive padding/margins (`py-32` or `mt-32`) to let elements breathe.
- **Container**: Restrict max-width to `max-w-6xl` or `max-w-7xl` to keep lines of text readable.
- **Card Content**: Give Bento cards large internal padding (`p-8 md:p-14`).
