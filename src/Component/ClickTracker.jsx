import React, { useState, useRef } from "react";

function ClickTracker() {
  const [count, setCount] = useState(0);
  const [gap, setGap] = useState(null);
  const lastClickTimeRef = useRef(null); // store last click timestamp

  const handleClick = () => {
    const now = Date.now(); // current time in milliseconds

    if (lastClickTimeRef.current !== null) {
      const diff = Math.floor((now - lastClickTimeRef.current) / 1000);
      setGap(diff);
    }

    lastClickTimeRef.current = now;
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded-xl text-center space-y-4">
      <h2 className="text-2xl font-bold">Click Tracker</h2>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition cursor-pointer"
      >
        Click Me!
      </button>
      <div className="text-lg">Total Clicks: {count}</div>
      {gap !== null && (
        <div className="text-sm text-gray-700">
          Time between last clicks: {gap} seconds
        </div>
      )}
    </div>
  );
}

export default ClickTracker;
