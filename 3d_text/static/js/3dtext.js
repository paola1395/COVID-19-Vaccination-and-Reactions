// Made with Zdog

let illo = new Zdog.Illustration({
  element: '.zdog-text',
  // rotate: { x: -Zdog.TAU/16 },
  dragRotate: true
});

var textGroup = new Zdog.Anchor({
  addTo: illo
});

var cLetter = new Zdog.Ellipse({
  addTo: textGroup,
  diameter: 80,
  quarters: 3,
  stroke: 10,
  translate: { z: 10 },
  rotate: {y: -9.5, x: -9.5, z: 30.5},
  color: '#C25',
});

var vLetter = new Zdog.Shape({
  addTo: textGroup,
  translate: { z: -10, x: 70 },
  path:[
    {x:  -30, y: -40},
    {x:  5, y: 40},
    {x:  30, y: -40},
  ],
  closed: false,
  stroke: 10,
  color: '#636',
});


var rLetter = new Zdog.Anchor({
  addTo: textGroup
});

var partOneR = new Zdog.Shape({
  addTo: rLetter,
  translate: { z: -30, x: 150},
  path:[
    {x:  -30, y: -40},
    {x:  -30, y: 40}
  ],
  closed: false,
  stroke: 10,
  color: '#C25',
});

var partTwoR = new Zdog.Ellipse({
  addTo: rLetter,
  translate: { z: -30, x: 145, y: -20},
  rotate: {y: 19, x:9.4},
  diameter: 50,
  quarters: 3,
  stroke: 10,
  color: '#C25',
});

var partThreeR = new Zdog.Shape({
  addTo: rLetter,
  translate: { z: -30, x: 150},
  path:[
    {x:  -25, y: 5},
    {x:  20, y: 40}
  ],
  closed: false,
  stroke: 10,
  color: '#C25',
});

function animate() {
  // rotate illo each frame
  // illo.rotate.y += 0.01;
  // illo.rotate.x += 0.01;
  // illo.rotate.z += 0.01;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();


