# Festora – Event Booking Platform

Festora is a modern web application for discovering and booking tickets to concerts, festivals, and events across India. It features user authentication, ticket management, payment integration, and a smart chat assistant.

## Features
- Browse and search for upcoming events
- User registration and login (Supabase authentication)
- Book tickets and view bookings
- Add events to favorites
- Secure online payments (Razorpay integration)
- Instant ticket delivery to Gmail
- Responsive, mobile-friendly UI
- Modern chat assistant (API-integrated)

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Auth & Data:** Supabase
- **Payments:** Razorpay
- **Deployment:** Netlify (frontend), GitHub (source)
- **Chat Assistant:** API-integrated widget (customizable)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/santhosh090705/Festora.git
cd Festora
```

### 2. Local Development
You can use a simple Python server:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### 3. Supabase Setup
- Create a project on [Supabase](https://supabase.com/)
- Replace `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `js/app.js` with your credentials

### 4. Razorpay Setup
- Create an account on [Razorpay](https://razorpay.com/)
- Replace `RAZORPAY_KEY` in `js/app.js` with your test/live key

### 5. Deploy to Netlify
- Connect your GitHub repo to Netlify
- Set build command to `None` (static site)
- Set publish directory to `/`
- Deploy and get your public URL

### 6. Chat Assistant Backend
- The chat widget is API-integrated. Update the endpoint in `js/modern-chat-assistant.js` to your backend URL.
- Ensure your backend supports POST requests and CORS for your Netlify domain.

## Folder Structure
```
├── index.html
├── events.html
├── event-detail.html
├── profile.html
├── checkout.html
├── login.html
├── register.html
├── ticket.html
├── assets/
│   └── ...
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── data.js
│   └── modern-chat-assistant.js
└── supabase.sql
```

## Customization
- Update branding, colors, and assets in `css/style.css` and `assets/`
- Add/modify events in `js/data.js`
- Extend chat assistant logic in `js/modern-chat-assistant.js`

## License
MIT

---

**Live Demo:** [festora-bookingsite.netlify.app](https://festora-bookingsite.netlify.app)

**Author:** Santhosh
