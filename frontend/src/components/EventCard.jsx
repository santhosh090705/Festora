import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col items-center w-64">
      <img
        src={event.image}
        alt={event.title}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">{event.genre}</span>
      <h3 className="text-lg font-bold text-center mb-2 dark:text-white">{event.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{event.date}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{event.location}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">{event.description}</p>
      <div className="flex justify-between items-center w-full mt-auto">
        <span className="font-bold text-purple-600 dark:text-purple-400">from ₹{event.price}</span>
        <button className="bg-purple-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-800 transition" onClick={() => navigate(`/book/${event.id}`)}>Quick Book</button>
      </div>
    </div>
  );
}

export default EventCard;
