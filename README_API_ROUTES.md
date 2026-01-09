# API Routes Configuration

## 📁 Directory Structure

### `server-only-code/api/` 
This directory contains API routes that **only work with server hosting** (Hostinger, Vercel, etc.).

**Important:** This folder is located **outside the `app/` directory** to completely exclude it from GitHub Pages static export builds.

---

## 🌐 Deployment Configurations

### GitHub Pages (Static Site)
- **Folder:** `app/api-server-only/` is **excluded** from build
- **Email functionality:** ❌ Does NOT work (static site, no server)
- **How it works:** Next.js ignores folders not named `api` during static export
- **Build output:** `out/` directory contains only static HTML/CSS/JS

### Hostinger / Vercel (Server Hosting)
- **Folder:** Rename `api-server-only` to `api` for server deployments
- **Email functionality:** ✅ Works fully
- **How it works:** Server-side rendering with API route support
- **Build output:** Node.js application with API endpoints

---

## 🔄 Switching Between Deployment Types

### For GitHub Pages (Current Setup):
```bash
# API routes are stored in: server-only-code/api/
# (Outside the app/ directory, not included in build)
# Static export works, emails don't work
npm run build  # Creates out/ directory
```

### For Hostinger / Server Hosting:
```bash
# 1. Move the API folder back into app:
mv server-only-code/api app/api

# 2. Update next.config.ts:
# Change: output: 'export'
# To: output: 'standalone'

# 3. Build for server:
npm run build  # Creates .next/ directory

# 4. Deploy to Hostinger with Node.js hosting
```

---

## ⚠️ Why This Setup?

### The Problem:
- Next.js `output: 'export'` cannot include API routes
- GitHub Pages only supports static files
- API routes require a server to run

### The Solution:
- Move `app/api/` to `server-only-code/api/` (outside app directory)
- Next.js completely ignores files outside `app/` directory
- Email functionality code is preserved but not built
- GitHub Pages deployment succeeds

---

## 📧 Email Functionality Status

### On GitHub Pages:
- ❌ Form submission will fail
- ❌ No emails sent
- ❌ API routes don't exist in deployed site
- ✅ Form still displays correctly

### Alternatives for GitHub Pages:

1. **EmailJS** (Recommended)
   - https://www.emailjs.com/
   - Sends emails from browser
   - Free tier available
   - No server required

2. **Formspree**
   - https://formspree.io/
   - Simple form backend
   - Easy integration

3. **Deploy to Hostinger**
   - Full API route support
   - Server-side email functionality
   - Recommended for production

---

## 🛠️ Files Affected

### API Route (Preserved):
```
server-only-code/api/waitlist/route.ts
```
This file contains the email sending logic for:
- Admin notifications to touradam3@gmail.com
- User confirmation emails
- Uses Resend API

### Environment Variables Needed (Server Only):
```env
RESEND_API_KEY=re_xxxxx
FROM_EMAIL=noreply@yourdomain.com  
ADMIN_EMAIL=touradam3@gmail.com
```

---

## 📝 Summary

| Feature | GitHub Pages | Hostinger |
|---------|-------------|-----------|
| **API Folder** | `server-only-code/api/` | `app/api/` |
| **Output** | `export` | `standalone` |
| **Email** | ❌ No | ✅ Yes |
| **Cost** | Free | Paid |
| **Update** | Automatic | Manual |

---

## 🚀 Current Status

✅ Configured for **GitHub Pages** deployment
- API routes excluded from build
- Static site export working
- Email functionality preserved in code (for future Hostinger deployment)
- Automatic deployment on push to main

---

*Last Updated: January 9, 2026*
*Configuration: GitHub Pages (Static Export)*

