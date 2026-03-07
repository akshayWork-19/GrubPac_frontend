# GrubPac Frontend

A modern, responsive Room Booking interface built with React and Vite.

## 🚀 Features
- Real-time Availability Check
- Interactive Booking Form
- User Dashboard & Authentication Flow
- Responsive Design with Glassmorphism
- SPA Routing Support

## 🛠️ Tech Stack
- **React 19**: UI Library
- **Vite**: Build Tool
- **Axios**: API Requests
- **React Router DOM**: Navigation

## ⚙️ Local Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the root:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

3. **Run Application**:
   ```bash
   npm run dev
   ```

## 🛳️ Deployment (Vercel)
1. Push to GitHub.
2. Import project into Vercel.
3. Add Environment Variable:
   - `VITE_API_BASE_URL`: `https://your-backend.onrender.com/api` (ensure it ends with `/api`).
4. The `vercel.json` ensures routes work correctly on refresh.

## 🎨 Design Notes
- Uses CSS Variables for theme management.
- Custom scrollbars and hover micro-animations for a premium feel.
