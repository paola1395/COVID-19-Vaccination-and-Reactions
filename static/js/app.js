// svg container
var height = 600;
var width = 1000;

// margins
var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

// chart area minus margins
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// create axes, function used to update x and y Axis upon click
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
  
    xAxis.transition()
      .duration(1000)
      .call(bottomAxis);
  
    return xAxis;
  }

function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
  
    return yAxis;
  }


// Import Data

d3.json("/us_vaccines").then(function(importedData) {
  
    // parse the data
    importedData.forEach(function(data) {
        data.age = +data.age;
        data.vax_dose_series = +data.vax_dose_series;
        ;
      })
    var totalVacc = importedData.data.vax_dose_series
    console.log(totalVacc);
    var doseSeries1 = importedData.filter(obj => obj.vax_dose_series === 1);
    var doseSeries2 = importedData.filter(obj => obj.vax_dose_series === 2);
    var otherSeries = importedData.filter(obj => !obj.vax_dose_series);

// console.log(doseSeries1);

// Retrieve unique data for state, sex, and age
    function stateData(series) {
        var data = {};
        series.map(obj => {
            var state = obj.state
            if (data[state]) {
                data[state]++
            }
            else {
                data[state] = 1
            }
        })
    return data;
    };

    //Default: Dose 1 vaccination count / States
    var dataArray = Object.values(stateData(doseSeries1));
    var dataCategories = Object.keys(stateData(doseSeries1));;


    // function used for updating x-scale var upon click on axis label
    function xScale(importedData, dataCategories) {
        // create x scales
        var xLinearScale = d3.scaleBand()
            .domain([d3.min(importedData, d => d[dataCategories])* 0.9,
            d3.max(importedData, d => d[dataCategories]*1.05)
        ])
        .range([0, chartWidth])
        .padding([0.2]);
  
    return xLinearScale;
    }
    
    // function used for updating y-scale var upon click on axis label
    function yScale (importedData, dataArray) {
        // create y scales
        var yLinearScale = d3.scaleLinear()
            .domain([d3.min(importedData, d => d[dataArray]-2),
            d3.max(importedData, d => d[dataArray]*1.1)
        ])
      .range([chartHeight, 0]);
  
    return yLinearScale;
    }
    
    
    // // Create initial axis functions
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    // set x to the bottom of the chart
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    // set y to the y axis 
    var yAxis = chartGroup.append("g")
        .call(leftAxis);

    // Create the rectangles using data binding
    var barsGroup = chartGroup.selectAll("rect")
        .data(dataArray)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xLinearScale(d[dataCategories[i]]))
        .attr("y", d => yLinearScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "green");


    
    
    // function used for updating bars group with a transition to
    // new bars
    function renderXBars(barsGroup, newXScale, dataCategories) {
        barsGroup.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[dataCategories]));
        
        return barsGroup;
    }
    
    function renderYBars(barsGroup, newYScale, dataArray) {
        barsGroup.transition()
        .duration(1000)
        .attr("y", d => newYScale(d[dataArray]));
    
        return barsGroup;
    }



    // Create group for x-axis labels
    var xLabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

    var stateLabel = xLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 60)
    .attr("value", "state") // value to grab for event listener
    .classed("active", true)
    .text("State");

    var sexLabel = xLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "sex") // value to grab for event listener
    .classed("inactive", true)
    .text("Sex");

    var ageLabel = xLabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "age") // value to grab for event listener
    .classed("inactive", true)
    .text("Age");

    // // Create group for y-axis labels
    var yLabelsGroup = chartGroup.append("g")
    .attr("transform", "rotate(-90)", `translate(${width}, ${height})`)

    var firstDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -40)
    .attr("value", doseSeries1) // value to grab for event listener
    .classed("active", true)
    .text("Vaccination Count (Dose 1)");

    var secDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -60)
    .attr("value", doseSeries2) // value to grab for event listener
    .classed("inactive", true)
    .text("Vaccination Count (Dose 2)");

    var otherDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -60)
    .attr("value", otherSeries) // value to grab for event listener
    .classed("inactive", true)
    .text("Vaccination Count (Uncategorized)");

    // x axis labels event listener
    xLabelsGroup.selectAll("text")
        .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== dataCategories) {

            // replaces chosenXAxis with value
            dataCategories = value;

            // updates x scale for new data
            xLinearScale = xScale(importedData, dataCategories);

            // updates x axis with transition
            xAxis = renderXAxes(xLinearScale, xAxis);

            // updates bars with new x values
            barsGroup = renderXBars(barsGroup, xLinearScale, dataCategories);
            
            // changes classes to change bold text
            if (chosenXAxis === "age") {
            stateLabel
                .classed("active", true)
                .classed("inactive", false);
            sexLabel
                .classed("active", false)
                .classed("inactive", true);
            ageLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenXAxis === "sex") {
            stateLabel
                .classed("active", false)
                .classed("inactive", true);
            sexLabel
                .classed("active", true)
                .classed("inactive", false);
            ageLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else {
            stateLabel
                .classed("active", false)
                .classed("inactive", true);
            sexLabel
                .classed("active", false)
                .classed("inactive", true);
            ageLabel
                .classed("active", true)
                .classed("inactive", false);
            }
    }  
    });

    yLabelsGroup.selectAll("text")
        .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== dataArray) {

        // replaces chosenXAxis with value
            dataArray = value;

            // updates x scale for new data
            yLinearScale = yScale(importedData, dataArray);

            // updates x axis with transition
            yAxis = renderYAxes(yLinearScale, yAxis);

            // updates bars with new x values
            barsGroup = renderYBars(barsGroup, yLinearScale, chosenYAxis);

            // changes classes to change bold text
            if (chosenYAxis === doseSeries1) {
            firstDoseLabel
                .classed("active", true)
                .classed("inactive", false);
            secDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            otherDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === doseSeries2) {
            firstDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            secDoseLabel
                .classed("active", true)
                .classed("inactive", false);
            otherDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else {
            firstDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            secDoseLabel
                .classed("active", false)
                .classed("inactive", true);
            otherDoseLabel
                .classed("active", true)
                .classed("inactive", false);
            }
        }  
    });



// // Create the event listeners with transitions
// barsGroup.on("mouseover", function() {
//   d3.select(this)
//             .transition()
//             .duration(1500)
//             .attr("fill", "red");
// })
//     .on("mouseout", function() {
//       d3.select(this)
//             .transition()
//             .duration(1500)
//             .attr("fill", "green");
//     });
});
