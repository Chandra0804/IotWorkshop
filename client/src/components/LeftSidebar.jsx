import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-1/3 space-y-4">
      <div id="news" className="p-4 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="font-bold text-lg">News</h2>
        <p>Latest updates and announcements...</p>
      </div>
      <div id="organizing-committee" className="p-4 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="font-bold text-lg">Organizing Committee</h2>
        <p>Meet the organizers...</p>
      </div>
      <div id="archive" className="p-4 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="font-bold text-lg">Archive</h2>
        <p>Past events and materials...</p>
      </div>
    </div>
  );
}

export default LeftSidebar;