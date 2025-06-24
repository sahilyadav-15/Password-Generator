import React from "react";

function PasswordOptions({
  numberAllowed,
  setNumberAllowed,
  charAllowed,
  setCharAllowed,
}) {
  return (
    <>
      <div className="flex text-lg items-center gap-x-1">
        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex text-lg items-center gap-x-1">
        <input
          type="checkbox"
          checked={charAllowed}
          id="charInput"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </>
  );
}

export default PasswordOptions;
