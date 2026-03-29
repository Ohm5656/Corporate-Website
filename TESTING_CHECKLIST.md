# Testing Checklist - NTP Electric Website

## 🧪 Pre-Launch Testing

### Navigation Testing

#### Homepage (/)
- [ ] Clicking "หน้าแรก" scrolls to hero section
- [ ] Clicking "เกี่ยวกับเรา" scrolls to about section
- [ ] Clicking "บริการ" scrolls to services section
- [ ] Clicking "โครงการ" scrolls to projects preview section
- [ ] Clicking "ใบรับรอง" scrolls to certifications section
- [ ] Clicking "ติดต่อเรา" navigates to /contact page
- [ ] "ดูโครงการทั้งหมด" button navigates to /projects page
- [ ] Hero CTA buttons work (บริการของเรา, ติดต่อเรา)

#### Projects Page (/projects)
- [ ] Page loads correctly
- [ ] All 9 projects display
- [ ] Category filter shows all options
- [ ] Clicking "ทั้งหมด" shows all projects
- [ ] Clicking category filters projects correctly
- [ ] Project count updates when filtering
- [ ] Navbar links still work from this page
- [ ] Clicking navbar items returns to homepage sections

#### Contact Page (/contact)
- [ ] Page loads correctly
- [ ] Form displays all fields
- [ ] Required fields marked with *
- [ ] Form validation works
- [ ] Submit button changes state when submitting
- [ ] Success message appears after submit
- [ ] Form clears after successful submit
- [ ] Quick contact cards link correctly
- [ ] Google Maps embed loads

### Responsive Testing

#### Desktop (1920px)
- [ ] Layout looks professional
- [ ] Right-side floating contact bar visible
- [ ] All images load properly
- [ ] No horizontal scrolling
- [ ] Hover effects work on cards
- [ ] Navbar stays fixed on scroll

#### Laptop (1366px)
- [ ] Layout adjusts appropriately
- [ ] 3-column grids display correctly
- [ ] No content overflow
- [ ] Navigation accessible

#### Tablet (768px)
- [ ] 2-column grids work
- [ ] Images scale properly
- [ ] Touch targets adequate (min 44px)
- [ ] Navbar still functional

#### Mobile (375px)
- [ ] Hamburger menu appears
- [ ] Bottom contact bar visible
- [ ] Single column layouts
- [ ] Text readable without zooming
- [ ] Forms easy to complete
- [ ] Hero text scales appropriately
- [ ] No horizontal scrolling

### Floating Contact Bar

#### Desktop
- [ ] Bar appears on right side
- [ ] Icons visible
- [ ] Hover reveals labels
- [ ] Smooth expand animation
- [ ] All 4 buttons present (Phone, LINE, Facebook, Email)

#### Mobile
- [ ] Bar appears at bottom
- [ ] 4 buttons in grid layout
- [ ] Icons and text visible
- [ ] Touch targets adequate
- [ ] Doesn't overlap content

### Link Testing

#### External Links
- [ ] Phone: `tel:+66812345678` - Opens phone dialer
- [ ] LINE: Opens LINE app/web
- [ ] Facebook: Opens Facebook page (new tab)
- [ ] Email: `mailto:info@ntpelectric.com` - Opens email client

#### Internal Links
- [ ] Logo links to homepage (/)
- [ ] Footer links scroll to sections
- [ ] "View All Projects" goes to /projects
- [ ] Contact buttons go to /contact

### Animation Testing

#### Scroll Animations
- [ ] Sections fade in when scrolling down
- [ ] Cards stagger animate sequentially
- [ ] Animations smooth (no jank)
- [ ] `viewport: { once: true }` prevents re-triggering
- [ ] Page load animations work

#### Interactive Animations
- [ ] Navbar shadow appears on scroll
- [ ] Buttons have hover states
- [ ] Cards lift on hover
- [ ] Mobile menu slides in/out smoothly

### Content Testing

#### Text Display
- [ ] Thai text renders correctly
- [ ] Sarabun font loads
- [ ] No text overflow
- [ ] Line heights comfortable
- [ ] Contrast ratio adequate (WCAG AA)

#### Images
- [ ] All images load
- [ ] Images are appropriate size
- [ ] ImageWithFallback component works
- [ ] Alt text present
- [ ] No broken image icons

### Form Testing

#### Contact Form
- [ ] Name field accepts input
- [ ] Phone field accepts numbers
- [ ] Email field validates format
- [ ] Company field optional
- [ ] Message textarea expands
- [ ] Submit with missing required field shows validation
- [ ] Submit with valid data shows success message
- [ ] Form resets after successful submit

### Performance Testing

#### Load Times
- [ ] Initial page load < 3 seconds
- [ ] Subsequent navigation instant
- [ ] Images load progressively
- [ ] No flash of unstyled content (FOUC)

#### Smooth Scrolling
- [ ] Scrolling animations smooth at 60fps
- [ ] No scroll jank
- [ ] Offset calculation correct (80px navbar)
- [ ] Hash navigation works (#section)

### Browser Compatibility

#### Chrome
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

#### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

#### Safari (Desktop)
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct
- [ ] Backdrop blur works

#### Safari (iOS)
- [ ] Touch interactions work
- [ ] Bottom bar doesn't overlap iOS UI
- [ ] Smooth scrolling works
- [ ] Forms usable

#### Edge
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout correct

### SEO Testing

#### Meta Tags
- [ ] Page title appropriate for each route
- [ ] Meta descriptions present
- [ ] Open Graph tags (optional)

#### Semantic HTML
- [ ] H1 tag on each page
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Sections use semantic tags
- [ ] Links have descriptive text

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA labels where needed

### Mobile-Specific Testing

#### iOS Safari
- [ ] Fonts render correctly
- [ ] Touch targets 44px minimum
- [ ] Viewport meta tag working
- [ ] No zoom on input focus
- [ ] Bottom bar doesn't cover content

#### Android Chrome
- [ ] Layout correct
- [ ] Touch interactions work
- [ ] No horizontal scroll
- [ ] Forms functional

### Edge Cases

#### Long Content
- [ ] Long project descriptions don't break layout
- [ ] Long names in form don't overflow
- [ ] Many projects still display correctly

#### Slow Connection
- [ ] Images have loading states
- [ ] Forms don't double-submit
- [ ] Page still usable while loading

#### No JavaScript
- [ ] Basic content visible
- [ ] Links work
- [ ] Graceful degradation

## 🔍 Bug Report Template

If you find issues, document them:

```
**Page**: (e.g., Homepage, Projects, Contact)
**Device**: (e.g., iPhone 13, Desktop Chrome)
**Issue**: (Brief description)
**Steps to Reproduce**:
1. Go to...
2. Click on...
3. See error...
**Expected**: (What should happen)
**Actual**: (What actually happens)
**Screenshot**: (If applicable)
```

## ✅ Pre-Production Checklist

Before deploying to production:

### Content Review
- [ ] All Thai translations reviewed
- [ ] Company information accurate
- [ ] Contact details correct
- [ ] Project information current
- [ ] No placeholder text remaining

### Configuration
- [ ] Update all phone numbers
- [ ] Update all email addresses
- [ ] Update LINE ID
- [ ] Update Facebook URL
- [ ] Update office address
- [ ] Configure Google Maps coordinates

### Technical
- [ ] Production build works (`npm run build`)
- [ ] No console errors
- [ ] All external links tested
- [ ] Forms submit to correct endpoint
- [ ] Analytics tracking installed (optional)

### Performance
- [ ] Images optimized
- [ ] Bundle size reasonable
- [ ] Load time acceptable
- [ ] Lighthouse score > 90 (optional)

## 📊 Testing Record

| Date | Tester | Device | Issues Found | Status |
|------|--------|--------|--------------|--------|
| | | | | |
| | | | | |
| | | | | |

---

## 🎯 Sign-Off

Once all tests pass:

- [ ] Desktop testing complete
- [ ] Mobile testing complete
- [ ] Cross-browser testing complete
- [ ] Accessibility checks passed
- [ ] Performance acceptable
- [ ] Content reviewed
- [ ] Ready for production deployment

**Tested by**: _______________  
**Date**: _______________  
**Approved**: _______________

---

**Note**: This checklist ensures a thorough review of all website functionality before launch. Complete all sections to guarantee a professional, bug-free user experience.
