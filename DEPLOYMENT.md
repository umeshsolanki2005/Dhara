# Vercel Deployment Guide

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Have a MongoDB database (MongoDB Atlas recommended)
3. GitHub repository with your code

## Step 1: Deploy Backend First

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A strong random string for JWT signing

4. Note down your backend URL (e.g., `https://your-backend.vercel.app`)

## Step 2: Update Frontend Configuration

1. Update `frontend/vercel.json`:
   - Replace `https://your-backend-url.vercel.app` with your actual backend URL

2. Update `frontend/src/context/AuthContext.jsx`:
   - Change API base URL to your backend URL

## Step 3: Deploy Frontend

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Set environment variables:
   - `VITE_API_URL`: Your backend URL

## Step 4: Configure CORS

1. In your backend `server.js`, update CORS configuration:
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

## Environment Variables for Vercel

### Backend
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens

### Frontend
- `VITE_API_URL`: Your backend API URL

## Build Commands

### Backend
- Build Command: (leave empty - Vercel will auto-detect)
- Output Directory: (leave empty)
- Install Command: `npm install`

### Frontend
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Important Notes

1. **Deploy backend first** to get the API URL
2. **Update frontend configuration** with the backend URL
3. **Set environment variables** in Vercel dashboard
4. **Test API endpoints** after backend deployment
5. **Verify CORS** is working correctly

## Troubleshooting

- If API calls fail, check CORS configuration
- If build fails, ensure all dependencies are in package.json
- If environment variables don't work, redeploy after setting them
- Check Vercel function logs for backend errors
