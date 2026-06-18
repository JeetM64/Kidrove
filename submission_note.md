# Assignment Submission Details

## Submission Links
- **GitHub Repository**: https://github.com/JeetM64/Kidrove.git
- **Live Demo (Frontend)**: *[Deploy your frontend on Vercel and paste link here]*
- **Live API (Backend)**: *[Deploy your backend on Render/Railway and paste link here]*

---

## Submission Note (140 Words)

### Approach
I implemented a robust full-stack monorepo utilizing a React (Vite) frontend and Express.js backend, both fully written in TypeScript. To align with Kidrove's ed-tech branding, I designed a playful yet premium UI using Tailwind CSS v4, custom HSL gradients, and responsive glassmorphic cards. The registration component features real-time client-side input validation, loading states, and state-driven success alerts. Form data is validated on the backend with strict regex before being safely persisted in MongoDB via Mongoose.

### Improvements with More Time
1. **Email Integration**: Connect Nodemailer or SendGrid to dispatch immediate session schedules and receipts to parents.
2. **Admin Console**: Add JWT authentication and a private dashboard to review, filter, and export inquiries to CSV.
3. **Automated Testing**: Add Jest and Supertest suites for backend endpoints, and Vitest for frontend elements.
4. **Checkout Engine**: Incorporate a Razorpay or Stripe payment gateway for seamless mock fee collections.
