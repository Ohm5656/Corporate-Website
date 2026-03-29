# NTP Electric & Engineering Website - Project Structure

## Overview
This is a modern one-page landing website for NTP Electric and Engineering Co., Ltd., built with React, React Router, Tailwind CSS, and Motion (Framer Motion).

## Architecture

### Pages Structure
The website consists of three main pages:

1. **Homepage (`/`)** - One-page scrolling layout with sections:
   - Hero Section (#home)
   - About Section (#about)
   - Services Section (#services)
   - Projects Preview Section (#projects) - Shows 6 projects
   - Certifications Section (#certifications)

2. **Projects Page (`/projects`)** - Full projects listing with:
   - Category filtering
   - All 9 projects displayed
   - Responsive grid layout

3. **Contact Page (`/contact`)** - Dedicated contact page with:
   - Contact form
   - Quick contact methods (Phone, LINE, Facebook, Email)
   - Office information
   - Google Maps integration

### Navigation Behavior

#### Navbar
- **Smooth Scrolling**: On homepage, clicking nav items scrolls to respective sections
- **Cross-page Navigation**: When on `/projects` or `/contact`, nav items redirect to `/#section`
- **Contact Button**: Always navigates to `/contact` page (not an anchor)
- **Mobile Menu**: Responsive hamburger menu for mobile devices

#### Floating Contact Bar
- **Desktop**: Fixed vertical bar on the right side with hover labels
- **Mobile**: Fixed horizontal bar at the bottom
- **Icons**: Phone, LINE, Facebook, Email
- **Always Visible**: Appears across all pages

### File Structure

```
/src
├── /app
│   ├── App.tsx                          # Main app with Router setup
│   ├── /components
│   │   ├── Navbar.tsx                   # Navigation with smooth scroll
│   │   ├── FloatingContactBar.tsx       # Contact sidebar/bottom bar
│   │   ├── NewFooter.tsx                # Footer with Thai content
│   │   ├── SectionWrapper.tsx           # Reusable animation wrapper
│   │   ├── ProjectCard.tsx              # Reusable project card
│   │   └── ScrollToTop.tsx              # Scroll to top button
│   └── /pages
│       ├── HomePage.tsx                 # One-page landing with all sections
│       ├── ProjectsPage.tsx             # Full projects with filtering
│       └── ContactPage.tsx              # Contact form and info
├── /data
│   └── projects.ts                      # Project data with Thai translations
└── /styles
    ├── fonts.css                        # Google Fonts (Sarabun + Inter)
    ├── tailwind.css                     # Tailwind imports
    ├── theme.css                        # Custom theme and colors
    └── index.css                        # Main CSS entry point
```

## Key Features

### 1. Smooth Scrolling
- Implemented via `scrollBehavior: 'smooth'` in App.tsx
- Custom scroll offset calculation to account for fixed navbar (80px height)
- Hash-based routing for direct section links (e.g., `/#services`)

### 2. Motion Animations
- **Scroll Reveal**: Sections fade in and slide up when entering viewport
- **Stagger Effects**: Cards animate sequentially with delays
- **Page Transitions**: Smooth entrance animations on page load
- **Performance**: Uses `viewport: { once: true }` to prevent re-triggering

### 3. Responsive Design
- **Desktop-First**: Optimized for large screens
- **Mobile Adaptations**:
  - Hamburger menu
  - Bottom contact bar
  - Adjusted spacing and font sizes
  - Touch-friendly buttons

### 4. Thai Language Support
- **Font**: Sarabun (Google Font) - excellent Thai and English support
- **Content**: All user-facing text in Thai
- **Fallback**: Inter font for enhanced English readability

## Brand Colors

```css
Navy Blue (Primary):    #1a3a6b
Red (Accent):          #dc2626
White (Background):    #ffffff
Gray (Neutral):        #f8f9fa, #f3f3f5
```

## Component Details

### HomePage.tsx
- **Sections**: Hero, About, Stats, Services, Projects Preview, Certifications
- **Content**: All in Thai language
- **Stats Counter**: 500+ projects, 25+ years, 100+ engineers, 99% satisfaction
- **CTA Buttons**: Navigate to services section and contact page

### ProjectsPage.tsx
- **Filtering**: By category (All, Commercial, Industrial, etc.)
- **Grid Layout**: Responsive 1-3 columns
- **Project Cards**: Image, category badge, title, description
- **Data Source**: `/src/data/projects.ts`

### ContactPage.tsx
- **Form Fields**: Name, Phone, Email, Company, Message
- **Validation**: Required fields marked with *
- **Submit Handling**: Simulated submission with success message
- **Contact Methods**: Quick access cards for Phone, LINE, Facebook, Email
- **Map**: Embedded Google Maps iframe

### Navbar.tsx
- **Fixed Position**: Sticky at top with backdrop blur
- **Scroll Effect**: Shadow appears on scroll
- **Smart Navigation**: Detects current page and adjusts scroll behavior
- **Mobile Responsive**: Slide-down menu with AnimatePresence

### FloatingContactBar.tsx
- **Desktop**: Right-side vertical bar with expand-on-hover labels
- **Mobile**: Bottom horizontal grid
- **Links**:
  - Phone: `tel:+66812345678`
  - LINE: `https://line.me/ti/p/~ntpelectric`
  - Facebook: `https://facebook.com/ntpelectric`
  - Email: `mailto:info@ntpelectric.com`

## Data Structure

### projects.ts
```typescript
interface Project {
  id: number;
  title: string;          // English
  titleTh: string;        // Thai
  category: string;       // English (for filtering)
  categoryTh: string;     // Thai (for display)
  image: string;          // Unsplash URL
  description: string;    // English
  descriptionTh: string;  // Thai
}
```

## SEO Considerations

### Meta Information
- **Homepage**: "NTP Electric and Engineering - ความเป็นเลิศด้านวิศวกรรมในทุกโครงการ"
- **Projects**: "โครงการทั้งหมด - NTP Electric and Engineering"
- **Contact**: "ติดต่อเรา - NTP Electric and Engineering"

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Semantic sections with IDs
- Alt text for all images
- Descriptive link text

## Performance Optimizations

1. **Images**: Using ImageWithFallback component with Unsplash CDN
2. **Animations**: `viewport: { once: true }` prevents re-animation
3. **Code Splitting**: React Router handles automatic code splitting
4. **Lazy Loading**: Images loaded on-demand
5. **Smooth Scrolling**: Native CSS smooth scroll with offset calculation

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features Used**:
  - CSS Grid & Flexbox
  - CSS Custom Properties
  - Intersection Observer (via Motion)
  - ES6+ JavaScript

## Future Enhancements

### Easy Next.js Conversion
The project structure mirrors Next.js App Router:
- `/app/pages/` → `/app/` (Next.js)
- React Router → Next.js routing
- Motion → Already compatible
- Components are already modular

### Potential Additions
1. **CMS Integration**: For easy content updates
2. **Multi-language**: EN/TH language switcher
3. **Blog Section**: Company news and articles
4. **Project Details**: Individual project pages with full descriptions
5. **Team Section**: Meet the engineers
6. **Testimonials**: Client reviews and case studies
7. **Analytics**: Google Analytics / Plausible
8. **Contact Form Backend**: Real email integration (e.g., SendGrid, EmailJS)

## Development Notes

### Running the Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Adding New Projects
1. Open `/src/data/projects.ts`
2. Add new project object to `projects` array
3. Include both English and Thai translations
4. Use Unsplash for professional images

### Modifying Colors
Edit `/src/styles/theme.css`:
- `--ntp-navy`: Primary navy color
- `--ntp-red`: Accent red color
- Update Tailwind classes throughout components

### Updating Contact Information
Edit contact details in:
- `FloatingContactBar.tsx`
- `ContactPage.tsx`
- `NewFooter.tsx`

## Credits

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Sarabun, Inter)
- **Images**: Unsplash (via API)

---

**Built with ❤️ for NTP Electric and Engineering Co., Ltd.**
