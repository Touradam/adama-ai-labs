# Email Service Setup Guide

## Overview
The waitlist form now uses **Resend** to send actual emails. When someone joins the waitlist:
1. **Admin** (you) receives a notification email with their details
2. **User** receives a confirmation email thanking them for joining

## Setup Steps

### 1. Get Your Resend API Key

1. Go to **https://resend.com**
2. Sign up for a free account (includes 3,000 emails/month free)
3. Verify your email address
4. Go to **API Keys** section: https://resend.com/api-keys
5. Click **Create API Key**
6. Give it a name (e.g., "Adama AI Lab - Production")
7. Copy the API key (starts with `re_`)

### 2. Add API Key to Your Project

Open `.env.local` file and replace the placeholder:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=onboarding@resend.dev
ADMIN_EMAIL=touradam3@gmail.com
```

**Important:** 
- For testing, use `onboarding@resend.dev` as FROM_EMAIL
- For production, you'll need to verify your own domain

### 3. Restart the Development Server

After updating `.env.local`, restart your dev server:

```bash
# Stop the current server (Ctrl+C in the terminal)
# Then restart:
npm run dev
```

### 4. Test the Email Functionality

1. Go to http://localhost:3001
2. Scroll to the waitlist form
3. Enter your test details:
   - Name: Your Name
   - Email: Your email address
4. Click "Join Free Waitlist"
5. Check your email inbox for the confirmation email

## Email Templates

### Admin Notification Email
**To:** touradam3@gmail.com
**Subject:** 🎉 New Waitlist Signup - Adama AI Lab
**Contains:**
- User's name
- User's email
- Timestamp of signup

### User Confirmation Email
**To:** User's email
**Subject:** Welcome to Adama AI Lab Waitlist! 🚀
**Contains:**
- Personalized greeting
- Confirmation of waitlist signup
- "First Bootcamp is FREE" highlight
- What happens next
- Core principles reminder
- Contact information

## Production Setup (Optional)

For production, you should verify your own domain:

1. Go to **Resend Dashboard > Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., adamaailab.com)
4. Follow DNS setup instructions
5. Once verified, update `.env.local`:

```bash
FROM_EMAIL=hello@adamaailab.com
# or
FROM_EMAIL=noreply@adamaailab.com
```

## Troubleshooting

### Emails not sending?
1. Check that `RESEND_API_KEY` is set correctly in `.env.local`
2. Make sure you restarted the dev server after updating `.env.local`
3. Check browser console for errors
4. Check terminal output for error messages

### Using the test domain
- `onboarding@resend.dev` can only send to your verified email
- For testing with other emails, you need to verify your domain

### Rate limits
- Free plan: 3,000 emails/month, 100 emails/day
- Upgrade if you need more

## API Response

The API will always return success to the user (don't block signups if email fails), but errors are logged in the terminal for debugging.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| RESEND_API_KEY | Your Resend API key | re_abc123... |
| FROM_EMAIL | Email address to send from | onboarding@resend.dev |
| ADMIN_EMAIL | Where to send notifications | touradam3@gmail.com |

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your API key secret
- Use different API keys for development and production
- Rotate keys if compromised

