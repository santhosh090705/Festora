import React from "react";

function BookingConfirmation() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b">
        <div className="flex items-center gap-2">
          <span className="bg-purple-600 text-white px-2 py-1 rounded font-bold text-lg">🎟️</span>
          <span className="font-bold text-2xl text-purple-600">Festora</span>
        </div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">About</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </nav>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded border text-gray-700 font-semibold">Log in</button>
          <button className="px-4 py-1 rounded bg-purple-600 text-white font-semibold">Sign up</button>
        </div>
      </header>

      {/* Confirmation Section */}
      <section className="px-8 py-16 text-center">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl mb-4">✔️</span>
          <h1 className="text-3xl font-bold mb-2">You're going to the show!</h1>
          <p className="text-gray-600 mb-6">
            Your booking is confirmed. We've sent your digital tickets and receipt to <span className="font-semibold text-purple-600">alex.doe@gmail.com</span>.
          </p>
          <div className="bg-purple-600 text-white rounded-xl p-6 mb-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-2">Neon Horizon World Tour</h2>
            <p className="mb-1">The Midnight Echoes</p>
            <p className="mb-1">Saturday, Oct 24, 2026 | 7:00 PM - 11:00 PM</p>
            <p className="mb-1">Starlight Amphitheater, Los Angeles</p>
            <div className="flex justify-between mt-4">
              <div>
                <span className="block text-xs">Section</span>
                <span className="font-bold">GA Floor - Tier 1</span>
              </div>
              <div>
                <span className="block text-xs">Seat</span>
                <span className="font-bold">S-142</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow w-full max-w-lg mb-6">
            <h3 className="font-bold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-1">
              <span>Ticket Price (x1)</span>
              <span>₹3500.00</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Service Fee</span>
              <span>₹150.00</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Facility Charge</span>
              <span>₹50.00</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Paid</span>
              <span className="text-purple-600">₹3700.00</span>
            </div>
            <div className="mt-4 text-left">
              <span className="block text-xs text-gray-500 mb-2">Paid via Visa ending in 4242</span>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">Download PDF Ticket</button>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <button className="bg-gray-100 text-purple-600 px-4 py-2 rounded-lg font-semibold">View My Orders</button>
            <button className="bg-gray-100 text-purple-600 px-4 py-2 rounded-lg font-semibold">Share with Friends</button>
            <button className="bg-gray-100 text-purple-600 px-4 py-2 rounded-lg font-semibold">Print Receipt</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 bg-white border-t mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-bold text-purple-600 text-lg">🎟️ Festora</span>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">India's premier platform for concert and festival enthusiasts. Discover, book, and experience live music like never before.</p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-bold mb-2">Explore</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Rock Festivals</li>
                <li>EDM Raves</li>
                <li>Indie Concerts</li>
                <li>Pop Nights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Support</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Follow Us</h4>
              <ul className="flex gap-2 text-purple-600 text-xl">
                <li>📷</li>
                <li>🐦</li>
                <li>📺</li>
                <li>📱</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© 2026 Festora Inc. All tickets delivered securely to your Gmail.</div>
      </footer>
    </div>
  );
}

export default BookingConfirmation;
