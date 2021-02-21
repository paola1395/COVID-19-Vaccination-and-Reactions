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

// Create mirror zdog.Group
[false, true].forEach(function (isGroup) {

  let SliceClass = isGroup ? Zdog.Group : Zdog.Group;

  let dotSlice = new SliceClass({
    addTo: illo,
    translate: { z: isGroup ? 74 : -74 },
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
tri.copy({ translate: { x:  60, y:  50 } });
tri.copy({ translate: { x:  10, y:  50 } });
// upper right
tri.copy({ translate: { x:  40, y:  -20 } });
tri.copy({ translate: { x:  50, y:  -60 } });
tri.copy({ translate: { x:  5, y:  -50 } });
// lower left
tri.copy({ translate: { x:  -20, y:  30 } });
tri.copy({ translate: { x:  -40, y:  64 } });
tri.copy({ translate: { x:  -50, y:  15 } });
// upper left
tri.copy({ translate: { x:  -60, y:  -50 } });
tri.copy({ translate: { x:  -40, y:  -20 } });
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