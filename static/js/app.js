var margin = {
  top: 20,
  right: 30,
  bottom: 40,
  left: 90
};

var svgWidth = 460;
var svgHeight = 400;

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
// var subgroups = data.columns.slice(1,4)

// function used for updating x-scale var upon click on axis label
function xScale(vaccData, chosenXAxis) {
  // create x scales
  var xLinearScale = d3.scaleBand()
    .domain([d3.min(vaccData, d => d[chosenXAxis])* 0.9,
      d3.max(vaccData, d => d[chosenXAxis]*1.05)
    ])
    .range([0, width])
    .padding([0.2]);

  return xLinearScale;

}

// function used for updating y-scale var upon click on axis label
function yScale (vaccData, chosenYAxis) {
  // create y scales
  var yLinearScale = d3.scaleLinear()
    .domain([d3.min(vaccData, d => d[chosenYAxis]-2),
      d3.max(vaccData, d => d[chosenYAxis]*1.1)
    ])
    .range([height, 0]);

  return yLinearScale;

}

// function used for updating xAxis var upon click on axis label
function renderXAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating yAxis var upon click on axis label
function renderYAxes(newYScale, yAxis) {
  var leftAxis = d3.axisLeft(newYScale);

  yAxis.transition()
    .duration(1000)
    .call(leftAxis);

  return yAxis;
}

// function used for updating bars group with a transition to
// new bars
function renderXBars(barsGroup, newXScale, chosenXAxis) {

  barsGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return barsGroup;
}

function renderYBars(barsGroup, newYScale, chosenYAxis) {

  barsGroup.transition()
    .duration(1000)
    .attr("cy", d => newYScale(d[chosenYAxis]));

  return barsGroup;
}

// function barTextX (barLabels, newXScale, chosenXAxis){
//   barLabels.transition()
//     .duration(1000)
//     .attr("x", d => newXScale(d[chosenXAxis]));

//   return barLabels;
// }

// function barTextY (barLabels, newYScale, chosenYAxis){
//   barLabels.transition()
//     .duration(1000)
//     .attr("y", d => newYScale(d[chosenYAxis]));

//   return barLabels;
// }


// Import Data

d3.json("/us_vaccines", function(importedData) {

    // parse the data
    importedData.forEach(function(data) {
        data.age = +data.age;
        data.sex = +data.sex;
        data.state = +data.state;
        data.vax_manu = +data.vax_manu;
        data.vax_dose_series = +data.vax_dose_series;
      })
    console.log(importedData);
    
    // xLinearScale function above csv import
    var xLinearScale = xScale(importedData, chosenXAxis);

    // // Create y scale function
    var yLinearScale = yScale(importedData, chosenYAxis);

    // // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    // // append y axis
    var yAxis = chartGroup.append("g")
        .classed("y-axis", true)
        .call(leftAxis);

    // // append initial bars
    var barsGroup = chartGroup.selectAll("rect")
        .data(importedData)
        .enter()
        .append("rect")
        .attr("cx", d => xLinearScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d[chosenYAxis]))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "green");

    // var barLabels = chartGroup.selectAll()
    //     .data(importedData)
    //     .enter()
    //     .append("text")
    //     .attr("x", d => xLinearScale(d[chosenXAxis]))
    //     .attr("y", d => yLinearScale(d[chosenYAxis]))
    //     .text(d => d.abbr)
    //     .attr("class", "stateText");

    // Create group for x-axis labels
    // var xLabelsGroup = chartGroup.append("g")
    //     .attr("transform", `translate(${width / 2}, ${height + 20})`);

    // var ageLabel = xLabelsGroup.append("text")
    //     .attr("x", 0)
    //     .attr("y", 20)
    //     .attr("value", "age") // value to grab for event listener
    //     .classed("active", true)
    //     .text("Age");

    // var sexLabel = xLabelsGroup.append("text")
    //     .attr("x", 0)
    //     .attr("y", 40)
    //     .attr("value", "sex") // value to grab for event listener
    //     .classed("inactive", true)
    //     .text("Sex");
    
    // var stateLabel = xLabelsGroup.append("text")
    //     .attr("x", 0)
    //     .attr("y", 60)
    //     .attr("value", "state") // value to grab for event listener
    //     .classed("inactive", true)
    //     .text("State");

    // // // Create group for y-axis labels
    // var yLabelsGroup = chartGroup.append("g")
    //     .attr("transform", "rotate(-90)", `translate(${width}, ${height})`)

    // var firstDoseLabel = yLabelsGroup.append("text")
    //     .attr("x", -180)
    //     .attr("y", -40)
    //     .attr("value", "vax dose series 1") // value to grab for event listener
    //     .classed("active", true)
    //     .text("Vaccination Count (Dose 1)");

    // var secDoseLabel = yLabelsGroup.append("text")
    //     .attr("x", -180)
    //     .attr("y", -60)
    //     .attr("value", "vax dose series 2") // value to grab for event listener
    //     .classed("inactive", true)
    //     .text("Vaccination Count (Dose 2)");

    // x axis labels event listener
    // xLabelsGroup.selectAll("text")
    //     .on("click", function() {
    //     // get value of selection
    //     var value = d3.select(this).attr("value");
    //     if (value !== chosenXAxis) {

    //         // replaces chosenXAxis with value
    //         chosenXAxis = value;

    //         // updates x scale for new data
    //         xLinearScale = xScale(importedData, chosenXAxis);

    //         // updates x axis with transition
    //         xAxis = renderXAxes(xLinearScale, xAxis);

    //         // updates bars with new x values
    //         barsGroup = renderXBars(barsGroup, xLinearScale, chosenXAxis);
            
    //         // changes classes to change bold text
    //         if (chosenXAxis === "age") {
    //         ageLabel
    //             .classed("active", true)
    //             .classed("inactive", false);
    //         sexLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         stateLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         }
    //         else if (chosenXAxis === "sex") {
    //         ageLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         sexLabel
    //             .classed("active", true)
    //             .classed("inactive", false);
    //         stateLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         }
    //         else {
    //         ageLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         sexLabel
    //             .classed("active", false)
    //             .classed("inactive", true);
    //         stateLabel
    //             .classed("active", true)
    //             .classed("inactive", false);
    //         }
    //     }  
    //     });

    // yLabelsGroup.selectAll("text")
    // .on("click", function() {
    //     // get value of selection
    //     var value = d3.select(this).attr("value");
    //     if (value !== chosenYAxis) {

    //     // replaces chosenXAxis with value
    //     chosenYAxis = value;

    //     // updates x scale for new data
    //     yLinearScale = yScale(importedData, chosenYAxis);

    //     // updates x axis with transition
    //     yAxis = renderYAxes(yLinearScale, yAxis);

    //     // updates bars with new x values
    //     barsGroup = renderYBars(barsGroup, yLinearScale, chosenYAxis);

    //     // changes classes to change bold text
    //     if (chosenYAxis === "vax dose series 1") {
    //         firstDoseLabel
    //         .classed("active", true)
    //         .classed("inactive", false);
    //         secDoseLabel
    //         .classed("active", false)
    //         .classed("inactive", true);
    //     }
    //     else if (chosenYAxis === "vax dose series 2") {
    //         firstDoseLabel
    //         .classed("active", false)
    //         .classed("inactive", true);
    //         secDoseLabel
    //         .classed("active", true)
    //         .classed("inactive", false);
    //     }
    //     }  
    // });
    }).catch(function(error) {
    console.log(error);
})