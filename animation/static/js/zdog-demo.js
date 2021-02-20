// zdog-demo.js

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
});

// Dot for line
var body = new Zdog.Cylinder({
  addTo: illo,
  diameter: 100,
  stroke: 100,
  color: "#b94646",
});

// // origin dot
// new Zdog.Shape({
//   addTo: body,
//   stroke: 8,
//   color: "#ff0080",
// });

const circle1 = new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  closed: true,
  translate: { z: 20 },
  scale: 1,
  stroke: 8,
  fill: true,
  color: "#ff0000",
});
// z line
new Zdog.Shape({
  addTo: circle1,
  path: [ {}, circle1.translate.copy().multiply({ z: -1 }) ],
  scale: 1/circle1.scale.z,
  stroke: 4,
  color: "#ff0000",
});

// z line
circle1.copyGraph({
  translate:{ z: 20, x:60},
});


// // render shapes in order added
// var virus = new Zdog.Group({
//   addTo: illo,
//   translate: { z: 10 },
// });  

// // add circle
// var body = new Zdog.Cylinder({
//   addTo: virus,
//   diameter: 100,
//   stroke: 100,
//   color: '#b94646',
// });

// var popCircleAnchor = new Zdog.Anchor({
//   addTo: body,
// });

// var popCircle= ( body.diameter + body.stroke )/2 +1 ;
// // popcircles
// new Zdog.Ellipse({
//   addTo: popCircleAnchor,
//   path: [ { y: -10 }, { y: 10 } ],
//   translate: { z: popCircle },
//   diameter: 8,
//   stroke: 8,
//   color: "#ff0000",
// });

// // Dot for line
// new Zdog.Shape({
//   addTo: body,
//   path: [ {}, body.translate.copy().multiply({ z: -1 }) ],
//   scale: 1/body.scale.z,
//   stroke: 8,
//   color: "#ff0080",
// });

// var circle1 = popCircleAnchor.copyGraph({
//   rotate: { x: 0.4 },
// });

// // line
// new Zdog.Shape({
//   addTo: circle1,
//   path: [ {}, circle1.translate.copy().multiply({ z: -2 }) ],
//   stroke: 8,
//   color: "#ff0080",
// });

// var circle2 = popCircleAnchor.copyGraph({
//   rotate: { x: -0.4 },
// });
// var circle3 = popCircleAnchor.copyGraph({
//   rotate: { x: 0.8 },
// });
// var circle4 = popCircleAnchor.copyGraph({
//   rotate: { x: -0.8 },
// });
// var circle5 = popCircleAnchor.copyGraph({
//   rotate: { y: 0.5 },
// });
// var circle6 = popCircleAnchor.copyGraph({
//   rotate: { y: 0.9 },
// });
// var circle7 = popCircleAnchor.copyGraph({
//   rotate: { y: -0.5 },
// });
// var circle8 = popCircleAnchor.copyGraph({
//   rotate: { y: -0.9 },
// });
// var circle9 = popCircleAnchor.copyGraph({
//   rotate: { x:0.3, y: -0.3 },
// });
// var circle10 = popCircleAnchor.copyGraph({
//   rotate: { x:0.6, y: -0.6 },
// });
// var circle11 = popCircleAnchor.copyGraph({
//   rotate: { x:0.3, y: 0.3 },
// });
// var circle12 = popCircleAnchor.copyGraph({
//   rotate: { x:0.6, y: 0.6 },
// });
// var circle13 = popCircleAnchor.copyGraph({
//   rotate: { x:-0.3, y: 0.3 },
// });
// var circle14 = popCircleAnchor.copyGraph({
//   rotate: { x:-0.6, y: 0.6 },
// });
// var circle15 = popCircleAnchor.copyGraph({
//   rotate: { x:-0.3, y: -0.3 },
// });
// var circle16 = popCircleAnchor.copyGraph({
//   rotate: { x:-0.6, y: -0.6 },
// });
  
// update & render
illo.updateRenderGraph();
  
function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.02;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
  }
// start animation
animate();