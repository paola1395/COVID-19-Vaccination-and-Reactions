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

// Define the shape position
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
});
 
 
// update & render
illo.updateRenderGraph();
  
function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.01;
  // illo.rotate.x += 0.02;
  // illo.rotate.z += 0.02;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
  }
// start animation
animate();