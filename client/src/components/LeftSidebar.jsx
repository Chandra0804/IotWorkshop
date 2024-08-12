import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-1/3 space-y-6">
      <div id="news" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Latest News</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Registration is now open! Don't miss out on this opportunity.</li>
          <li className="text-gray-600">🔹 Dr. Smith will be delivering a keynote on Day 1. Mark your calendar!</li>
          <li className="text-gray-600">🔹 Workshop materials are available online for registered participants.</li>
        </ul>
      </div>
      <div id="organizing-committee" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Organizing Committee</h2>
        <p className="mt-4 text-gray-600">
          The workshop is organized by experts from academia and industry, including Prof. John Doe (Chair), Dr. Jane Roe (Co-Chair), and leading professionals from the IoT and ML sectors.
        </p>
      </div>
      <div id="archive" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Event Archive</h2>
        <p className="mt-4 text-gray-600">
          Explore previous workshops, materials, and recorded sessions in our comprehensive archive.
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;