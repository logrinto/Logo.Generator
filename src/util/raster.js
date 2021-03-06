// svg animation
// http://codepen.io/PorototypeX/pen/obIsg

import Paper from "paper";
import { logoSVG } from "./logo";
import { debug } from "../settings";

export const aidRaster = {
  /*
    Logo Grid for the sticks
    . . . . .
    .O.O.O.O.
    .O.O.O.O.
    .O.O.O.O.
    .O.O.O.O.
    . . . . .

    0 = 13%
    . = 9.6%
  */

  xDotWidth: 130,
  xSpaceWidth: 96,

  // amount of grid elements
  x: 7, // default for logo
  y: 7, // default for logo

  xLogoOffset: 3, // the sticks are in the top right corner
  yLogoOffset: -3, // the sticks are in the top right corner

  width: 600, // the canvas width

  greenColor: "#558779", // '#00ff99',
  blueColor: "#899f95", // '#330099',
  purpleColor: "#b1a455", // '#9966cc',

  // the green bar can just be tillt no straight
  green: {
    minX: 1,
    maxX: 2,
    minY: 3,
    maxY: 3,
    diagonal: true
  },

  //
  blueA: {
    minX: 0,
    maxX: 0,
    minY: 2,
    maxY: 2,
    diagonal: false
  },
  blueB: {
    minX: 1,
    maxX: 1,
    minY: 1,
    maxY: 1,
    diagonal: true
  },

  purpleA: {
    minX: 2,
    maxX: 2,
    minY: 2,
    maxY: 2,
    diagonal: true
  },
  purpleB: {
    minX: 3,
    maxX: 3,
    minY: 0,
    maxY: 0,
    diagonal: false
  },

  outlineDraw: [
    // L-shape A
    [
      ["p1", "p1l", "p2l"],
      ["p2", "p2r", "p1r"]
    ],

    // L-shape B
    [
      ["p1", "p1r", "p2r"],
      ["p2", "p2l", "p1l"]
    ],

    // D-shape A
    [
      ["p1", "p1l", "p2l", "p2"],
      ["p2r", "p1r"]
    ],

    // D-shape B
    [
      ["p1", "p1r", "p2r", "p2"],
      ["p2l", "p1l"]
    ],

    // O-shape A
    [["p1", "p1l", "p2l", "p2", "p2r", "p1r"]],

    // O-shape B
    [["p1l", "p2l", "p2", "p2r", "p1r", "p1"]],

    // O-shape C
    [["p2", "p2r", "p1r", "p1", "p1l", "p2l"]],

    // O-shape C
    [["p2r", "p1r", "p1", "p1l", "p2l", "p2"]]
  ],

  /*

           ┌ ─ ─ ┐
              P1
           │  ◎  │    ▲
            ─ ┼ ─     │
              │       │70
              │P1C    ▼
  P1R ◎─ ─ ─ ─◎─ ─ ─ ─◎ P1L
      │       │       │
      │       │       │
      │       │       │
      │       │       │
      │◀─────▶│◀─────▶│
      │  70   │  70   │
      │       │       │
      │       │       │
      │       │       │
      │       │       │
      │       │       │
  P2R ◎─ ─ ─ ─◎─ ─ ─ ─◎ P2L
              │P2C
              │
              │
           ┌ ─│─ ┐
              ◎
           │  P2 │
            ─ ─ ─

  */

  pathWidth: 98.9949493661, //  pathExtendedWidth/2 * sqrt(2)

  pathExtendedWidth: 140,

  calcStickOutLine: function(p1, p2) {
    var p1c = new Paper.Point(
      this.shortenLine(p1.x, p1.y, p2.x, p2.y, this.pathExtendedWidth / 2)
    );
    var p2c = new Paper.Point(
      this.shortenLine(p2.x, p2.y, p1.x, p1.y, this.pathExtendedWidth / 2)
    );

    var topPoints = this.expandLine(
      p1c.x,
      p1c.y,
      p2c.x,
      p2c.y,
      this.pathExtendedWidth / 2
    );
    var p1r = new Paper.Point(topPoints[1]);
    var p1l = new Paper.Point(topPoints[0]);

    var bottomPoints = this.expandLine(
      p2c.x,
      p2c.y,
      p1c.x,
      p1c.y,
      this.pathExtendedWidth / 2
    );
    var p2r = new Paper.Point(bottomPoints[0]);
    var p2l = new Paper.Point(bottomPoints[1]);

    // var p1c = new Paper.Point( this.stortenLineDistance(p1.x ,p1.y, p2.x, p2.y, this.pathExtendedWidth/2 ) );

    /*

    */
    return {
      p1: p1,
      p2: p2,
      p1c: p1c,
      p2c: p2c,
      p1r: p1r,
      p1l: p1l,
      p2r: p2r,
      p2l: p2l
    };
  },

  drawStickOutLine: function(prefs, color) {
    // scale

    var pos = this.calcStickPosition(prefs);
    var outline = this.calcStickOutLine(pos.start, pos.end);

    var scalePoints = {
      p1: outline.p1.multiply(this.getScale()),
      p2: outline.p2.multiply(this.getScale()),
      p1c: outline.p1c.multiply(this.getScale()),
      p2c: outline.p2c.multiply(this.getScale()),
      p1r: outline.p1r.multiply(this.getScale()),
      p1l: outline.p1l.multiply(this.getScale()),
      p2r: outline.p2r.multiply(this.getScale()),
      p2l: outline.p2l.multiply(this.getScale())
    };

    var drawPaths = this.getRandom(this.outlineDraw);

    for (var i = 0; i < drawPaths.length; i++) {
      var drawPoints = drawPaths[i];

      var pathOutline = new Paper.Path();
      pathOutline.strokeCap = "square";
      pathOutline.miterLimit = 10;
      pathOutline.strokeColor = color; //prefs.color;
      pathOutline.strokeWidth = (this.pathExtendedWidth / 2) * this.getScale();

      for (var pointIndex = 0; pointIndex < drawPoints.length; pointIndex++) {
        pathOutline.add(scalePoints[drawPoints[pointIndex]]);
      }
    }

    if (debug) {
      var path = new Paper.Path();
      path.strokeColor = "black"; //prefs.color;
      path.strokeWidth = 2; // this.pathExtendedWidth / 2 * this.getScale();

      path.moveTo(scalePoints.p1);
      path.lineTo(scalePoints.p2);

      new Paper.Path.Circle({
        center: scalePoints.p1c,
        radius: 3,
        fillColor: "green"
      });

      new Paper.Path.Circle({
        center: scalePoints.p2c,
        radius: 3,
        fillColor: "red"
      });

      new Paper.Path.Circle({
        center: scalePoints.p1r,
        radius: 3,
        fillColor: "red"
      });

      new Paper.Path.Circle({
        center: scalePoints.p1l,
        radius: 3,
        fillColor: "red"
      });

      new Paper.Path.Circle({
        center: scalePoints.p2r,
        radius: 3,
        fillColor: "green"
      });

      new Paper.Path.Circle({
        center: scalePoints.p2l,
        radius: 3,
        fillColor: "green"
      });
    }
  },

  // http://stackoverflow.com/questions/17989148/javascript-find-point-on-perpendicular-line-always-the-same-distance-away
  // http://jsfiddle.net/92jWG/6/
  expandLine: function(x1, y1, x2, y2, dist) {
    var angle = Math.atan2(y2 - y1, x2 - x1);

    // Draw a normal to the line above
    return [
      {
        x: Math.sin(angle) * dist + x1,
        y: -Math.cos(angle) * dist + y1
      },

      {
        x: -Math.sin(angle) * dist + x1,
        y: Math.cos(angle) * dist + y1
      }
    ];
  },

  // http://stackoverflow.com/questions/24376951/find-new-coordinates-of-point-on-line
  // http://jsfiddle.net/3SY8v/
  shortenLine: function(x1, y1, x2, y2, smallerLen) {
    /*
        //if line is vertical
        if(fromX === toX)
            return {x: toX, y: toY > fromY ? fromY + pxDistance : fromY - pxDistance};

        //if line is horizontal
        if(fromY === toY)
            return {y: toY, x: toX > fromX ? fromX + pxDistance : fromX - pxDistance};
    */

    // Determine line lengths
    var xlen = x2 - x1;
    var ylen = y2 - y1;

    // Determine hypotenuse length
    var hlen = Math.sqrt(Math.pow(xlen, 2) + Math.pow(ylen, 2));

    // Determine the ratio between they shortened value and the full hypotenuse.
    var ratio = smallerLen / hlen;

    var smallerXLen = xlen * ratio;
    var smallerYLen = ylen * ratio;

    // The new X point is the starting x plus the smaller x length.
    var smallerX = x1 + smallerXLen;

    // Same goes for the new Y.
    var smallerY = y1 + smallerYLen;

    return [smallerX, smallerY];
  },

  getRandom: function(list) {
    return list[Math.floor(Math.random() * list.length)];
  },

  randomBetween: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  calcStickPosition: function(prefs) {
    var start = null;
    var end = null;

    if (prefs.clockwise) {
      start = new Paper.Point(
        this.getGridPoint(prefs.x),
        this.getGridPoint(prefs.y)
      );
      end = new Paper.Point(
        this.getGridPoint(prefs.x + prefs.width),
        this.getGridPoint(prefs.y + prefs.height)
      );
    } else {
      start = new Paper.Point(
        this.getGridPoint(prefs.x + prefs.width),
        this.getGridPoint(prefs.y)
      );
      end = new Paper.Point(
        this.getGridPoint(prefs.x),
        this.getGridPoint(prefs.y + prefs.height)
      );
    }

    return {
      start: start,
      end: end
    };
  },

  drawStickLine: function(prefs, color) {
    // Create a Paper.js Path to draw a line into it:
    var path = new Paper.Path();
    // Give the stroke a color
    path.strokeColor = color;

    path.strokeWidth = this.pathWidth * this.getScale();

    var pos = this.calcStickPosition(prefs);

    let startScale = pos.start.multiply(this.getScale());
    let endScale = pos.end.multiply(this.getScale());

    // Move to start and draw a line from there
    path.moveTo(startScale);

    // Note the plus operator on Point objects.
    // PaperScript does that for us, and much more!
    path.lineTo(endScale);
  },

  SVGSymbol: function() {
    var a = new Paper.Symbol(Paper.project.importSVG(logoSVG));
    return a;
  },

  drawTypo: function() {
    var logo = this.SVGSymbol();
    var p = logo.place();

    var posX = this.getGridPoint(0);
    var posY = this.getGridPoint(4);
    posX = posX * this.getScale();
    posY = posY * this.getScale();

    // p.scale(0.2);
    //p.scale(0.2, new Paper.Point(0, 0));

    var svgWidth = p.bounds.bottomRight.x - p.bounds.topLeft.x;

    var gridWidth = this.getGridPoint(this.x - 1) - this.getGridPoint(0);

    gridWidth *= this.getScale();

    p.scale((1 / svgWidth) * gridWidth); // 1005px svg width

    var currentPos = p.bounds.topLeft;

    p.position = new Paper.Point(
      0 - currentPos.x + posX,
      0 - currentPos.y + posY
    );
  },

  getScale: function() {
    var totalWidth = this.xDotWidth * this.x + this.xSpaceWidth * (this.x + 1);
    return (this.width / totalWidth) * 1;
  },

  getGridPoint: function(value) {
    return (
      (value + 1) * (this.xSpaceWidth + this.xDotWidth) - this.xDotWidth / 2
    );
  },

  calcStick: function(name) {
    var prefs = this[name];

    var width = this.randomBetween(prefs.minX, prefs.maxX);
    var height = this.randomBetween(prefs.minY, prefs.maxY);

    var xOffset = this.randomBetween(this.xLogoOffset, this.x - width - 1);
    var yOffset = this.randomBetween(0, this.y - height - 1 + this.yLogoOffset);

    var clockwise = Math.random() >= 0.5;

    return {
      x: xOffset,
      y: yOffset,
      width: width,
      height: height,
      clockwise: clockwise
    };
  },

  drawGrid: function() {
    // Do something with name, you can access regExForName variable
    // using "this.regExForName"

    for (var x = 0; x < this.x; x++) {
      for (var y = 0; y < this.y; y++) {
        var currentX = this.getGridPoint(x);
        var currentY = this.getGridPoint(y);

        new Paper.Path.Circle({
          center: [currentX * this.getScale(), currentY * this.getScale()],
          radius: (this.xDotWidth / 2) * this.getScale(),
          fillColor: "#555"
        });
      }
    }
  }
};
