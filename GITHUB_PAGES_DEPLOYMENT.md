# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment Setup

Your Adama AI Lab site is now configured to automatically deploy to GitHub Pages whenever you push to the `main` branch!

---

## ⚙️ What's Been Configured

### 1. GitHub Actions Workflow ✅
- File: `.github/workflows/deploy.yml`
- **Triggers:** Automatic deployment on every push to `main` branch
- **Manual trigger:** Can also be run manually from the GitHub Actions tab
- **Build process:** Installs dependencies, builds Next.js site, uploads to GitHub Pages
- **Deployment:** Automatically deploys to GitHub Pages after successful build

### 2. Next.js Configuration ✅
- Updated `next.config.ts` to use `output: 'export'`
- Generates static HTML files in the `out/` directory
- Optimized for GitHub Pages hosting

---

## 🔧 Enable GitHub Pages (One-Time Setup)

To complete the setup, you need to enable GitHub Pages in your repository:

### Steps:

1. **Go to your GitHub repository:**
   - https://github.com/Touradam/adama-ai-labs

2. **Navigate to Settings:**
   - Click on the **Settings** tab at the top of your repository

3. **Go to Pages section:**
   - In the left sidebar, click **Pages** (under "Code and automation")

4. **Configure Source:**
   - Under "Build and deployment"
   - **Source:** Select "GitHub Actions"
   - (This should be selected by default if the workflow file exists)

5. **Save and Wait:**
   - GitHub will automatically deploy your site
   - Wait 2-5 minutes for the first deployment
   - Your site will be live at: `https://touradam.github.io/adama-ai-labs/`
   - Or your custom domain if configured

---

## 🌐 Accessing Your Site

### Default URL:
```
https://touradam.github.io/adama-ai-labs/
```

### Custom Domain (Optional):
You can configure a custom domain (e.g., adamaailabs.com) in the Pages settings.

---

## 📊 Monitoring Deployments

### View Deployment Status:

1. **Go to the Actions tab** in your GitHub repository
2. You'll see all workflow runs listed
3. Green checkmark ✅ = Successful deployment
4. Red X ❌ = Failed deployment (click to see logs)

### Each deployment shows:
- Build logs
- Deployment status
- Time taken
- Commit that triggered the deployment

---

## ⚠️ Important Limitation: Email Functionality

### GitHub Pages = Static Site Only

**The waitlist form email functionality will NOT work on GitHub Pages** because:
- GitHub Pages only serves static HTML/CSS/JS files
- API routes (like `/api/waitlist`) require a server
- No server-side code execution is possible

### What This Means:

✅ **Will Work:**
- Homepage displays perfectly
- Form appears and looks correct
- All styling and animations
- Mobile responsiveness
- Navigation and links

❌ **Won't Work:**
- Form submission to send emails
- Admin notifications
- User confirmation emails
- Any server-side functionality

---

## 💡 Solutions for Email Functionality

If you need the email functionality to work, you have **three options:**

### Option 1: Use Hostinger (Recommended)
- Deploy to Hostinger as a Node.js application
- Follow the guide in `HOSTINGER_DEPLOYMENT.md`
- Email functionality will work fully
- Use GitHub Pages for preview/testing only

### Option 2: Use External Form Service
Replace the current form with a third-party service:
- **Formspree** (https://formspree.io)
- **Formspark** (https://formspark.io)
- **Google Forms**
- **Typeform**

### Option 3: Client-Side Email Service
Use a client-side email service:
- **EmailJS** (https://www.emailjs.com/)
- Sends emails directly from the browser
- No server required
- Limited features compared to Resend

---

## 🔄 Deployment Workflow

### Automatic Deployment Process:

```
1. You commit and push to main branch
   ↓
2. GitHub Actions workflow triggers automatically
   ↓
3. Workflow installs dependencies (npm ci)
   ↓
4. Workflow builds the site (npm run build)
   ↓
5. Static files generated in out/ directory
   ↓
6. Files uploaded to GitHub Pages
   ↓
7. Site is live! 🎉
```

### Time to Deploy:
- **Build time:** ~2-3 minutes
- **Deployment time:** ~30 seconds
- **Total time:** ~3-4 minutes per commit

---

## 📝 Making Updates

To update your site:

1. **Make changes locally**
2. **Test locally:** `npm run dev`
3. **Commit changes:** `git add . && git commit -m "Your message"`
4. **Push to GitHub:** `git push origin main`
5. **Wait 3-4 minutes** - Site automatically updates!

---

## 🐛 Troubleshooting

### Issue: Deployment Failed

**Check the Actions tab:**
1. Click on the failed workflow run
2. Click on the "build" job
3. Expand the step that failed
4. Read the error message

**Common fixes:**
- Fix any TypeScript errors in your code
- Fix any linting errors
- Ensure all dependencies are in `package.json`
- Check that `next.config.ts` is valid

### Issue: Site is Not Updating

**Solution:**
1. Go to the Actions tab
2. Verify the latest workflow completed successfully
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Wait a few more minutes (sometimes takes up to 10 minutes)
5. Check if you enabled GitHub Pages in Settings

### Issue: 404 Page Not Found

**Solution:**
1. Verify GitHub Pages is enabled in Settings → Pages
2. Check that Source is set to "GitHub Actions"
3. Wait for the deployment to complete
4. Check the correct URL (username.github.io/repository-name)

### Issue: Images Not Loading

**Solution:**
1. Ensure images are in the `public/` folder
2. Use relative paths: `/image.png` not `./image.png`
3. Check image file names (case-sensitive)
4. Verify images were committed to git

---

## 🎨 Custom Domain Setup (Optional)

To use your own domain (e.g., adamaailabs.com):

1. **In GitHub Settings → Pages:**
   - Enter your custom domain
   - Save

2. **In your domain registrar (e.g., Namecheap, GoDaddy):**
   - Add a CNAME record pointing to: `touradam.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Wait for DNS propagation** (up to 48 hours)

4. **Enable HTTPS** in GitHub Pages settings

---

## 📊 Performance on GitHub Pages

Expected performance:

- ✅ **Lighthouse Score:** 95-100
- ✅ **Fast Loading:** < 1 second
- ✅ **Global CDN:** Served from GitHub's CDN
- ✅ **Free SSL:** HTTPS enabled automatically
- ✅ **Free hosting:** Unlimited bandwidth

---

## 🔒 Security

GitHub Pages includes:
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ CDN delivery
- ✅ No server vulnerabilities (static site)

---

## 📦 What Gets Deployed

The `out/` directory contains:

```
out/
├── index.html          # Homepage
├── _next/
│   ├── static/        # JS, CSS, fonts
│   └── ...
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
└── public assets
```

---

## 🚀 Summary

### ✅ What's Working:
- ✅ Automatic deployment on push to main
- ✅ Fast, reliable GitHub Pages hosting
- ✅ Mobile-optimized site
- ✅ Beautiful design and animations
- ✅ SEO-friendly static pages

### ⚠️ What's Not Working (GitHub Pages):
- ❌ Email functionality (API routes don't work on static sites)
- ❌ Server-side rendering
- ❌ Dynamic routes

### 🎯 Recommendation:

**For production with email functionality:**
- Use **Hostinger** deployment (follow `HOSTINGER_DEPLOYMENT.md`)
- Email functionality will work
- Use Node.js hosting

**For preview/portfolio:**
- GitHub Pages is perfect!
- Free hosting
- Easy updates
- Fast performance

---

## 📞 Next Steps

1. **Enable GitHub Pages** in repository settings (one-time)
2. **Push this commit** to trigger first deployment
3. **Wait 3-4 minutes** for deployment to complete
4. **Visit your site:** https://touradam.github.io/adama-ai-labs/
5. **Decide on email solution** (Hostinger, Formspree, or EmailJS)

---

## 🎉 You're All Set!

Every time you push to the `main` branch, your site will automatically update on GitHub Pages!

**Current Status:**
- ✅ GitHub Actions workflow configured
- ✅ Next.js configured for static export
- ✅ Build tested and working
- ✅ Ready to deploy

**Next:** Push this commit and watch the magic happen! ✨

---

*Last Updated: January 9, 2026*
*Deployment Type: GitHub Pages (Static Export)*
*Email Functionality: Disabled (requires server hosting)*

