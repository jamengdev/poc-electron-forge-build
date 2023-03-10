import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Papa from "papaparse";
import packageConfig from "../package.json";

const App = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handle = setInterval(() => {
      const currentDate = new Date();
      setCurrentTime(
        currentDate.getHours() +
          ":" +
          currentDate.getMinutes() +
          ":" +
          currentDate.getSeconds()
      );

      return () => {
        clearInterval(handle);
      };
    }, 1000);
  }, []);

  return (
    <div className="md:container mx-auto flex flex-col items-center justify-center h-screen bg-gray-200 space-y-2">
      <p className=" text-indigo-400 text-2xl">
        React + Tailwind + Typescript + Electron = ❤
      </p>
      <div>version {packageConfig.version}</div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input
          type="file"
          onChange={(event) => {
            const reader = new FileReader();
            reader.onload = async (e) => {
              if (e.target.result !== "string") return;

              const csv = e.target.result;
              console.log("onload csv", csv);
              const data = Papa.parse(csv);
              console.log("onload data", data);
            };
            reader.readAsText(event.target.files[0]);
            console.log("file", event);
          }}
        />
      </div>
      <div>{currentTime}</div>
      <button
        onClick={() => {
          console.log("qweqwewq");
          window.myAPI.testDatabase("from the renderer");
        }}
      >
        click
      </button>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
