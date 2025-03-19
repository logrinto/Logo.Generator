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

const getInitialSeed = () => {
  const params = new URLSearchParams(window.location.search);
  const urlSeed = params.get('seed');
  if (urlSeed && !isNaN(urlSeed) && urlSeed >= 1 && urlSeed <= 999) {
    return parseInt(urlSeed);
  }
  return Math.floor(Math.random() * 999) + 1;
};

const updateUrlSeed = (seed) => {
  const url = new URL(window.location);
  url.searchParams.set('seed', seed);
  window.history.pushState({}, '', url);
};

function App() {
  const [hasType, setHasType] = useState(true);
  const [seed, setSeed] = useState(getInitialSeed());

  const handleNewSeed = () => {
    const newSeed = Math.floor(Math.random() * 999) + 1;
    setSeed(newSeed);
    updateUrlSeed(newSeed);
  };

  return (
    <div className="App">
      <div id="function">
        <Checkbox checked={hasType} onChange={setHasType} />
        <Button title="New Logo" onClick={handleNewSeed} />
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
