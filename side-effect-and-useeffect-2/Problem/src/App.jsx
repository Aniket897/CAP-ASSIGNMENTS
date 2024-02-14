import React from "react";
import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="app">
      {showComponent && <Timer />}
      <button onClick={() => setShowComponent((pre) => !pre)}>
        ⌚ Toggle Timer
      </button>
    </div>
  );
};

export default App;
