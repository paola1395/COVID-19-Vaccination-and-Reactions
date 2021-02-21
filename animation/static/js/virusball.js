// zdog-demo.js
// flag
let isSpinning = true;

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  rotate: { x: -Zdog.TAU/16 },
  dragRotate: true,
    // manipulate the flag when 
  // the dragging starts and ends
  onDragStart() {
    isSpinning = false
  },
  onDragEnd() {
    isSpinning = true
  }
});

// Dot for line
var body = new Zdog.Shape({
  addTo: illo,
  diameter: 160,
  stroke: 160,
  color: "#696969",
});

// Create mirror zdog.Group for triangle
[false, true].forEach(function (isGroup) {

  let SliceClass = isGroup ? Zdog.Group : Zdog.Group;

  let dotSlice = new SliceClass({
    addTo: illo,
    translate: { z: isGroup ? 74 : -74 }
  });

  // Define the triangle shape position
  let tri = new Zdog.Polygon({
    addTo: dotSlice,
    radius: 4,
    sides: 3,
    stroke: 10,
    color: isGroup ? '#ff0000' : '#ff0000',
  });
  // lower right
  tri.copy({ translate: { x:  40, y:  20 } });
  tri.copy({ translate: { x:  50, y:  50 } });
  tri.copy({ translate: { x:  10, y:  50 } });
  // upper right
  tri.copy({ translate: { x:  40, y:  -20 } });
  tri.copy({ translate: { x:  50, y:  -50 } });
  tri.copy({ translate: { x:  5, y:  -50 } });
  // lower left
  tri.copy({ translate: { x:  -20, y:  30 } });
  tri.copy({ translate: { x:  -30, y:  64 } });
  tri.copy({ translate: { x:  -50, y:  15 } });
  // upper left
  tri.copy({ translate: { x:  -60, y:  -40 } });
  tri.copy({ translate: { x:  -40, y:  -20 } });

  // Define the double circle shape position
  let cir = new Zdog.Shape({
    addTo: dotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FF8C00' : '#FF8C00',
    translate: { x:  20, y:  10 },
  });
  // lower right
  cir.copy({ translate: { x:  30, y:  50 } });
  cir.copy({ translate: { x:  10, y:  20 } });
  cir.copy({ translate: { x:  30, y:  40 } });
  // upper right
  cir.copy({ translate: { x:  10, y:  -30 } });
  cir.copy({ translate: { x:  0, y:  -30 } });
  // lower left
  cir.copy({ translate: { x:  -40, y:  35 } });
  cir.copy({ translate: { x:  -30, y:  45 } });
  // upper left
  cir.copy({ translate: { x:  -30, y:  -40 } });
  cir.copy({ translate: { x:  -20, y:  -50 } });
  cir.copy({ translate: { x:  -60, y:  -10 } });
  cir.copy({ translate: { x:  -55, y:  -15 } });

  // Define the double circle shape position
  let singleCir = new Zdog.Shape({
    addTo: dotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FFFF00' : '#FFFF00',
    translate: { x: 50, y: 0 },
  });
  // lower left
  singleCir.copy({ translate: { x:  -10, y:  60 } });
  // upper right
  singleCir.copy({ translate: { x:  30, y:  -50 } });
  // upper left
  singleCir.copy({ translate: { x:  -20, y:  -5 } });
});

// Create mirror zdog.Group for triangle top and bottom sides
[false, true].forEach(function (isGroup) {

  let SliceClass = isGroup ? Zdog.Group : Zdog.Group;

  let ydotSlice = new SliceClass({
    addTo: illo,
    translate: { y: isGroup ? 74 : -74 },
    rotate: {x: isGroup ? 80 : -80}
  });

  // Define the shape position
  let ytri = new Zdog.Polygon({
    addTo: ydotSlice,
    radius: 4,
    sides: 3,
    stroke: 10,
    color: isGroup ? '#ff0000' : '#ff0000',
  });
  // lower right
  ytri.copy({ translate: { x:  40, y:  20 } });
  ytri.copy({ translate: { x:  50, y:  50 } });
  ytri.copy({ translate: { x:  10, y:  50 } });
  // upper right
  ytri.copy({ translate: { x:  40, y:  -20 } });
  ytri.copy({ translate: { x:  50, y:  -50 } });
  ytri.copy({ translate: { x:  5, y:  -50 } });
  // lower left
  ytri.copy({ translate: { x:  -20, y:  30 } });
  ytri.copy({ translate: { x:  -30, y:  64 } });
  ytri.copy({ translate: { x:  -50, y:  15 } });
  // upper left
  ytri.copy({ translate: { x:  -60, y:  -40 } });
  ytri.copy({ translate: { x:  -40, y:  -20 } });

  // Define the double circle shape position
  let ycir = new Zdog.Shape({
    addTo: ydotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FF8C00' : '#FF8C00',
    translate: { x:  20, y:  10 },
  });
  // lower right
  ycir.copy({ translate: { x:  30, y:  50 } });
  ycir.copy({ translate: { x:  10, y:  20 } });
  ycir.copy({ translate: { x:  30, y:  40 } });
  // upper right
  ycir.copy({ translate: { x:  10, y:  -30 } });
  ycir.copy({ translate: { x:  0, y:  -30 } });
  // lower left
  ycir.copy({ translate: { x:  -40, y:  35 } });
  ycir.copy({ translate: { x:  -30, y:  45 } });
  // upper left
  ycir.copy({ translate: { x:  -30, y:  -40 } });
  ycir.copy({ translate: { x:  -20, y:  -50 } });
  ycir.copy({ translate: { x:  -60, y:  -10 } });
  ycir.copy({ translate: { x:  -55, y:  -15 } });

  // Define the double circle shape position
  let ysingleCir = new Zdog.Shape({
    addTo: ydotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FFFF00' : '#FFFF00',
    translate: { x: 50, y: 0 },
  });
  // lower left
  ysingleCir.copy({ translate: { x:  -10, y:  60 } });
  // upper right
  ysingleCir.copy({ translate: { x:  30, y:  -50 } });
  // upper left
  ysingleCir.copy({ translate: { x:  -20, y:  -5 } });
});

// Create mirror zdog.Group for triangle the remaining sides
[false, true].forEach(function (isGroup) {

  let SliceClass = isGroup ? Zdog.Group : Zdog.Group;

  let xdotSlice = new SliceClass({
    addTo: illo,
    translate: { x: isGroup ? 74 : -74 },
    rotate: {y: isGroup ? 80 : -80}
});

// Define the shape position
let xtri = new Zdog.Polygon({
  addTo: xdotSlice,
  radius: 4,
  sides: 3,
  stroke: 10,
  color: isGroup ? '#ff0000' : '#ff0000',
  });
  // lower right
  xtri.copy({ translate: { x:  40, y:  20 } });
  xtri.copy({ translate: { x:  50, y:  50 } });
  xtri.copy({ translate: { x:  10, y:  50 } });
  // upper right
  xtri.copy({ translate: { x:  40, y:  -20 } });
  xtri.copy({ translate: { x:  50, y:  -50 } });
  xtri.copy({ translate: { x:  5, y:  -50 } });
  // lower left
  xtri.copy({ translate: { x:  -20, y:  30 } });
  xtri.copy({ translate: { x:  -30, y:  64 } });
  xtri.copy({ translate: { x:  -50, y:  15 } });
  // upper left
  xtri.copy({ translate: { x:  -60, y:  -40 } });
  xtri.copy({ translate: { x:  -40, y:  -20 } });

  // Define the double circle shape position
  let xcir = new Zdog.Shape({
    addTo: xdotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FF8C00' : '#FF8C00',
    translate: { x:  20, y:  10 },
  });
  // lower right
  xcir.copy({ translate: { x:  30, y:  50 } });
  xcir.copy({ translate: { x:  10, y:  20 } });
  xcir.copy({ translate: { x:  30, y:  40 } });
  // upper right
  xcir.copy({ translate: { x:  10, y:  -30 } });
  xcir.copy({ translate: { x:  0, y:  -30 } });
  // lower left
  xcir.copy({ translate: { x:  -40, y:  35 } });
  xcir.copy({ translate: { x:  -30, y:  45 } });
  // upper left
  xcir.copy({ translate: { x:  -30, y:  -40 } });
  xcir.copy({ translate: { x:  -20, y:  -50 } });
  xcir.copy({ translate: { x:  -60, y:  -10 } });
  xcir.copy({ translate: { x:  -55, y:  -15 } });

  // Define the double circle shape position
  let xsingleCir = new Zdog.Shape({
    addTo: xdotSlice,
    diameter: 5,
    stroke: 5,
    color: isGroup ? '#FFFF00' : '#FFFF00',
    translate: { x: 50, y: 0 },
  });
  // lower left
  xsingleCir.copy({ translate: { x:  -10, y:  60 } });
  // upper right
  xsingleCir.copy({ translate: { x:  30, y:  -50 } });
  // upper left
  xsingleCir.copy({ translate: { x:  -20, y:  -5 } });
});
 
 
// update & render
illo.updateRenderGraph();
  
function animate() {
  // rotate illo each frame
  // illo.rotate.y += 0.01;
  illo.rotate.x += 0.01;
  illo.rotate.z += 0.01;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
  }
// start animation
animate();