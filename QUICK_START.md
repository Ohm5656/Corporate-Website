# Quick Start Guide - NTP Electric Website

## 🚀 Getting Started in 5 Minutes

### 1. Installation
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📋 Page Routes

| Route | Description |
|-------|-------------|
| `/` | One-page landing with all sections |
| `/projects` | Full projects list with filtering |
| `/contact` | Contact form and information |

## 🎯 Quick Tasks

### Add a New Project
**File**: `/src/data/projects.ts`

```typescript
{
  id: 10,
  title: 'Project Name',
  titleTh: 'ชื่อโครงการ',
  category: 'Commercial',
  categoryTh: 'พาณิชย์',
  image: 'https://images.unsplash.com/...',
  description: 'English description',
  descriptionTh: 'คำอธิบายภาษาไทย',
}
```

### Update Contact Phone
**Files to edit**:
1. `/src/app/components/FloatingContactBar.tsx` (Line 11)
2. `/src/app/components/NewFooter.tsx` (Line 50)
3. `/src/app/pages/ContactPage.tsx` (Line 59)

### Change Brand Colors
**File**: `/src/styles/theme.css`

```css
:root {
  --ntp-navy: #1a3a6b;    /* Change this */
  --ntp-red: #dc2626;     /* Change this */
}
```

Then update Tailwind classes in components:
- Replace `bg-[#1a3a6b]` with your new navy color
- Replace `bg-[#dc2626]` with your new red color

### Modify Homepage Sections
**File**: `/src/app/pages/HomePage.tsx`

The page is organized in order:
1. Hero Section (Line 56)
2. About Section (Line 107)
3. Stats Section (Line 174)
4. Services Section (Line 188)
5. Projects Preview (Line 229)
6. Certifications Section (Line 268)

### Update Footer Content
**File**: `/src/app/components/NewFooter.tsx`

- Company description: Line 53
- Contact information: Line 62-79
- Quick links: Line 91-109
- Services list: Line 120-125

## 🎨 Styling Reference

### Brand Colors
```
Navy:  #1a3a6b  (Primary)
Red:   #dc2626  (Accent)
White: #ffffff  (Background)
Gray:  #f3f3f5  (Light background)
```

### Common Tailwind Classes Used
```css
/* Containers */
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* Sections */
py-20 bg-white

/* Buttons */
bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md

/* Cards */
bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl

/* Grid Layouts */
grid md:grid-cols-2 lg:grid-cols-3 gap-8
```

## 🔧 Common Modifications

### Change Hero Text
**File**: `/src/app/pages/HomePage.tsx`

```tsx
<h1>ความเป็นเลิศด้านวิศวกรรม<br />ในทุกโครงการ</h1>
<p>โซลูชั่นด้านระบบไฟฟ้าและวิศวกรรมมืออาชีพ...</p>
```

### Adjust Animation Speed
**Any Motion component**:

```tsx
// Slower
transition={{ duration: 1.0 }}

// Faster
transition={{ duration: 0.3 }}

// No animation
Remove: initial, whileInView, transition props
```

### Change Number of Preview Projects
**File**: `/src/app/pages/HomePage.tsx` (Line 262)

```tsx
{projects.slice(0, 6).map(...)}  // Change 6 to desired number
```

## 📱 Testing Checklist

### Desktop (1920px+)
- [ ] Navigation works
- [ ] All sections visible
- [ ] Smooth scrolling
- [ ] Right-side contact bar appears
- [ ] Hover effects work

### Tablet (768px - 1024px)
- [ ] Layout adjusts properly
- [ ] 2-column grids work
- [ ] Navigation still accessible
- [ ] Touch targets adequate

### Mobile (< 768px)
- [ ] Hamburger menu opens/closes
- [ ] Bottom contact bar visible
- [ ] Single column layouts
- [ ] Text readable
- [ ] Forms easy to fill

## 🐛 Quick Troubleshooting

### Smooth Scroll Not Working
✅ Check section IDs: `#home`, `#about`, `#services`, `#projects`, `#certifications`  
✅ Verify navbar offset calculation (80px)

### Images Not Loading
✅ Check Unsplash URLs are valid  
✅ Verify ImageWithFallback import

### Mobile Menu Stuck Open
✅ Check `setIsMobileMenuOpen(false)` in click handlers

### Animations Janky
✅ Add `viewport={{ once: true }}` to Motion components  
✅ Reduce animation duration

### Routing Not Working
✅ Ensure App.tsx has `<Router>` wrapper  
✅ Check route paths match exactly

## 📚 Documentation

| File | Purpose |
|------|---------|
| `PROJECT_STRUCTURE.md` | Architecture and technical details |
| `IMPLEMENTATION_GUIDE.md` | Complete usage guide |
| `REFACTOR_SUMMARY.md` | What changed and why |
| `QUICK_START.md` | This file - quick reference |

## 🔗 Important Links

### External Services Used
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Images**: [Unsplash](https://unsplash.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Learning Resources
- **React Router**: https://reactrouter.com/
- **Motion**: https://motion.dev/docs/react-quick-start
- **Tailwind CSS**: https://tailwindcss.com/docs

## 📦 Build Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Create production build
npm run preview         # Preview production build locally
```

## 🎓 Project Structure (Quick Reference)

```
/src
├── /app
│   ├── App.tsx                    # Main app file
│   ├── /components
│   │   ├── Navbar.tsx             # Top navigation
│   │   ├── FloatingContactBar.tsx # Right/bottom bar
│   │   ├── NewFooter.tsx          # Footer
│   │   ├── ProjectCard.tsx        # Project display
│   │   └── SectionWrapper.tsx     # Animation wrapper
│   └── /pages
│       ├── HomePage.tsx           # Main landing (one-page)
│       ├── ProjectsPage.tsx       # All projects
│       └── ContactPage.tsx        # Contact form
├── /data
│   └── projects.ts                # Project data
└── /styles
    ├── fonts.css                  # Font imports
    ├── theme.css                  # Colors & variables
    └── index.css                  # Main stylesheet
```

## ⚡ Pro Tips

### Performance
- Keep images optimized (< 500KB each)
- Use `viewport={{ once: true }}` on animations
- Minimize custom CSS

### Maintenance
- All content in Thai (except company name)
- Keep project data in `projects.ts`
- Use component props for reusability

### Deployment
- Test production build before deploying
- Update all placeholder contact info
- Set up real email backend for contact form

---

## 🎉 You're Ready!

The website is fully functional and ready to use. Start by exploring the homepage at `/`, then check out the projects page and contact form.

**Need help?** Check the other documentation files or review component code for inline comments.

**Happy building!** 🚀
