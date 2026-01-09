# Deployment Guide for Hostinger

This guide will help you deploy the Adama AI Lab website to Hostinger.

## Prerequisites

1. A Hostinger hosting account
2. Node.js and npm installed locally
3. Git repository with your code

## Deployment Steps

### 1. Build the Static Site

```bash
# Install dependencies
npm install

# Build the production version
npm run build

# Export static files (if using Next.js static export)
# Note: You may need to add "output: 'export'" to next.config.js
```

### 2. Configure Next.js for Static Export

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### 3. Build the Static Files

After configuration:

```bash
npm run build
```

This will generate an `out` directory with all static files.

### 4. Upload to Hostinger

#### Option A: Via File Manager (Recommended for first deployment)

1. Log in to your Hostinger control panel
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Delete any existing files in the directory
5. Upload all files from the `out` directory to `public_html`
6. Upload the `.htaccess` file from the project root

#### Option B: Via FTP

1. Use an FTP client (FileZilla recommended)
2. Connect to your Hostinger account:
   - Host: Your domain or IP address
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21
3. Navigate to `public_html`
4. Upload all files from the `out` directory
5. Upload the `.htaccess` file

#### Option C: Via Git (Advanced)

1. SSH into your Hostinger account
2. Clone your repository
3. Run build commands
4. Copy files to `public_html`

### 5. Environment Variables

For the waitlist email functionality to work, you need to set up environment variables on Hostinger:

1. In Hostinger control panel, go to **Advanced** → **PHP Configuration**
2. Add the following environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `ADMIN_EMAIL`: touradam3@gmail.com
   - `FROM_EMAIL`: Your verified email address

**Note**: For static exports, API routes won't work. You'll need to either:
- Use a serverless function provider (Vercel, Netlify)
- Set up a separate backend API
- Use client-side form submission to a third-party service

### 6. Domain Configuration

1. Make sure your domain is pointing to Hostinger nameservers
2. If using HTTPS, enable SSL/TLS in Hostinger control panel
3. Force HTTPS (already configured in `.htaccess`)

### 7. Post-Deployment Checks

After deployment, verify:

- [ ] Website loads correctly at your domain
- [ ] All pages are accessible
- [ ] Mobile responsiveness works
- [ ] Forms submit properly (if API routes are configured)
- [ ] Images and assets load correctly
- [ ] HTTPS is working
- [ ] No console errors in browser

## File Structure on Hostinger

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ... (other static assets)
```

## Troubleshooting

### Issue: 404 Errors on Page Refresh

**Solution**: The `.htaccess` file should handle this. Ensure it's uploaded and mod_rewrite is enabled.

### Issue: Images Not Loading

**Solution**: Check that `images: { unoptimized: true }` is set in `next.config.js`.

### Issue: API Routes Not Working

**Solution**: Static exports don't support API routes. You need to:
1. Deploy to a platform that supports serverless functions (Vercel, Netlify)
2. Set up a separate backend
3. Use client-side form services like Formspree or EmailJS

### Issue: CSS Not Loading

**Solution**: Check that the `basePath` is correctly configured in `next.config.js` if deploying to a subdirectory.

## Performance Optimization

The `.htaccess` file includes:
- Gzip compression
- Browser caching
- Security headers

For additional optimization:
1. Enable Cloudflare (free tier) for CDN and caching
2. Optimize images before deployment
3. Minify CSS and JavaScript (handled by Next.js build)

## Continuous Deployment

For automatic deployments, consider:
1. Setting up a GitHub Actions workflow
2. Using Hostinger's Git deployment feature (if available)
3. Creating a deployment script

## Support

For Hostinger-specific issues:
- Visit Hostinger Help Center
- Contact Hostinger Support
- Check Hostinger Community Forums

For Next.js deployment issues:
- Visit Next.js Deployment Documentation
- Check Next.js GitHub Discussions

