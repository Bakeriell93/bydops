#!/usr/bin/env node

console.log(`
🚀 BYD Ops Brain - Deployment Guide
=====================================

📋 STEP 1: Prepare for Deployment
---------------------------------
1. Make sure your app builds successfully:
   npm run build

2. Test locally:
   npm run dev

📋 STEP 2: Choose Your Deployment Platform
------------------------------------------

🎯 RECOMMENDED: Vercel (Easiest for Next.js)
- Go to: https://vercel.com
- Sign up with GitHub
- Click "New Project"
- Import your GitHub repository
- Deploy automatically!

🌐 Alternative: Netlify
- Go to: https://netlify.com
- Sign up with GitHub
- Click "New site from Git"
- Select your repository
- Deploy!

🚂 Alternative: Railway
- Go to: https://railway.app
- Sign up with GitHub
- Click "New Project"
- Deploy from GitHub

📋 STEP 3: Environment Variables
-------------------------------
Set these in your deployment platform:

NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=https://your-domain.com

📋 STEP 4: Database (Optional)
-----------------------------
For production database, consider:
- Supabase (Free): https://supabase.com
- PlanetScale (Free): https://planetscale.com
- Railway PostgreSQL (Free tier)

🎉 Your app will be live in minutes!

Need help? Check the DEPLOYMENT.md file for detailed instructions.
`);

// Check if build works
const { execSync } = require('child_process');

try {
  console.log('\n🔨 Testing build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful! Ready for deployment.');
} catch (error) {
  console.log('❌ Build failed. Please fix errors before deploying.');
  process.exit(1);
}
