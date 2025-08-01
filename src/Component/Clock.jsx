import { useEffect, useRef } from "react";
import moment from "moment";

export default function Clock() {
  const divref = useRef();

  const displayTime = () => {
    if (divref.current) {
      var time = moment().format("HH:mm:ss");
      const times = time.split(":");
      divref.current.innerHTML = `<span class="text-red-500">${times[0]}</span>:<span class="text-yellow-500">${times[1]}</span>:<span class="text-green-500">${times[2]}</span>`;
      document.title = time;
    }
  };

  useEffect(() => {
    displayTime();
    const interval = setInterval(displayTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-white w-full text-center mt-10 flex justify-center items-center flex-col">
      <div className="bg-gray-500 w-104 h-[200px] rounded-4xl flex items-center justify-center md-10">
        <h1 ref={divref} className="text-8xl">
          00 : 00 : 00
        </h1>
      </div>
      <div className="bg-gray-500"></div>
    </div>
  );
}
