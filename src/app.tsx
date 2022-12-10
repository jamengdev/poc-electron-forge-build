import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="md:container mx-auto flex flex-col items-center justify-center h-screen bg-gray-200">
      <p className=" text-indigo-400 text-2xl">
        React + Tailwind + Typescript + Electron = ❤
      </p>
      <div>
        <input type="text" id="testing" />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
