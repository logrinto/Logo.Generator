import React, { Component } from "react";
import Paper from "paper";
import "./styles.css";

import { aidRaster } from "../../util/raster";

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default class Sketch extends Component {
  componentDidMount() {
    // Instantiate the paperScope with the canvas element
    var myCanvas = document.getElementById("myCanvas");
    Paper.setup(myCanvas);
    this.renderLogo();
  }

  componentDidUpdate(prevProps) {
    this.renderLogo();
  }

  renderLogo() {
    if (this.props.hasType) {
      aidRaster.x = 7;
      aidRaster.y = 7;
      aidRaster.xLogoOffset = 3;
      aidRaster.yLogoOffset = -3;
      this.checked = true;
    } else {
      aidRaster.x = 4;
      aidRaster.y = 4;
      aidRaster.xLogoOffset = 0;
      aidRaster.yLogoOffset = 0;
      this.checked = false;
    }

    Paper.project.activeLayer.removeChildren();

    aidRaster.width = Paper.view.size.width;

    // full size bg
    var rectangle = new Paper.Rectangle(
      new Paper.Point(0, 0),
      new Paper.Point(aidRaster.width, aidRaster.width)
    );
    var path = new Paper.Path.Rectangle(rectangle);
    path.fillColor = "#ffffff";

    // aidRaster.drawGrid();

    var greenStick = aidRaster.calcStick("green");
    var purpleStick = aidRaster.calcStick(getRandom(["purpleA", "purpleB"]));
    var blueStick = aidRaster.calcStick(getRandom(["blueA", "blueB"]));

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

    if (this.props.onEndRender) {
      this.props.onEndRender(Paper.project.exportSVG().outerHTML);
    }

    Paper.view.update();

    console.log("run logo end");
  }

  render() {
    return <canvas id="myCanvas" resize="true" width="600" height="600" />;
  }
}
