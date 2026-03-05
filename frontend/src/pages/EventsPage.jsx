import React, { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

const genres = ["All", "EDM", "Rock", "Indie", "Electronic"];

function EventsPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredEvents =
    selectedGenre === "All"
      ? events
      : events.filter((event) => event.genre === selectedGenre);

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

      {/* Filters */}
      <section className="px-8 py-8 flex gap-8">
        <div className="w-64">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Event Type</h3>
            <ul className="space-y-2">
              {genres.map((genre) => (
                <li key={genre}>
                  <button
                    className={`px-3 py-1 rounded-full font-medium text-sm w-full text-left ${selectedGenre === genre ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Discover Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
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

export default EventsPage;
