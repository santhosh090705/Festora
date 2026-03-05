import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import BookingConfirmation from "./pages/BookingConfirmation";
import EventBooking from "./pages/EventBooking";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/book/:eventId" element={<EventBooking />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
