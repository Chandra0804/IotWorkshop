import React from 'react';

const Schedule = () => {
  return (
    <div id="schedule" className="p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="font-bold text-2xl text-indigo-600">Workshop Schedule</h2>
      <div className="mt-4 space-y-4">
        <div className="p-4 bg-indigo-50 rounded-md">
          <h3 className="font-semibold text-lg">Day 1: Introduction to IoT and ML</h3>
          <p className="text-gray-600">9:00 AM - 10:30 AM: Keynote Session on IoT Evolution</p>
          <p className="text-gray-600">11:00 AM - 12:30 PM: Hands-on Lab: Building Your First IoT Device</p>
          <p className="text-gray-600">2:00 PM - 4:00 PM: Introduction to Machine Learning Models</p>
        </div>
        <div className="p-4 bg-indigo-50 rounded-md">
          <h3 className="font-semibold text-lg">Day 2: Advanced Topics in IoT and ML</h3>
          <p className="text-gray-600">9:00 AM - 10:30 AM: IoT Data Collection and Processing</p>
          <p className="text-gray-600">11:00 AM - 12:30 PM: Integrating ML with IoT Systems</p>
          <p className="text-gray-600">2:00 PM - 4:00 PM: Case Studies and Real-World Applications</p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;