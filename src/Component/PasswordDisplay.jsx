import React from "react";

function PasswordDisplay({ password, passwordRef, copyPasswordToClipboard }) {
  const printChar = (str, n) => {
    let count = {}, nstr = "";
    for (let c of str) {
      count[c] = (count[c] || 0) + 1;
      if (count[c] == n) {
        nstr += c;
      } else if (count[c] == n + 1) {
        nstr = nstr.replace(c, "");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full text-xl shadow rounded-lg overflow-hidden mt-3 mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="outline-none bg-white w-full text-gray-600 py-1 px-3"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:shadow-2xl hover:bg-blue-800 transition duration-300"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="mt-4">
        Answer: {printChar("abcaddpnrhhhkjjjrrkkqqqp", 2)}
      </div>
    </div>
  );
}

export default PasswordDisplay;
