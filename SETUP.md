# A-dama AI Labs Website - Setup Guide

## Project Complete! 🎉

Your A-dama AI Labs website has been successfully built with all features implemented.

## What's Been Built

### ✅ Complete Feature List

1. **Project Foundation**
   - Next.js 14 with App Router and TypeScript
   - Tailwind CSS v4 with custom color system
   - shadcn/ui components integrated
   - Framer Motion for animations
   - Full responsive design

2. **Design System**
   - Custom color palette (Charcoal, AI Blue, Energy Orange)
   - Inter & Plus Jakarta Sans fonts
   - Consistent spacing and typography
   - Mobile-first responsive breakpoints

3. **Pages Implemented**
   - ✅ Home page with dual CTAs
   - ✅ Learn AI (Student track)
   - ✅ Build With AI (Founder track)
   - ✅ About page
   - ✅ Contact page with functional form
   - ✅ Privacy Policy
   - ✅ Terms of Service

4. **Components Library**
   - Navbar with mobile menu
   - Footer with links
   - Hero sections
   - Feature cards
   - Path cards (dual journey)
   - CTA sections
   - Animated wrappers
   - And more...

5. **Functionality**
   - Fully functional contact form
   - Email integration with Resend
   - Role-based form routing
   - Toast notifications
   - Form validation

6. **SEO & Performance**
   - Metadata configuration
   - Open Graph tags
   - Sitemap.xml
   - Robots.txt
   - Manifest for PWA support
   - Image optimization
   - Code splitting

## Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for email functionality
# Get your API key from https://resend.com
RESEND_API_KEY=your_resend_api_key_here

# Contact form recipient email
CONTACT_EMAIL=hello@adamaailabs.com
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## Email Setup (Important!)

The contact form uses Resend for email delivery. To get it working:

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your domain (or use their test domain for development)
4. Get your API key from the dashboard
5. Add it to `.env.local` as `RESEND_API_KEY`
6. Update the `from` field in `app/api/contact/route.ts` with your verified domain

**For Development:** You can use Resend's test domain `onboarding@resend.dev` which is already configured.

## Project Structure

```
adama-ai-labs/
├── app/                      # Next.js pages
│   ├── page.tsx             # Home
│   ├── learn-ai/            # Student track
│   ├── build-with-ai/       # Founder track
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── api/contact/         # Email API
│   └── layout.tsx           # Root layout
├── components/              # Reusable components
│   ├── ui/                  # shadcn components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ... more
├── data/                    # Content data
│   ├── courses.ts           # Student courses
│   ├── services.ts          # Business services
│   ├── site-config.ts       # Site configuration
│   └── ... more
└── lib/                     # Utilities
```

## Customization Guide

### Update Content

All content is structured in `/data` files:

- **Courses:** Edit `data/courses.ts`
- **Services:** Edit `data/services.ts`
- **Site Info:** Edit `data/site-config.ts`
- **Case Studies:** Edit `data/case-studies.ts`
- **Testimonials:** Edit `data/testimonials.ts`

### Update Colors

Edit `app/globals.css`:

```css
:root {
  --charcoal: 26 26 26;
  --ai-blue: 35 116 242;
  --energy-orange: 247 165 54;
  --soft-gray: 245 245 247;
}
```

### Update Social Links

Edit `data/site-config.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/your-profile",
    icon: "Linkedin",
  },
  // ... add more
];
```

## Deployment Checklist

### Before Deploying:

1. ✅ Test contact form locally
2. ⚠️ Set up Resend account and verify domain
3. ⚠️ Update `RESEND_API_KEY` in production environment
4. ⚠️ Update `from` email in `app/api/contact/route.ts`
5. ⚠️ Update social media links in `data/site-config.ts`
6. ⚠️ Update contact information in `data/site-config.ts`
7. ⚠️ Replace placeholder URLs with actual domain
8. ⚠️ Add real testimonials and case studies
9. ⚠️ Add Google Analytics (optional)
10. ⚠️ Add favicon and OG images to `public/`

### Deploy to Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

## Testing

### Build Production Version:
```bash
npm run build
```

### Run Production Build Locally:
```bash
npm run start
```

## Pages Overview

### Home Page (`/`)
- Hero with dual CTAs
- What We Do section
- Choose Your Path cards
- Why A-dama AI Labs
- Featured Offerings
- Get Started CTA

### Learn AI (`/learn-ai`)
- Student-focused hero
- Course modules
- Course formats
- Student outcomes
- Testimonial
- Enrollment CTA

### Build With AI (`/build-with-ai`)
- Founder-focused hero
- Services overview
- Process timeline
- Case studies
- Testimonial
- Book a call CTA

### About (`/about`)
- Mission & vision
- Our story
- Philosophy & approach
- Background & expertise
- Who we serve

### Contact (`/contact`)
- Contact form with role selector
- Contact information
- Quick links
- Next steps section

## Color System

- **Charcoal (#1A1A1A):** Primary brand color, main text
- **AI Blue (#2374F2):** Student track accent
- **Energy Orange (#F7A536):** Founder track accent
- **Soft Gray (#F5F5F7):** Background sections

## Support

If you need help or have questions:
- Check the README.md for detailed information
- Review the code comments
- Contact: hello@adamaailabs.com

## Next Steps

1. ✅ Development server is ready to run
2. ⚠️ Set up Resend account for email functionality
3. ⚠️ Customize content in `/data` files
4. ⚠️ Add your branding (logo, favicon, OG images)
5. ⚠️ Update social media links
6. ⚠️ Test on mobile devices
7. ⚠️ Deploy to production

## Build Status

✅ **Build Successful!**

The project has been built and tested. No errors found.

---

**Built with ❤️ for A-dama AI Labs**

