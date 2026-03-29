# NTP Electric Website - Implementation Guide

## ✅ What's Been Implemented

### 1. One-Page Landing Homepage
- **Route**: `/`
- **Sections** (in order):
  1. Hero Section - Full-screen with background image
  2. About Section - Company overview with stats
  3. Stats Bar - Key numbers (500+ projects, 25+ years, etc.)
  4. Services Section - 6 service cards with icons
  5. Projects Preview - 6 featured projects
  6. Certifications Section - ISO certifications and accreditations

### 2. Full Projects Page
- **Route**: `/projects`
- **Features**:
  - All 9 projects displayed
  - Category filtering (All, Commercial, Industrial, etc.)
  - Sticky filter bar
  - Responsive grid layout

### 3. Contact Page
- **Route**: `/contact`
- **Features**:
  - Contact form with validation
  - Quick contact cards (Phone, LINE, Facebook, Email)
  - Office information with hours
  - Google Maps embed
  - Success message on submit

### 4. Global Components

#### Navbar
- Smooth scroll navigation for homepage sections
- Cross-page navigation support
- Mobile hamburger menu
- Sticky with scroll shadow effect

#### Floating Contact Bar
- **Desktop**: Fixed right-side vertical bar
- **Mobile**: Fixed bottom horizontal bar
- Always visible across all pages
- Hover effects and expand animations

#### Footer
- Company information
- Quick links with smooth scroll
- Service list
- Contact details
- Social links

## 🎨 Design System

### Colors
```css
Primary Navy:  #1a3a6b
Accent Red:    #dc2626
White:         #ffffff
Gray Shades:   #f8f9fa, #f3f3f5, #e5e7eb
```

### Typography
- **Font Family**: Sarabun (Thai + English), Inter (fallback)
- **Headings**: Semibold to Bold weights
- **Body**: Regular weight
- **All Content**: Thai language

### Spacing
- **Section Padding**: py-20 (80px vertical)
- **Container**: max-w-7xl mx-auto
- **Grid Gaps**: gap-8 (32px)
- **Navbar Height**: 80px (h-20)

## 🚀 Navigation Flow

### Homepage Navigation
```
User clicks "บริการ" → Smooth scroll to #services section
User clicks "โครงการ" → Smooth scroll to #projects section
User clicks "ติดต่อเรา" → Navigate to /contact page
```

### Other Pages Navigation
```
User on /projects clicks "บริการ" → Navigate to /#services → Auto-scroll
User on /contact clicks "หน้าแรก" → Navigate to /#home → Auto-scroll
```

### Floating Contact Bar
```
Phone Icon → tel:+66812345678
LINE Icon → https://line.me/ti/p/~ntpelectric
Facebook Icon → https://facebook.com/ntpelectric
Email Icon → mailto:info@ntpelectric.com
```

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Laptops
xl:  1280px - Desktops
```

### Key Responsive Changes
- **Navbar**: Switches to hamburger menu below `lg` (1024px)
- **Floating Bar**: Vertical (desktop) → Horizontal bottom (mobile) at `lg`
- **Grid Layouts**: 3 columns → 2 → 1 based on breakpoints
- **Font Sizes**: Scaled down on smaller screens

## 🎬 Animation Details

### Motion Variants

#### Fade In Up (Most Sections)
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Stagger Cards
```typescript
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Scroll Offset
- All smooth scrolling accounts for **80px navbar height**
- Calculated dynamically in scroll functions

## 📂 File Organization

### Component Hierarchy
```
App.tsx (Router)
├── Navbar (sticky)
├── FloatingContactBar (fixed)
├── Routes
│   ├── HomePage (sections)
│   ├── ProjectsPage (grid + filter)
│   └── ContactPage (form + info)
├── Footer
└── ScrollToTop (FAB button)
```

### Data Flow
```
projects.ts → ProjectCard → ProjectsPage
                          → HomePage (6 items)
```

## 🔧 Customization Guide

### Update Contact Information
1. **FloatingContactBar.tsx** - Line 12-23 (contact methods)
2. **ContactPage.tsx** - Line 57-68 (contact methods)
3. **NewFooter.tsx** - Line 48-71 (footer contacts)

### Add/Remove Projects
1. Open `/src/data/projects.ts`
2. Edit the `projects` array
3. Ensure both Thai (`titleTh`, `descriptionTh`) and English fields are filled
4. Categories must match `projectCategories` array

### Change Colors
**Method 1: Tailwind Classes**
- Replace `bg-[#1a3a6b]` with `bg-[YOUR_COLOR]`
- Replace `bg-[#dc2626]` with `bg-[YOUR_COLOR]`

**Method 2: Theme Variables** (Recommended)
- Edit `/src/styles/theme.css`
- Update `--ntp-navy` and `--ntp-red` values
- Use `var(--ntp-navy)` in components

### Modify Animations
Edit Motion props in components:
```typescript
// Slower animation
transition={{ duration: 1.0 }}

// No animation
remove initial/whileInView props

// Different direction
initial={{ opacity: 0, x: -50 }} // slide from left
```

## 🌐 Deployment Checklist

### Before Deploying

1. **Update Contact Info**
   - [ ] Phone numbers
   - [ ] Email addresses
   - [ ] LINE ID
   - [ ] Facebook page URL
   - [ ] Office address

2. **Update Content**
   - [ ] Company description
   - [ ] Service details
   - [ ] Project information
   - [ ] Certification details

3. **Configure Maps**
   - [ ] Update Google Maps embed with actual location
   - [ ] Test map functionality

4. **Test Navigation**
   - [ ] All nav links work
   - [ ] Smooth scrolling functions correctly
   - [ ] Mobile menu opens/closes
   - [ ] Contact form submits

5. **Optimize Performance**
   - [ ] Compress images if needed
   - [ ] Test on mobile devices
   - [ ] Check loading times
   - [ ] Verify animations are smooth

### Build Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐛 Troubleshooting

### Smooth Scrolling Not Working
- Check that section IDs match nav links: `#home`, `#about`, `#services`, `#projects`, `#certifications`
- Verify navbar height offset (80px) in scroll calculations

### Images Not Loading
- Ensure `ImageWithFallback` component exists
- Check Unsplash URLs are valid
- Verify import paths are correct

### Mobile Menu Not Closing
- Check `setIsMobileMenuOpen(false)` is called on item click
- Verify `AnimatePresence` wraps mobile menu

### Contact Form Not Submitting
- Current implementation is a simulation
- To connect real backend, modify `handleSubmit` in `ContactPage.tsx`
- Consider services like EmailJS, SendGrid, or custom API

## 📞 Support

For questions or issues:
- Review `PROJECT_STRUCTURE.md` for architecture details
- Check component files for inline comments
- Refer to this guide for common tasks

---

**Ready to deploy! 🚀**
