# A-dama AI Labs Website

A modern, dual-journey website built with Next.js 14, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Dual User Journeys**: Separate paths for students (Learn AI) and founders (Build With AI)
- **Rich Animations**: Scroll-triggered animations with Framer Motion
- **Fully Responsive**: Mobile-first design with smooth transitions
- **Contact Form**: Functional email form with Resend integration
- **Modern UI**: Built with shadcn/ui components and custom design system
- **SEO Optimized**: Metadata, Open Graph tags, and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email**: Resend
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd adama-ai-labs
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for sending emails
# Get your API key from https://resend.com
RESEND_API_KEY=your_resend_api_key_here

# Contact form recipient email
CONTACT_EMAIL=touradam3@gmail.com
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
adama-ai-labs/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── learn-ai/            # Student track page
│   ├── build-with-ai/       # Founder track page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── api/contact/         # Contact form API route
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles & design tokens
├── components/              # Reusable React components
│   ├── ui/                  # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeatureCard.tsx
│   ├── PathCard.tsx
│   ├── CTASection.tsx
│   ├── SectionWrapper.tsx
│   └── AnimatedText.tsx
├── data/                    # Structured content data
│   ├── courses.ts
│   ├── services.ts
│   ├── site-config.ts
│   ├── case-studies.ts
│   └── testimonials.ts
└── lib/                     # Utility functions
    └── utils.ts
```

## Design System

### Colors

- **Deep Charcoal**: `#1A1A1A` - Primary text and brand color
- **AI Blue**: `#2374F2` - Student track accent
- **Energy Orange**: `#F7A536` - Founder track accent
- **Soft Gray**: `#F5F5F7` - Background sections

### Typography

- **Headings**: Plus Jakarta Sans
- **Body**: Inter
- **Mobile-first**: Responsive font scaling

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Pages

- **Home (`/`)**: Overview with dual CTAs and featured offerings
- **Learn AI (`/learn-ai`)**: Student courses and education track
- **Build With AI (`/build-with-ai`)**: Business services and automation
- **About (`/about`)**: Mission, story, and team background
- **Contact (`/contact`)**: Contact form with role selector

## Email Configuration

The contact form uses [Resend](https://resend.com) for email delivery.

1. Sign up for a Resend account
2. Verify your domain or use their test domain
3. Get your API key
4. Add it to `.env.local` as `RESEND_API_KEY`
5. Update the `from` field in `app/api/contact/route.ts` with your verified domain

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This is a standard Next.js 14 app and can be deployed to any platform that supports Node.js.

## Customization

### Update Content

Edit the data files in `/data`:
- `courses.ts` - Student course information
- `services.ts` - Business service offerings
- `site-config.ts` - Navigation, contact info, social links
- `case-studies.ts` - Client success stories
- `testimonials.ts` - Client testimonials

### Update Colors

Edit `app/globals.css` to change the color scheme:
```css
:root {
  --charcoal: 26 26 26;
  --ai-blue: 35 116 242;
  --energy-orange: 247 165 54;
  --soft-gray: 245 245 247;
}
```

### Update Metadata

Edit page-specific metadata in each page's `metadata` export or the root layout.

## Performance

- Server-side rendering with Next.js
- Image optimization with next/image
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 A-dama AI Labs. All rights reserved.

## Support

For questions or support, contact touradam3@gmail.com
