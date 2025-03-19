import React, { useEffect, useCallback } from "react";
import Paper from "paper";
import { debug } from "../../settings";
import "./styles.css";

import { aidRaster } from "../../util/raster";
// 1993 Park-Miller linear congruential generator (LCG)
// https://en.wikipedia.org/wiki/Lehmer_random_number_generator
// Source: https://gist.github.com/blixt/f17b47c62508be59987b

// usage:
// let rand = LCG(42);
// rand() → 0.000944073311984539
// rand() → 0.5713628428056836
// rand() → 0.2557850731536746

const LCG = (s) => {
  return () => {
    s = Math.imul(48271, s) | 0 % 2147483647;
    return (s & 2147483647) / 2147483648;
  };
};

function getRandom(list, randomFn = Math.random) {
  return list[Math.floor(randomFn() * list.length)];
}

const Sketch = ({ hasType, onEndRender, seed }) => {
  const renderLogo = useCallback(() => {
    // Initialize random generator with seed
    const random = LCG(seed);

    console.log("run logo start", seed);

    if (hasType) {
      aidRaster.x = 7;
      aidRaster.y = 7;
      aidRaster.xLogoOffset = 3;
      aidRaster.yLogoOffset = -3;
    } else {
      aidRaster.x = 4;
      aidRaster.y = 4;
      aidRaster.xLogoOffset = 0;
      aidRaster.yLogoOffset = 0;
    }

    Paper.project.activeLayer.removeChildren();

    aidRaster.width = Paper.view.size.width;

    // full size bg
    var rectangle = new Paper.Rectangle(
      new Paper.Point(0, 0),
      new Paper.Point(aidRaster.width, aidRaster.width),
    );
    var path = new Paper.Path.Rectangle(rectangle);
    path.fillColor = "#ffffff";

    if (debug) {
      aidRaster.drawGrid();
    }

    var greenStick = aidRaster.calcStick("green");
    var purpleStick = aidRaster.calcStick(
      getRandom(["purpleA", "purpleB"], random),
    );
    var blueStick = aidRaster.calcStick(getRandom(["blueA", "blueB"], random));

    // draw lines
    aidRaster.drawStickLine(greenStick, aidRaster.greenColor);
    aidRaster.drawStickLine(purpleStick, aidRaster.purpleColor);
    aidRaster.drawStickLine(blueStick, aidRaster.blueColor);

    // draw outline
    aidRaster.drawStickOutLine(greenStick, aidRaster.greenColor);
    aidRaster.drawStickOutLine(purpleStick, aidRaster.purpleColor);
    aidRaster.drawStickOutLine(blueStick, aidRaster.blueColor);

    if (aidRaster.xLogoOffset !== 0) {
      aidRaster.drawTypo();
    }

    if (onEndRender) {
      onEndRender(Paper.project.exportSVG().outerHTML);
    }

    Paper.view.update();

    console.log("run logo end");
  }, [hasType, seed, onEndRender]);

  // Setup Paper.js once the component mounts
  useEffect(() => {
    var myCanvas = document.getElementById("myCanvas");
    Paper.setup(myCanvas);
    renderLogo();
  }, []);

  // Re-render when props change
  useEffect(() => {
    renderLogo();
  }, [renderLogo]);

  return <canvas id="myCanvas" resize="true" width="600" height="600" />;
};

export default Sketch;
