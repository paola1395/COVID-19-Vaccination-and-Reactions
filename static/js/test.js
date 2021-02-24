// @TODO: YOUR CODE HERE!
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
  .attr("height", svgHeight);
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
// Import Data
d3.json("/us_vaccines", function(importedData) {
    // Parse Data/Cast as numbers
    // ==============================
    // parse data
    importedData.forEach(function(data) {
        data.age = +data.age;
        data.sex = +data.sex;
        data.state = +data.state;
        data.vax_manu = +data.vax_manu;
        data.vax_dose_series = +data.vax_dose_series;
    });
    console.log(importedData);
    // Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(importedData, d => d.age)-0.5, d3.max(importedData, d => d.age)+2])
        .range([0, width]);
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(importedData, d => d.sex)-1, d3.max(importedData, d => d.sex)+2])
        .range([height, 0]);
//     // Create axis functions
//     // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);
//     // Step 4: Append Axes to the chart
//     // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);
    chartGroup.append("g")
      .call(leftAxis);
//     // Create Circlesand Circle Labels
//     // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
      .data(importedData)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.age))
      .attr("cy", d => yLinearScale(d.sex))
      .attr("r", "14")
      .attr("class", "stateCircle");
//   //  add text to Circle
    var circleLabels = chartGroup.selectAll()
      .data(importedData)
      .enter()
      .append("text")
      .text(d => d.abbr)
      .attr("x", d => xLinearScale(d.age))
      .attr("y", d => yLinearScale(d.sex) + 6)
      .attr("class", "stateText");
//     // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 5)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "aText")
      .text("Lacks Healthcare (%)");
    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "aText")
      .text("In Poverty (%)");
  }).catch(function(error) {
    console.log(error);
  });