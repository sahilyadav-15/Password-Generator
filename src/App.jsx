import { useState, useCallback, useEffect, useRef } from "react";
import PasswordDisplay from "./Component/PasswordDisplay";
import PasswordLengthSlider from "./Component/PasswordLengthSlider";
import PasswordOptions from "./Component/PasswordOptions";
import ClickTracker from "./Component/ClickTracker";
import Clock from "./Component/Clock";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += '!@#$%^&*()_+=`~[{]}:;|"?><.,';
    let shuffledStr = [...str].sort(() => Math.random() - 0.5).join("");
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * shuffledStr.length + 1);
      pass += shuffledStr.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 text-2xl">
          Password Generator
        </h1>
        <PasswordDisplay
          password={password}
          passwordRef={passwordRef}
          copyPasswordToClipboard={copyPasswordToClipboard}
        />
        <div className="flex text-sm gap-x-2">
          <PasswordLengthSlider length={length} setLength={setLength} />
          <PasswordOptions
            numberAllowed={numberAllowed}
            setNumberAllowed={setNumberAllowed}
            charAllowed={charAllowed}
            setCharAllowed={setCharAllowed}
          />
        </div>
        <ClickTracker />
      </div>
      <Clock />
    </>
  );
}

export default App;
