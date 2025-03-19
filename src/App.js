import React, { useState } from "react";
import { saveAs } from "file-saver";

import "./App.css";

import Button from "./components/Button";
import Sketch from "./components/Sketch";
import Checkbox from "./components/Checkbox";

let lastSVG = "";

function saveSVG(svg, seed) {
  var blob = new Blob([svg], {
    type: "data:image/svg+xml;charset=utf-8",
  });
  saveAs(blob, `logo-seed-${seed}.svg`);
}

function App() {
  const [hasType, setHasType] = useState(true);
  const [seed, setSeed] = useState(1); // not implemented yet

  return (
    <div className="App">
      <div id="function">
        <Checkbox checked={hasType} onChange={setHasType} />
        <Button title="New Logo" onClick={(e) => setSeed(seed + 1)} />
        <Button
          title="Save Logo (SVG)"
          onClick={(e) => saveSVG(lastSVG, seed)}
        />
        <div className="seed-display">Current Seed: {seed}</div>
      </div>

      <div id="logo">
        <Sketch
          hasType={hasType}
          seed={seed}
          onEndRender={(svg) => (lastSVG = svg)}
        />
      </div>
    </div>
  );
}

export default App;
