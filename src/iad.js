let logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1005 285">
		  <title>typo</title>
		  <rect x="540" y="30" width="30" height="30"/>
		  <rect x="780" y="60" width="30" height="30"/>
		  <path d="M492.43,60a30,30,0,0,0-21.21,8.79L457.5,82.5l1.35,1.35A21,21,0,0,0,473.7,90H510V60H492.43Z"/>
		  <path d="M458.85,83.85L457.5,82.5,443.79,96.21A30,30,0,0,0,435,117.43V180h30V98.7A21,21,0,0,0,458.85,83.85Z"/>
		  <path d="M563.85,83.85L562.5,82.5,548.79,96.21A30,30,0,0,0,540,117.43V180h30V98.7A21,21,0,0,0,563.85,83.85Z"/>
		  <path d="M30,30v92.57a30,30,0,0,0,8.79,21.21L52.5,157.5l1.35-1.35A21,21,0,0,0,60,141.3V30H30Z"/>
		  <path d="M68.7,150a21,21,0,0,0-14.85,6.15L52.5,157.5l13.71,13.71A30,30,0,0,0,87.43,180H120V150H68.7Z"/>
		  <path d="M750,30v92.57a30,30,0,0,0,8.79,21.21L772.5,157.5l1.35-1.35A21,21,0,0,0,780,141.3V30H750Z"/>
		  <path d="M788.7,150a21,21,0,0,0-14.85,6.15l-1.35,1.35,13.71,13.71A30,30,0,0,0,807.43,180H840V150H788.7Z"/>
		  <path d="M375,165v51.09a21,21,0,0,0,6.15,14.85l1.35,1.35,13.71-13.71A30,30,0,0,0,405,197.36V165H375Z"/>
		  <path d="M381.15,230.94a21,21,0,0,0-14.85-6.15H315v30h32.57A30,30,0,0,0,368.79,246l13.71-13.71Z"/>
		  <path d="M951.15,156.15A21,21,0,0,0,936.3,150H885v30h32.57a30,30,0,0,0,21.21-8.79L952.5,157.5Z"/>
		  <path d="M878.85,83.85L877.5,82.5,863.79,96.21A30,30,0,0,0,855,117.43V150h30V98.7A21,21,0,0,0,878.85,83.85Z"/>
		  <path d="M912.43,60a30,30,0,0,0-21.21,8.79L877.5,82.5l1.35,1.35A21,21,0,0,0,893.7,90H945V60H912.43Z"/>
		  <path d="M945,90v51.3a21,21,0,0,0,6.15,14.85l1.35,1.35,13.71-13.71A30,30,0,0,0,975,122.57V90H945Z"/>
		  <path d="M231.15,156.15A21,21,0,0,0,216.3,150H165v30h32.57a30,30,0,0,0,21.21-8.79L232.5,157.5Z"/>
		  <path d="M158.85,83.85L157.5,82.5,143.79,96.21A30,30,0,0,0,135,117.43V150h30V98.7A21,21,0,0,0,158.85,83.85Z"/>
		  <path d="M192.43,60a30,30,0,0,0-21.21,8.79L157.5,82.5l1.35,1.35A21,21,0,0,0,173.7,90H225V60H192.43Z"/>
		  <path d="M225,90v51.3a21,21,0,0,0,6.15,14.85l1.35,1.35,13.71-13.71A30,30,0,0,0,255,122.57V90H225Z"/>
		  <path d="M657.43,60a30,30,0,0,0-21.21,8.79L622.5,82.5l1.35,1.35A21,21,0,0,0,638.7,90H690V60H657.43Z"/>
		  <path d="M381.15,156.15A21,21,0,0,0,366.3,150H315v30h32.57a30,30,0,0,0,21.21-8.79L382.5,157.5Z"/>
		  <path d="M308.85,83.85L307.5,82.5,293.79,96.21A30,30,0,0,0,285,117.43V150h30V98.7A21,21,0,0,0,308.85,83.85Z"/>
		  <path d="M342.43,60a30,30,0,0,0-21.21,8.79L307.5,82.5l1.35,1.35A21,21,0,0,0,323.7,90H375V60H342.43Z"/>
		  <path d="M375,90v51.3a21,21,0,0,0,6.15,14.85l1.35,1.35,13.71-13.71A30,30,0,0,0,405,122.57V90H375Z"/>
		  <path d="M623.85,83.85L622.5,82.5,608.79,96.21A30,30,0,0,0,600,117.43V180h30V98.7A21,21,0,0,0,623.85,83.85Z"/>
		  <rect x="690" y="90" width="30" height="90"/>
		</svg>`;

var debug = false;

// svg animation
// http://codepen.io/PorototypeX/pen/obIsg

var aidRaster = {
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

  width: 300, // the canvas width

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
    var p1c = new paper.Point(
      this.shortenLine(p1.x, p1.y, p2.x, p2.y, this.pathExtendedWidth / 2)
    );
    var p2c = new paper.Point(
      this.shortenLine(p2.x, p2.y, p1.x, p1.y, this.pathExtendedWidth / 2)
    );

    var topPoints = this.expandLine(
      p1c.x,
      p1c.y,
      p2c.x,
      p2c.y,
      this.pathExtendedWidth / 2
    );
    var p1r = new paper.Point(topPoints[1]);
    var p1l = new paper.Point(topPoints[0]);

    var bottomPoints = this.expandLine(
      p2c.x,
      p2c.y,
      p1c.x,
      p1c.y,
      this.pathExtendedWidth / 2
    );
    var p2r = new paper.Point(bottomPoints[0]);
    var p2l = new paper.Point(bottomPoints[1]);

    // var p1c = new paper.Point( this.stortenLineDistance(p1.x ,p1.y, p2.x, p2.y, this.pathExtendedWidth/2 ) );

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

      var pathOutline = new paper.Path();
      pathOutline.strokeCap = "square";
      pathOutline.miterLimit = 10;
      pathOutline.strokeColor = color; //prefs.color;
      pathOutline.strokeWidth = (this.pathExtendedWidth / 2) * this.getScale();

      for (var pointIndex = 0; pointIndex < drawPoints.length; pointIndex++) {
        pathOutline.add(scalePoints[drawPoints[pointIndex]]);
      }
    }

    if (debug) {
      var path = new paper.Path();
      path.strokeColor = "black"; //prefs.color;
      path.strokeWidth = 2; // this.pathExtendedWidth / 2 * this.getScale();

      path.moveTo(scalePoints.p1);
      path.lineTo(scalePoints.p2);

      var circle = new paper.Path.Circle({
        center: scalePoints.p1c,
        radius: 3,
        fillColor: "green"
      });

      var circle = new paper.Path.Circle({
        center: scalePoints.p2c,
        radius: 3,
        fillColor: "red"
      });

      var circle = new paper.Path.Circle({
        center: scalePoints.p1r,
        radius: 3,
        fillColor: "red"
      });

      var circle = new paper.Path.Circle({
        center: scalePoints.p1l,
        radius: 3,
        fillColor: "red"
      });

      var circle = new paper.Path.Circle({
        center: scalePoints.p2r,
        radius: 3,
        fillColor: "green"
      });

      var circle = new paper.Path.Circle({
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
      start = new paper.Point(
        this.getGridPoint(prefs.x),
        this.getGridPoint(prefs.y)
      );
      end = new paper.Point(
        this.getGridPoint(prefs.x + prefs.width),
        this.getGridPoint(prefs.y + prefs.height)
      );
    } else {
      start = new paper.Point(
        this.getGridPoint(prefs.x + prefs.width),
        this.getGridPoint(prefs.y)
      );
      end = new paper.Point(
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
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = color;

    path.strokeWidth = this.pathWidth * this.getScale();

    var pos = this.calcStickPosition(prefs);

    startScale = pos.start.multiply(this.getScale());
    endScale = pos.end.multiply(this.getScale());

    // Move to start and draw a line from there
    path.moveTo(startScale);

    // Note the plus operator on Point objects.
    // PaperScript does that for us, and much more!
    path.lineTo(endScale);
  },

  SVGSymbol: function() {
    var a = new paper.Symbol(paper.project.importSVG(logoSVG));
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
    //p.scale(0.2, new paper.Point(0, 0));

    var svgWidth = p.bounds.bottomRight.x - p.bounds.topLeft.x;

    var gridWidth = this.getGridPoint(this.x - 1) - this.getGridPoint(0);

    gridWidth *= this.getScale();

    p.scale((1 / svgWidth) * gridWidth); // 1005px svg width

    var currentPos = p.bounds.topLeft;

    p.position = new Point(0 - currentPos.x + posX, 0 - currentPos.y + posY);
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

    var stick = {
      p1: {
        x: 0,
        y: 0
      },
      p2: {
        x: 0,
        y: 0
      }
    };

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

        var circle = new paper.Path.Circle({
          center: [currentX * this.getScale(), currentY * this.getScale()],
          radius: (this.xDotWidth / 2) * this.getScale(),
          fillColor: "#555"
        });
      }
    }
  }
};

var thiz = this;

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function runLogo() {
  console.log("run logo start");

  paper.project.activeLayer.removeChildren();

  // full size bg
  var rectangle = new paper.Rectangle(
    new Point(0, 0),
    new Point(aidRaster.width, aidRaster.width)
  );
  var path = new paper.Path.Rectangle(rectangle);
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

  paper.view.update();

  console.log("run logo end");
}

$(document).ready(function() {
  console.log("ready");

  // init random with a seed
  //Math.seedrandom('iad');

  paper.install(window);

  // setup paper
  var rasterCanvas = $("#canvas"); // document.getElementById('processDraw');

  //console.log(rasterCanvas);
  paper.setup(rasterCanvas[0]);

  function saveSVGZip() {
    var zip = new JSZip();
    var currentExportFolder = zip.folder("out");

    for (var i = 0; i < 501; i++) {
      console.log("add to zip", i);

      addSVGtoDom();
      var svg = $("#svg").html();

      currentExportFolder.file("export_" + i + ".svg", svg);
      runLogo();
    }

    var content = zip.generate({
      type: "blob"
    });
    // see FileSaver.js

    saveAs(content, "out.zip");
  }

  function addSVGtoDom() {
    $("#svg *").remove();
    $("#svg").append(paper.project.exportSVG());

    // Add some critical information
    $("svg").attr({
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    });
  }

  function saveSVG() {
    //console.log(paper.project.exportSVG());
    addSVGtoDom();
    var svg = $("#svg").html();

    var blob = new Blob([svg], {
      type: "data:image/svg+xml;charset=utf-8"
    });
    saveAs(blob, "logo.svg");
  }

  console.log("run start");

  $("#run").on("click", saveSVG);
  $("#runZip").on("click", saveSVGZip);
  $("#new").on("click", runLogo);

  $("#typoon").change(function() {
    if (this.checked) {
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
    runLogo();
  });

  runLogo();
});
