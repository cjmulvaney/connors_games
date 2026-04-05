# Connor Mulvaney Design System
## Complete Style Guide for Learning Hub

**Purpose:** This document defines the design system used on connormulvaney.com so it can be replicated with variations on learning.connormulvaney.com

---

## 🎨 **Color Palette**

### **Primary Colors (Blues - Brand Identity)**
```css
--color-sky: #0c4a6e           /* Deep blue - primary brand color */
--color-sky-light: #0369a1     /* Lighter blue - accents, hover states */
```

**Usage:**
- Primary buttons
- Active navigation links
- Headings on homepage
- Focus states
- Text selection background

### **Secondary Colors (Greens - Supporting)**
```css
--color-forest: #14532d         /* Deep green - secondary actions */
--color-forest-light: #166534   /* Lighter green - accents */
```

**Usage:**
- Secondary buttons
- Tags/badges
- Supporting elements

### **Neutral Grays (Text & Backgrounds)**
```css
--color-slate-50: #fafaf9      /* Very light background */
--color-slate-100: #f5f5f4     /* Light background sections */
--color-slate-200: #e7e5e4     /* Borders, dividers */
--color-slate-300: #d6d3d1     /* Subtle borders */
--color-slate-400: #a8a29e     /* Disabled text */
--color-slate-500: #78716c     /* Secondary text */
--color-slate-600: #57534e     /* Body text */
--color-slate-700: #44403c     /* Dark text */
--color-slate-800: #292524     /* Headings */
--color-slate-900: #1c1917     /* Primary headings, dark text */
```

### **Accent Colors**
```css
--color-cream: #fef3c7         /* Warm accent for highlights */
--color-white: #ffffff         /* Pure white */
--color-background: #ffffff    /* Page background */
--color-foreground: #1c1917    /* Default text color */
```

### **Overlay Colors (for photo backgrounds)**
```css
--color-overlay: rgba(0, 0, 0, 0.5)         /* Standard dark overlay */
--color-overlay-heavy: rgba(0, 0, 0, 0.7)   /* Heavy dark overlay */
--color-white-muted: rgba(255, 255, 255, 0.8)   /* Semi-transparent white */
--color-white-faint: rgba(255, 255, 255, 0.6)   /* Faint white */
```

---

## 📝 **Typography**

### **Font Family**
```css
Font: Inter (Google Fonts)
Fallback: system-ui, sans-serif
Variable: --font-inter
```

**Import:**
```typescript
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

### **Font Sizes (Tailwind Classes)**

**Headings:**
- `text-6xl` (60px) - Large hero headings (desktop)
- `text-5xl` (48px) - Hero headings (mobile)
- `text-4xl` (36px) - Page titles
- `text-3xl` (30px) - Section headings, rotating text
- `text-2xl` (24px) - Subsection headings
- `text-xl` (20px) - Large body text, subtitles

**Body Text:**
- `text-lg` (18px) - Large body text, descriptions
- `text-base` (16px) - Standard body text
- `text-sm` (14px) - Small text, captions
- `text-xs` (12px) - Tiny text, meta information

### **Font Weights**
- `font-bold` (700) - Primary headings, emphasis
- `font-semibold` (600) - Subheadings, navigation
- `font-medium` (500) - Button text, labels
- `font-normal` (400) - Body text

### **Line Height**
```css
body {
  line-height: 1.7; /* Generous line height for readability */
}
```

- `leading-relaxed` (1.625) - Body paragraphs
- `leading-normal` (1.5) - Standard text
- `leading-tight` (1.25) - Headings

---

## 📏 **Spacing & Layout**

### **Container Max-Width**
```typescript
max-w-6xl mx-auto  /* 1152px max width, centered */
```

**Padding:**
```typescript
px-6 md:px-8  /* 24px mobile, 32px desktop horizontal padding */
```

### **Section Spacing**
```typescript
py-20        /* 80px vertical padding - standard sections */
py-24        /* 96px vertical padding - large sections */
py-32        /* 128px vertical padding - hero sections */
pt-32 pb-20  /* Asymmetric - hero with portrait */
```

### **Element Spacing**
- `mb-4` (16px) - Small margins between elements
- `mb-6` (24px) - Medium margins
- `mb-8` (32px) - Large margins
- `mb-12` (48px) - Section element separation
- `gap-4` (16px) - Flex/grid gap small
- `gap-8` (32px) - Flex/grid gap medium
- `gap-12` (48px) - Flex/grid gap large

---

## 🔘 **Button Styles**

### **Button Variants**

**Primary (Brand Blue):**
```typescript
className="bg-primary-600 text-white hover:bg-primary-700 
           focus:ring-primary-500 shadow-sm"
// or: bg-slate-900 text-white hover:bg-slate-800
```

**Secondary (Green):**
```typescript
className="bg-secondary-600 text-white hover:bg-secondary-700 
           focus:ring-secondary-500 shadow-sm"
```

**Outline:**
```typescript
className="border-2 border-primary-600 text-primary-600 
           hover:bg-primary-50 focus:ring-primary-500"
// or: border-slate-300 text-slate-700 hover:bg-slate-50
```

### **Button Sizes**
```typescript
sm: "px-4 py-2 text-sm"      /* Small buttons */
md: "px-6 py-3 text-base"    /* Default buttons */
lg: "px-8 py-4 text-lg"      /* Large CTAs */
```

### **Button Base Styles**
```typescript
className="inline-flex items-center justify-center 
           font-medium rounded-lg transition-all duration-200 
           focus:outline-none focus:ring-2 focus:ring-offset-2 
           disabled:opacity-50 disabled:cursor-not-allowed"
```

---

## 🎭 **Animations**

### **Fade In (Standard)**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
```

**Usage:** `className="animate-fade-in"`

### **Staggered Animations**
```css
.stagger-1 { animation-delay: 0.2s; }
.stagger-2 { animation-delay: 0.4s; }
.stagger-3 { animation-delay: 0.6s; }
```

**Usage:** `className="animate-fade-in stagger-1"`

### **Typewriter Cursor Blink**
```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
```

### **Transition Speeds**
- `transition-all duration-200` - Fast transitions (buttons, hovers)
- `transition-all duration-300` - Medium transitions (dropdowns)
- `transition-all duration-500` - Slow transitions (major state changes)

---

## 🎨 **Component Patterns**

### **Header/Navigation**

**Fixed header with shadow:**
```typescript
<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
  <nav className="max-w-6xl mx-auto px-6 md:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link href="/" className="font-semibold text-slate-900">
        Connor Mulvaney
      </Link>
      
      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Link
        </Link>
      </div>
    </div>
  </nav>
</header>
```

**Active link state:**
```typescript
className={pathname === link.href 
  ? "text-[#0c4a6e]"  // Active - brand blue
  : "text-slate-600 hover:text-slate-900"  // Inactive
}
```

### **Cards**

**Standard card:**
```typescript
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
  {/* Card content */}
</div>
```

**Card with hover:**
```typescript
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm 
                hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

### **Section Container**
```typescript
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    {/* Section content */}
  </div>
</section>

{/* Alternating background */}
<section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    {/* Section content */}
  </div>
</section>
```

### **Hero Section Pattern**
```typescript
<section className="pt-32 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Content on left/right */}
    </div>
  </div>
</section>
```

---

## 🖼️ **Image Handling**

### **Next.js Image Component**
```typescript
import Image from "next/image";

<div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
  <Image
    src="/images/photo.jpg"
    alt="Description"
    fill
    className="object-cover"
    priority  // For above-the-fold images
  />
</div>
```

**Common aspect ratios:**
- `aspect-[3/4]` - Portrait (headshots)
- `aspect-[16/10]` - Landscape cards
- `aspect-[16/9]` - Video/wide landscape

### **Photo Background Sections**
```typescript
<section className="relative py-24">
  <div className="absolute inset-0">
    <Image src="/images/background.jpg" alt="Background" fill className="object-cover" />
    <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
  </div>
  
  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
    <h2 className="text-white">Content over photo</h2>
  </div>
</section>
```

---

## 📱 **Responsive Patterns**

### **Grid Layouts**
```typescript
{/* 1 column mobile, 2 columns tablet/desktop */}
<div className="grid md:grid-cols-2 gap-8">

{/* 1 column mobile, 3 columns desktop */}
<div className="grid md:grid-cols-3 gap-8">

{/* Sidebar layout */}
<div className="grid md:grid-cols-3 gap-12">
  <div className="md:col-span-1">{/* Sidebar */}</div>
  <div className="md:col-span-2">{/* Main content */}</div>
</div>
```

### **Responsive Text Sizes**
```typescript
<h1 className="text-5xl md:text-6xl">  {/* 48px mobile, 60px desktop */}
<h2 className="text-3xl md:text-4xl">  {/* 30px mobile, 36px desktop */}
<p className="text-lg md:text-xl">     {/* 18px mobile, 20px desktop */}
```

### **Responsive Spacing**
```typescript
<div className="px-6 md:px-8">  {/* 24px mobile, 32px desktop */}
<div className="py-12 md:py-20"> {/* 48px mobile, 80px desktop */}
```

---

## 🎨 **Design Principles**

### **1. Clean & Modern**
- White space is intentional
- Clear typography hierarchy
- Minimal decorative elements
- Focus on content and readability

### **2. Professional Yet Approachable**
- Friendly without being casual
- Serious without being corporate
- Warm color accents (sky blue, forest green)
- Clear, conversational copy

### **3. Content-First**
- Text is primary, images support
- Generous line-height (1.7)
- Ample padding around content
- Clear visual hierarchy

### **4. Consistent Spacing**
- Use 4px base unit (Tailwind's default)
- Stick to spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80...
- Consistent section padding (py-20, py-24)

### **5. Subtle Animations**
- Fade-in on scroll
- Smooth transitions on hover
- Typewriter effect for personality
- Never distracting

---

## 🔧 **Implementation Notes**

### **Tailwind CSS v4**
This site uses Tailwind CSS v4 with inline theme configuration in `globals.css`

### **Key Files Structure**
```
src/
├── app/
│   ├── globals.css           ← All colors, animations defined here
│   ├── layout.tsx            ← Font setup, metadata
│   └── page.tsx              ← Homepage
├── components/
│   ├── Header.tsx            ← Navigation pattern
│   ├── Button.tsx            ← Button component with variants
│   └── Footer.tsx            ← Footer pattern
```

### **Color Usage Examples**

**Headings:**
```typescript
<h1 className="text-slate-900">Dark heading</h1>
<h1 className="text-sky">Brand blue heading</h1>
<h1 className="text-sky-light">Light blue heading</h1>
```

**Body text:**
```typescript
<p className="text-slate-600">Primary body text</p>
<p className="text-slate-500">Secondary body text</p>
```

**Backgrounds:**
```typescript
<section className="bg-white">White section</section>
<section className="bg-slate-50">Light gray section</section>
<section className="bg-slate-900">Dark section</section>
```

### **Focus States**
```css
:focus-visible {
  outline: 2px solid var(--color-sky);
  outline-offset: 2px;
}
```

### **Text Selection**
```css
::selection {
  background-color: var(--color-sky);
  color: white;
}
```

---

## 📋 **Copy This to Your Learning Hub Project**

### **globals.css (Essential Styles)**
```css
@import "tailwindcss";

@theme inline {
  /* Copy all color variables from main site */
  --color-sky: #0c4a6e;
  --color-sky-light: #0369a1;
  --color-forest: #14532d;
  --color-forest-light: #166534;
  
  --color-slate-50: #fafaf9;
  --color-slate-100: #f5f5f4;
  --color-slate-200: #e7e5e4;
  --color-slate-300: #d6d3d1;
  --color-slate-400: #a8a29e;
  --color-slate-500: #78716c;
  --color-slate-600: #57534e;
  --color-slate-700: #44403c;
  --color-slate-800: #292524;
  --color-slate-900: #1c1917;
  
  --font-sans: var(--font-inter);
}

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: #1c1917;
  font-family: var(--font-sans), system-ui, sans-serif;
  line-height: 1.7;
}

::selection {
  background-color: #0c4a6e;
  color: white;
}

:focus-visible {
  outline: 2px solid #0c4a6e;
  outline-offset: 2px;
}

/* Copy animations if needed */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
```

### **layout.tsx (Font Setup)**
```typescript
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
```

---

## 🎯 **Key Differences for Learning Hub**

**Keep:**
- ✅ All colors (sky, forest, slate palette)
- ✅ Typography (Inter font, sizes, weights)
- ✅ Spacing system
- ✅ Button styles
- ✅ Card patterns
- ✅ Animations

**Change/Adapt:**
- 📝 Layout structure (course-focused vs. portfolio)
- 📝 Navigation (dashboard, courses vs. about, work)
- 📝 Components (course cards, progress bars, lesson layouts)
- 📝 Less photo-heavy (one hero image vs. many backgrounds)

**Add:**
- 🆕 Authentication UI (sign-in forms, user menu)
- 🆕 Course components (lesson lists, progress indicators)
- 🆕 Interactive elements (tabs, accordions, search)

---

## 📞 **Questions to Ask Claude Code**

When starting your learning hub, tell Claude:

> "I'm building a learning hub website using the Connor Mulvaney design system. Use the same color palette (sky blue #0c4a6e, forest green #14532d, slate grays), Inter font, and component patterns. The site should feel cohesive with connormulvaney.com but have a course platform layout instead of a portfolio layout. Include authentication (Clerk), course cards, and lesson navigation. Keep the clean, professional aesthetic with generous spacing and subtle animations."

---

**End of Design System Document**

*Last updated: January 2026*
*For: learning.connormulvaney.com project*
