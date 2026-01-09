# Hostinger Deployment Guide for Adama AI Lab

This guide will help you deploy the Adama AI Lab website to Hostinger hosting.

## Prerequisites

- Hostinger account with Node.js hosting support
- FTP/SFTP access to your Hostinger account
- Domain configured (e.g., adamaailabs.com)
- Git installed locally

## Deployment Options

Hostinger supports two main deployment methods:

### Option 1: Node.js Application (Recommended)

#### Step 1: Prepare Your Application

1. **Install dependencies locally:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

3. **Test the production build locally:**
```bash
npm run build
npm run start
```

4. **Create a production-ready package:**
```bash
npm ci --production
npm run build
```

#### Step 2: Upload to Hostinger

1. **Connect via SFTP** to your Hostinger account
   - Host: Your Hostinger FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload the following files/folders:**
   - `.next/` (entire folder)
   - `node_modules/` (entire folder)
   - `public/` (entire folder)
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `.env.local` (your environment variables)

#### Step 3: Configure Node.js in Hostinger

1. Log in to your Hostinger control panel (hPanel)
2. Navigate to **Advanced** → **Node.js**
3. Click **Create Application**
4. Configure:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/public_html` or your chosen directory
   - **Application URL**: Your domain
   - **Application startup file**: `node_modules/next/dist/bin/next`
   - **Application startup command**: `start`
   - **Environment variables**: Add your variables from `.env.local`

5. Click **Create** and wait for the application to start

#### Step 4: Set Up Domain

1. In hPanel, go to **Domains** → **DNS Zone Editor**
2. Ensure your domain points to your Node.js application
3. Wait for DNS propagation (can take up to 48 hours)

---

### Option 2: Static Export (Alternative)

If Hostinger doesn't support Node.js or you prefer a static site:

#### Step 1: Update Configuration

Edit `next.config.ts` and change:
```typescript
output: 'standalone',
```
to:
```typescript
output: 'export',
```

#### Step 2: Build Static Site

```bash
npm run build
```

This creates an `out/` directory with static files.

#### Step 3: Upload via FTP

1. Connect to Hostinger via FTP
2. Upload all files from the `out/` directory to `/public_html/`
3. Your site should now be live!

**Note:** Static export has limitations:
- API routes won't work (email functionality will be disabled)
- No server-side rendering
- No dynamic routes

---

## Environment Variables Setup

### Required Variables

Create a `.env.local` file with:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=touradam3@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Getting Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up/login
3. Navigate to **API Keys**
4. Create a new API key
5. Copy and paste into `.env.local`

### Verifying Domain with Resend

For production emails from your domain:

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., adamaailabs.com)
3. Add the provided DNS records to your Hostinger DNS settings
4. Verify the domain
5. Update `FROM_EMAIL` to use your verified domain

---

## Mobile Optimization

The site is already optimized for mobile with:

✅ Responsive Tailwind CSS classes
✅ Mobile-first design approach
✅ Viewport meta tags configured
✅ Touch-friendly button sizes
✅ Optimized fonts with `display: swap`
✅ Compressed images
✅ Fast loading times

### Testing Mobile Responsiveness

1. **Chrome DevTools:**
   - Press F12
   - Click device toolbar icon (or Ctrl+Shift+M)
   - Test different devices

2. **Real Device Testing:**
   - Access your site from your phone
   - Test the waitlist form
   - Verify all buttons are clickable
   - Check text readability

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Waitlist form is accessible
- [ ] Form submission works (check email)
- [ ] Mobile view is responsive
- [ ] All links work
- [ ] SSL certificate is active (HTTPS)
- [ ] Meta tags are correct (view page source)
- [ ] Site speed is good (use PageSpeed Insights)

---

## Troubleshooting

### Issue: Site doesn't load

**Solution:**
- Check Node.js application status in hPanel
- Verify startup command is correct
- Check application logs in hPanel

### Issue: Emails not sending

**Solution:**
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for error logs
- Ensure `FROM_EMAIL` uses a verified domain
- Test with a verified email address first

### Issue: Mobile layout broken

**Solution:**
- Clear browser cache
- Check if CSS files are loading
- Verify responsive classes in code
- Test in different browsers

### Issue: 404 errors

**Solution:**
- Check file paths are correct
- Ensure `.next` folder was uploaded
- Verify `next.config.ts` settings
- Check Application root path in hPanel

---

## Performance Optimization

For better performance:

1. **Enable caching** in Hostinger
2. **Use CDN** if available
3. **Enable Gzip compression**
4. **Optimize images** before upload
5. **Monitor site speed** with Google PageSpeed Insights

---

## Security Best Practices

1. ✅ Keep dependencies updated: `npm update`
2. ✅ Use environment variables for sensitive data
3. ✅ Enable HTTPS (SSL certificate)
4. ✅ Regular backups
5. ✅ Monitor error logs

---

## Support

### Hostinger Support
- Knowledge Base: https://support.hostinger.com
- Live Chat: Available 24/7 in hPanel
- Email: support@hostinger.com

### Project Issues
- Email: touradam3@gmail.com
- Check application logs in Hostinger hPanel

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server (locally)
npm run start

# Production build with clean install
npm ci
npm run build

# Check for outdated packages
npm outdated

# Update packages
npm update
```

---

## File Structure for Deployment

```
/public_html/
├── .next/                 # Next.js build output
├── node_modules/          # Dependencies
├── public/                # Static assets
├── .env.local            # Environment variables
├── package.json          # Project metadata
├── package-lock.json     # Dependency lock file
└── next.config.ts        # Next.js configuration
```

---

**Deployed Successfully? 🎉**

Your Adama AI Lab site should now be live and fully optimized for mobile devices!

Visit your domain and test the waitlist form.


