# 🚀 Complete Vercel Deployment Guide

## 📋 Prerequisites
- GitHub account with your code pushed
- Vercel account (free tier available)
- MongoDB Atlas connection string (already configured)

## 🎯 Deployment Strategy: Monorepo Approach

We'll deploy both frontend and backend from a single repository to avoid 404 errors and ensure proper communication.

## 📁 File Structure After Deployment
```
vercel.app/
├── /api/* → Backend (Node.js)
└── /* → Frontend (React SPA)
```

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Repository
1. **Ensure all files are committed and pushed to GitHub**
2. **Verify these files exist in your root directory:**
   - `vercel.json` ✅
   - `package.json` ✅
   - `backend/` folder ✅
   - `frontend/` folder ✅

### Step 2: Deploy to Vercel
1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - **Project Name**: `folk-art-platform` (or your preferred name)
   - **Framework Preset**: `Other`
   - **Root Directory**: Leave as `/` (root)
   - **Build Command**: `npm run build:all`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm run install:all`

### Step 3: Set Environment Variables
**In your Vercel project dashboard:**
1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```env
MONGODB_URI=mongodb+srv://dhara:dhara123@cluster1.r3h1ej2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
JWT_SECRET=dhara-folk-art-super-secret-jwt-key-2025
NODE_ENV=production
FRONTEND_URL=https://your-project-name.vercel.app
CORS_ORIGIN=https://your-project-name.vercel.app
```

### Step 4: Deploy
1. **Click "Deploy"**
2. **Wait for build to complete** (usually 2-5 minutes)
3. **Check build logs** for any errors

## 🔍 Troubleshooting Common Issues

### Issue 1: Build Fails
**Solution**: Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Issue 2: 404 Errors on API Routes
**Solution**: Verify routing configuration
- Check that `/api/*` routes point to backend
- Ensure backend server.js is properly configured

### Issue 3: Frontend Can't Connect to Backend
**Solution**: Check CORS and environment variables
- Verify `FRONTEND_URL` is set correctly
- Check that CORS origins include your Vercel domain

### Issue 4: Database Connection Fails
**Solution**: Verify MongoDB connection
- Check `MONGODB_URI` is correct
- Ensure MongoDB Atlas network access allows Vercel IPs

## 🌐 Post-Deployment Verification

### 1. Test API Endpoints
```bash
# Health check
curl https://your-project.vercel.app/api/health

# Root endpoint
curl https://your-project.vercel.app/api/
```

### 2. Test Frontend
- Visit your Vercel domain
- Check if React app loads
- Test navigation between pages
- Verify API calls work

### 3. Test Authentication
- Try to register a new user
- Test login functionality
- Verify JWT tokens are generated

## 🔒 Security Considerations

### For Production:
1. **Change JWT_SECRET** to a strong, random string
2. **Set up MongoDB Atlas IP whitelist** for Vercel
3. **Enable HTTPS** (automatic with Vercel)
4. **Set up proper CORS origins**

### Environment Variables to Update:
```env
JWT_SECRET=your-super-strong-random-secret-here
MONGODB_URI=your-mongodb-connection-string
```

## 📱 Testing Your Deployed App

### 1. **Homepage**: Should load without errors
### 2. **Authentication**: Register/Login should work
### 3. **Artwork Upload**: Should work for artists
### 4. **Search & Filter**: Should display results
### 5. **Profile Pages**: Should load user data

## 🚨 Important Notes

- **Never commit sensitive data** to GitHub
- **Use Vercel's environment variable interface** for secrets
- **Monitor your MongoDB Atlas usage** (free tier limits)
- **Check Vercel function logs** for backend debugging

## 🎉 Success Indicators

✅ **Build completes without errors**
✅ **Frontend loads at your Vercel domain**
✅ **API endpoints respond correctly**
✅ **Database connection established**
✅ **User registration/login works**
✅ **Artwork upload functionality works**

## 📞 Need Help?

If you encounter issues:
1. **Check Vercel build logs**
2. **Verify environment variables**
3. **Test API endpoints individually**
4. **Check MongoDB Atlas connection**
5. **Review CORS configuration**

Your app should now deploy successfully to Vercel! 🎊
