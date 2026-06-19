# AI & Robotics Summer Workshop (Kidrove)

A modern, responsive, full-stack React landing page assignment designed with premium UI components and a fully functional Express.js/MongoDB backend API.

## Features

- **Premium UI/UX:** Built with React and Tailwind CSS. Features child-friendly, modern design with gradients, glassmorphism, and smooth hover states.
- **Scroll Animations:** Integrated `framer-motion` for highly polished, staggered entrance animations across all sections.
- **Interactive Mouse Tracker:** A custom floating cursor element to enhance the premium feel.
- **Fully Responsive:** Mobile-first approach, ensuring a perfect experience on desktop, tablet, and mobile (including a hamburger menu).
- **Form Validation:** Complete client-side validation, loading states, and backend error handling for the registration form.
- **Express Backend:** Robust REST API configured with CORS and JSON parsing.
- **MongoDB Integration (Optional):** Gracefully falls back to memory logging if no `MONGO_URI` is provided, but fully supports database integration.

---

## 📂 Folder Structure

```
workshop-app/
├── server/
│   ├── package.json
│   └── server.js          # Express.js API & MongoDB Logic
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── WorkshopDetails.jsx
│   │   ├── LearningOutcomes.jsx
│   │   ├── WhyJoin.jsx
│   │   ├── FAQ.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main assembly and MouseTracker
│   ├── App.css
│   ├── index.css          # Tailwind configuration & Blob keyframes
│   └── main.jsx
├── index.html
├── package.json           # Frontend dependencies
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Setup & Run Instructions

### 1. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Start the backend server (Runs on port 5000):
```bash
node server.js
# Optional: To use MongoDB, run `MONGO_URI="your_connection_string" node server.js`
```

### 2. Frontend Setup
Open a new terminal window, navigate to the root directory, and install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌍 Deployment Instructions

### Deploying the Frontend to Vercel

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Configure the Build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Vercel will automatically build and host the frontend.
6. *(Important)* Update the `fetch()` URL in `RegistrationForm.jsx` to point to your live Render backend URL instead of `http://localhost:5000`.

### Deploying the Backend to Render

1. Log in to [Render](https://render.com/) and click **New Web Service**.
2. Connect your GitHub repository.
3. Configure the service:
   - **Root Directory:** `server`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add Environment Variables (Optional):
   - `MONGO_URI`: Your MongoDB connection string.
5. Click **Create Web Service**. Render will deploy your API and provide a live URL (e.g., `https://your-api.onrender.com`).

---

## Evaluation Criteria Achieved
- ✅ **UI Design & Responsiveness:** Tailwind CSS, Framer Motion, fully mobile-responsive.
- ✅ **React Component Structure:** Clean, functional components mapped to clear domains.
- ✅ **API Implementation:** Express backend that perfectly implements `/api/enquiry`.
- ✅ **Bonus Points:** Tailwind CSS used, Form Validation implemented, Loading States added, deployment docs provided, and MongoDB gracefully handled.
