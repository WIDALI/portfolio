# 🚀 Deployment Guide

Complete guide to deploying your portfolio with a custom domain from GoDaddy or similar registrars.

## Step 1: Prepare Your Code

1. **Update all placeholder content:**
   - Replace "Your Name" with your actual name
   - Update all GitHub links
   - Add your email and LinkedIn
   - Customize project descriptions

2. **Add your screen recordings** (see README.md for instructions)

3. **Test locally:**
   ```bash
   npm start
   ```
   Make sure everything looks good at `http://localhost:3000`

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

---

## Step 2: Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Free hosting for personal projects
- ✅ Automatic HTTPS
- ✅ Easy custom domain setup
- ✅ Auto-deploys when you push to GitHub
- ✅ Lightning fast CDN

### Deployment Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your portfolio repository
   - Vercel auto-detects React settings
   - Click "Deploy"
   - Wait 2-3 minutes for deployment

3. **You're Live!**
   - Vercel gives you a free `.vercel.app` domain
   - Example: `your-portfolio.vercel.app`

---

## Step 3: Buy Custom Domain

### GoDaddy (or similar registrar)

1. **Search for available domains:**
   - Go to [godaddy.com](https://godaddy.com)
   - Search for your desired domain
   - Examples:
     - `yourname.com`
     - `yourname.dev`
     - `yourname.me`
     - `yourname.io`

2. **Purchase domain:**
   - `.com` domains: ~$12-20/year
   - `.dev` domains: ~$12-15/year
   - `.me` domains: ~$20/year
   - Look for first-year discounts!

3. **Complete purchase**
   - Add to cart and checkout
   - No need to buy extra services (hosting, email, etc.)
   - You just need the domain name

---

## Step 4: Connect Domain to Vercel

### In Vercel Dashboard:

1. **Open your project**
   - Go to Vercel dashboard
   - Click on your portfolio project

2. **Add domain:**
   - Click "Settings" → "Domains"
   - Enter your custom domain: `yourdomain.com`
   - Click "Add"

3. **Vercel will show DNS records**
   - You'll see something like:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

### In GoDaddy (or your registrar):

1. **Access DNS Settings:**
   - Log in to GoDaddy
   - Go to "My Products"
   - Find your domain
   - Click "DNS" or "Manage DNS"

2. **Add DNS Records:**
   
   **For root domain (yourdomain.com):**
   - Type: `A`
   - Name: `@`
   - Value: (the IP address Vercel gave you)
   - TTL: `600` (10 minutes)

   **For www subdomain (www.yourdomain.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: (the CNAME Vercel gave you)
   - TTL: `600`

3. **Delete conflicting records:**
   - Remove any existing `A` records pointing to GoDaddy parking page
   - Remove any `CNAME` records for `@` or `www`

4. **Save changes**

### Wait for DNS Propagation:

- **Typical time:** 10 minutes - 2 hours
- **Maximum time:** Up to 48 hours (rare)
- Check status: [whatsmydns.net](https://whatsmydns.net)

### Verify in Vercel:

- Go back to Vercel → Domains
- Should show "Valid Configuration" with a green checkmark
- Vercel automatically provisions SSL certificate (HTTPS)

---

## Alternative: Deploy to Netlify

### Netlify Deployment:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy Site**
   - Click "New site from Git"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

3. **Add Custom Domain**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter your domain
   - Netlify will show DNS instructions (similar to Vercel)

4. **Update GoDaddy DNS**
   - Add Netlify's DNS records (shown in Netlify dashboard)
   - Wait for propagation

---

## Post-Deployment Checklist

✅ **Test your site:**
- Visit `yourdomain.com` and `www.yourdomain.com`
- Both should work and show HTTPS (lock icon)

✅ **Test on mobile:**
- Check responsiveness
- Test all navigation links
- Ensure videos play

✅ **Verify links:**
- All GitHub links work
- Social media links correct
- Email link opens mail client

✅ **SEO Basics:**
- Update meta description in `public/index.html`
- Add your name to the title
- Consider adding favicon

✅ **Analytics (Optional):**
- Add Google Analytics
- Add Vercel Analytics (built-in)

---

## Updating Your Portfolio

### After initial deployment:

1. Make changes locally
2. Test with `npm start`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update project descriptions"
   git push origin main
   ```
4. Vercel/Netlify automatically rebuilds (2-3 min)
5. Changes go live!

---

## Troubleshooting

### Domain not connecting?

**Check DNS records:**
```bash
dig yourdomain.com
dig www.yourdomain.com
```

**Common issues:**
- Forgot to delete old A/CNAME records in GoDaddy
- Typo in DNS values
- Need to wait longer for propagation

### Build failing on Vercel?

- Check build logs in Vercel dashboard
- Ensure no console errors locally
- Verify all dependencies in `package.json`

### Videos not loading?

- Check file size (keep under 50MB for web)
- Use video compression tools
- Consider YouTube/Vimeo for large files

---

## Custom Domain Examples

**Good domain choices for developers:**
- `johnsmith.dev` ← Professional
- `jsmith.io` ← Tech-focused
- `johnsmith.me` ← Personal
- `john-smith.com` ← Classic

**Avoid:**
- Hyphens (hard to remember)
- Numbers (confusing)
- Weird TLDs (.xyz, .tech) unless intentional

---

## Cost Breakdown

| Item | Cost | Frequency |
|------|------|-----------|
| Domain (GoDaddy) | $12-20 | Per year |
| Vercel Hosting | FREE | Forever |
| SSL Certificate | FREE | Included |
| **Total** | **$12-20** | **Per year** |

That's it! Super affordable for a professional portfolio. 🎉

---

## Need Help?

**Vercel Support:**
- [vercel.com/docs](https://vercel.com/docs)
- [vercel.com/support](https://vercel.com/support)

**GoDaddy DNS Help:**
- [godaddy.com/help/dns](https://www.godaddy.com/help/dns)

**Portfolio Issues:**
- Check console for errors (F12 in browser)
- Review README.md for customization guide

---

**Ready to go live? You got this! 🚀**

