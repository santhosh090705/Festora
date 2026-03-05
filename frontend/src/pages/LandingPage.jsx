import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <span className="bg-purple-600 text-white px-2 py-1 rounded font-bold text-lg">🎟️</span>
          <span className="font-bold text-2xl text-purple-600 dark:text-purple-400">Festora</span>
        </div>
        <nav className="flex gap-6 text-gray-700 font-medium dark:text-gray-200">
          <button className="hover:text-purple-600 dark:hover:text-purple-400" onClick={() => navigate("/events")}>Browse</button>
          <button className="hover:text-purple-600 dark:hover:text-purple-400" onClick={() => alert('About Festora: India\'s premier platform for concerts and festivals.')}>About</button>
          <button className="hover:text-purple-600 dark:hover:text-purple-400" onClick={() => alert('Contact us at support@festora.com')}>Contact</button>
        </nav>
        <div className="flex gap-2 items-center">
          <button className="px-4 py-1 rounded border text-gray-700 dark:text-gray-200 font-semibold dark:border-gray-700" onClick={() => navigate("/login")}>Log in</button>
          <button className="px-4 py-1 rounded bg-purple-600 text-white font-semibold dark:bg-purple-700" onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-xl">
          <span className="bg-gray-100 dark:bg-gray-800 text-xs px-2 py-1 rounded-full font-semibold mb-4 inline-block dark:text-gray-200">#1 Choice for Music Lovers</span>
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            Experience <span className="text-purple-600 dark:text-purple-400">Music</span> Like Never Before
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Festora is your gateway to India's most electrifying concerts and festivals. Secure your spot in the crowd and get your tickets delivered instantly to your Gmail.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition" onClick={() => navigate("/events")}>Explore Events</button>
            <button className="border px-6 py-2 rounded-lg font-semibold text-gray-700 dark:text-gray-200 dark:border-gray-700" onClick={() => navigate("/events")}>Get Started</button>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg px-4 py-2 shadow w-full max-w-md">
            <input type="text" placeholder="Artist, band, or festival" className="flex-1 outline-none text-gray-700 dark:text-gray-200 dark:bg-gray-800" />
            <span className="text-gray-400 dark:text-gray-300">🎵</span>
            <button className="bg-purple-600 text-white px-4 py-1 rounded-lg font-semibold ml-2 dark:bg-purple-700" onClick={() => navigate("/events")}>Find Tickets</button>
          </div>
          <div className="flex gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
            <span>2k+ Active Events</span>
            <span>•</span>
            <span>Verified Sellers Only</span>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-16">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Concert" className="rounded-2xl shadow-xl w-80 h-96 object-cover" />
        </div>
      </section>

      {/* Top Rated Festivals */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Top Rated Festivals</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Hand-picked experiences you can't afford to miss.</p>
        <div className="flex gap-6 flex-wrap">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Why Choose Festora */}
      <section className="px-8 py-12 bg-gray-50 dark:bg-gray-800 rounded-xl mx-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose Festora?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
            <h3 className="font-bold mb-2 flex items-center gap-2 dark:text-white"><span className="text-purple-600 dark:text-purple-400">🔒</span> Secure Payment</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Your transactions are protected by industry-leading encryption. No hidden fees, ever.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
            <h3 className="font-bold mb-2 flex items-center gap-2 dark:text-white"><span className="text-purple-600 dark:text-purple-400">📧</span> Instant Gmail Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Tickets are sent directly to your inbox immediately after booking. No waiting in lines.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
            <h3 className="font-bold mb-2 flex items-center gap-2 dark:text-white"><span className="text-purple-600 dark:text-purple-400">🎫</span> Best Seats Guaranteed</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Access early-bird pricing and the best available spots before they hit the general market.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-16 bg-purple-600 dark:bg-purple-800 rounded-3xl mx-8 mb-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Don't Miss the Next Big Show</h2>
        <p className="mb-6">Join 50,000+ music fans receiving weekly updates on the hottest festivals and concerts.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold dark:bg-gray-900 dark:text-purple-400">Join Festora Now</button>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold dark:bg-gray-900 dark:text-purple-400">Browse Schedule</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-bold text-purple-600 dark:text-purple-400 text-lg">🎟️ Festora</span>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 max-w-xs">India's premier platform for concert and festival enthusiasts. Discover, book, and experience live music like never before.</p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-bold mb-2 dark:text-white">Explore</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li><button onClick={() => navigate("/events")}>Rock Festivals</button></li>
                <li><button onClick={() => navigate("/events")}>EDM Raves</button></li>
                <li><button onClick={() => navigate("/events")}>Indie Concerts</button></li>
                <li><button onClick={() => navigate("/events")}>Pop Nights</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 dark:text-white">Support</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li><button onClick={() => alert('Help Center coming soon!')}>Help Center</button></li>
                <li><button onClick={() => alert('Terms of Service coming soon!')}>Terms of Service</button></li>
                <li><button onClick={() => alert('Privacy Policy coming soon!')}>Privacy Policy</button></li>
                <li><button onClick={() => alert('Contact us at support@festora.com')}>Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 dark:text-white">Follow Us</h4>
              <ul className="flex gap-2 text-purple-600 dark:text-purple-400 text-xl">
                <li><button onClick={() => window.open('https://instagram.com', '_blank')}>📷</button></li>
                <li><button onClick={() => window.open('https://twitter.com', '_blank')}>🐦</button></li>
                <li><button onClick={() => window.open('https://youtube.com', '_blank')}>📺</button></li>
                <li><button onClick={() => window.open('https://facebook.com', '_blank')}>📱</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">© 2026 Festora Inc. All tickets delivered securely to your Gmail.</div>
      </footer>
    </div>
  );
}

export default LandingPage;
