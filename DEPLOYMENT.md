# BYD Ops Brain - Deployment Guide

## 🚀 Free Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Perfect for Next.js applications
- Free tier includes 100GB bandwidth/month
- Automatic deployments from GitHub
- Built-in analytics and monitoring

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Deploy automatically

**Commands:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from your project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: byd-ops-brain
# - Directory: ./
# - Override settings? No
```

### Option 2: Netlify

**Why Netlify?**
- Great for static sites
- Free tier includes 100GB bandwidth/month
- Easy form handling
- Built-in CI/CD

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `out` folder
4. Or connect to GitHub for auto-deployments

### Option 3: Railway

**Why Railway?**
- Full-stack applications
- Free tier includes $5 credit/month
- Database hosting included
- Easy environment management

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Deploy from GitHub repository
4. Add environment variables

### Option 4: Render

**Why Render?**
- Free tier for web services
- Automatic SSL certificates
- Built-in monitoring
- Easy database setup

**Steps:**
1. Go to [render.com](https://render.com)
2. Connect GitHub account
3. Create new Web Service
4. Select your repository

## 🔧 Environment Variables

For production deployment, you'll need these environment variables:

```env
NEXTAUTH_SECRET=your-production-secret-key-here
NEXTAUTH_URL=https://your-domain.com
```

## 📊 Database Options (Free)

### 1. Supabase (Recommended)
- Free tier: 500MB database
- Built-in authentication
- Real-time subscriptions
- Go to [supabase.com](https://supabase.com)

### 2. PlanetScale
- Free tier: 1 database, 1GB storage
- MySQL compatible
- Branching for databases
- Go to [planetscale.com](https://planetscale.com)

### 3. Railway PostgreSQL
- Free tier: $5 credit/month
- Easy setup with Railway
- Automatic backups

## 🎯 Quick Start with Vercel

1. **Prepare your project:**
   ```bash
   # Make sure everything works locally
   npm run build
   npm run dev
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard:**
   - NEXTAUTH_SECRET: Generate a random string
   - NEXTAUTH_URL: Your Vercel domain

4. **Your app will be live at:** `https://your-project.vercel.app`

## 🔒 Security Notes

- Change default passwords in production
- Use strong NEXTAUTH_SECRET
- Enable HTTPS (automatic with Vercel/Netlify)
- Consider adding rate limiting for production

## 📈 Monitoring

- Vercel: Built-in analytics
- Netlify: Built-in analytics
- Railway: Built-in monitoring
- Render: Built-in monitoring

## 🆘 Troubleshooting

**Build Errors:**
- Check all imports are correct
- Ensure all dependencies are in package.json
- Run `npm run build` locally first

**Environment Variables:**
- Make sure all required env vars are set
- Check variable names match exactly
- Restart deployment after adding env vars

**Database Issues:**
- Ensure database URL is correct
- Check if database is accessible
- Verify Prisma schema matches database