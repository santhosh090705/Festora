import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";

function EventBooking() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => String(e.id) === eventId);

  if (!event) {
    return <div className="p-8 text-center">Event not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <img src={event.image} alt={event.title} className="rounded-lg w-full h-64 object-cover mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-purple-600">{event.title}</h1>
        <p className="text-gray-700 mb-2">{event.date} | {event.location}</p>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-purple-600 text-xl">from ₹{event.price}</span>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition" onClick={() => navigate(`/confirmation?event=${event.id}`)}>Confirm Booking</button>
        </div>
        <button className="text-gray-500 underline" onClick={() => navigate(-1)}>Back to Events</button>
      </div>
    </div>
  );
}

export default EventBooking;
