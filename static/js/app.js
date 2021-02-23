var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 20,
  bottom: 60,
  left: 60
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);






// Initial Params
var chosenXAxis = "age";
var chosenYAxis = "dose_one"
var groups = "manufacturer"

// function used for updating x-scale var upon click on axis label
function xScale(healthData, chosenXAxis) {
  // create x scales
  var xLinearScale = d3.scaleBand()
    .domain([d3.min(healthData, d => d[chosenXAxis])* 0.9,
      d3.max(healthData, d => d[chosenXAxis]*1.05)
    ])
    .range([0, width]);

  return xLinearScale;

}

// // function used for updating y-scale var upon click on axis label
// function yScale (healthData, chosenYAxis) {
//   // create y scales
//   var yLinearScale = d3.scaleLinear()
//     .domain([d3.min(healthData, d => d[chosenYAxis]-2),
//       d3.max(healthData, d => d[chosenYAxis]*1.1)
//     ])
//     .range([height, 0]);

//   return yLinearScale;

// }

// // function used for updating xAxis var upon click on axis label
// function renderXAxes(newXScale, xAxis) {
//   var bottomAxis = d3.axisBottom(newXScale);

//   xAxis.transition()
//     .duration(1000)
//     .call(bottomAxis);

//   return xAxis;
// }

// // function used for updating yAxis var upon click on axis label
// function renderYAxes(newYScale, yAxis) {
//   var leftAxis = d3.axisLeft(newYScale);

//   yAxis.transition()
//     .duration(1000)
//     .call(leftAxis);

//   return yAxis;
// }

// // function used for updating circles group with a transition to
// // new circles
// function renderXCircles(circlesGroup, newXScale, chosenXAxis) {

//   circlesGroup.transition()
//     .duration(1000)
//     .attr("cx", d => newXScale(d[chosenXAxis]));

//   return circlesGroup;
// }

// function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

//   circlesGroup.transition()
//     .duration(1000)
//     .attr("cy", d => newYScale(d[chosenYAxis]));

//   return circlesGroup;
// }

// function circleTextX (circleLabels, newXScale, chosenXAxis){
//   circleLabels.transition()
//     .duration(1000)
//     .attr("x", d => newXScale(d[chosenXAxis]));

//   return circleLabels;
// }

// function circleTextY (circleLabels, newYScale, chosenYAxis){
//   circleLabels.transition()
//     .duration(1000)
//     .attr("y", d => newYScale(d[chosenYAxis]));

//   return circleLabels;
// }










// Import Data

// d3.json("/us_vaccines").then((importedData) => {

    // parse the data
    // importedData.forEach(function(data) {
    //     data.age = +data.age;
    //     data.sex = +data.sex;
    //     data.state = +data.state;
    //     data.vax_manu = +data.vax_manu;
    //     data.vax_dose_series = +data.vax_dose_series;
    //   });
    
    // scale y to chart height
    // var yScale = d3.scaleLinear()
    // .domain([0, d3.max(dataArray)])
    // .range([chartHeight, 0]);

    // scale x to chart width
    // var xScale = d3.scaleBand()
    // .domain(dataCategories)
    // .range([0, chartWidth])
    // .padding(0.1);

    // create axes
    // var yAxis = d3.axisLeft(yScale);
    // var xAxis = d3.axisBottom(xScale);

    // set x to the bottom of the chart
    // chartGroup.append("g")
    // .attr("transform", `translate(0, ${chartHeight})`)
    // .call(xAxis);

    // set y to the y axis
    // chartGroup.append("g")
    // .call(yAxis);



// })