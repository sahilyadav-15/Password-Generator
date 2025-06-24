import React from "react";

function PasswordLengthSlider({ length, setLength }) {
  return (
    <div className="flex text-lg items-center gap-x-1">
      <input
        type="range"
        min={6}
        max={50}
        value={length}
        className="cursor-pointer"
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <label>Length: {length}</label>
    </div>
  );
}

export default PasswordLengthSlider;