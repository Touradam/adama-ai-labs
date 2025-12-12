# GitHub Pages Deployment Setup

## ✅ Configuration Complete!

Your site is now configured for GitHub Pages deployment. Follow these steps to enable it:

## 📝 Enable GitHub Pages (One-Time Setup)

### Step 1: Go to Repository Settings
1. Visit: **https://github.com/Touradam/adama-ai-labs**
2. Click on **Settings** tab (top right)

### Step 2: Enable GitHub Pages
1. In the left sidebar, click **Pages** (under "Code and automation")
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
3. Click **Save**

### Step 3: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete (green checkmark ✅)

### Step 4: Access Your Site
Once deployed, your site will be available at:

**🌐 https://touradam.github.io/adama-ai-labs/**

---

## 🔧 What Was Configured

### 1. Next.js Configuration (`next.config.ts`)
- ✅ Enabled static export (`output: 'export'`)
- ✅ Set base path to `/adama-ai-labs`
- ✅ Configured asset prefix
- ✅ Disabled image optimization (required for static export)

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- ✅ Automatic deployment on push to `main` branch
- ✅ Builds the Next.js app
- ✅ Uploads to GitHub Pages
- ✅ Includes `.nojekyll` file

### 3. Static Export Ready
- ✅ All pages will be pre-rendered as static HTML
- ✅ Fast loading times
- ✅ SEO-friendly

---

## ⚠️ Important Notes

### API Routes
**Note**: The contact form API route (`/app/api/contact/route.ts`) won't work with static export.

**Options:**
1. **Remove the contact form** (simplest for static site)
2. **Use external form service** (Formspree, Netlify Forms, etc.)
3. **Deploy API separately** (Vercel, Railway, etc.)

### Environment Variables
If you need environment variables:
1. Go to **Settings → Secrets and variables → Actions**
2. Add your secrets (e.g., `RESEND_API_KEY`, `CONTACT_EMAIL`)

---

## 🔄 Automatic Updates

Every time you push to the `main` branch:
1. GitHub Actions automatically builds your site
2. Deploys the new version to GitHub Pages
3. Updates are live in 2-3 minutes

---

## 🐛 Troubleshooting

### Workflow Fails
- Check the **Actions** tab for error messages
- Ensure **GitHub Pages** is enabled in Settings
- Verify the workflow has **Pages write permission**

### Site Not Loading
- Check that the URL includes `/adama-ai-labs/` base path
- Wait a few minutes after first deployment
- Clear your browser cache

### 404 Errors
- Make sure you're using the correct URL format
- Check that `basePath` matches your repository name

---

## 📊 Monitoring

Check deployment status:
- **Actions tab**: https://github.com/Touradam/adama-ai-labs/actions
- **Pages settings**: https://github.com/Touradam/adama-ai-labs/settings/pages

---

## 🎉 That's It!

Your A-dama AI Labs website will be live once you enable GitHub Pages in the repository settings!

Visit your site at: **https://touradam.github.io/adama-ai-labs/**

