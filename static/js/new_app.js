// svg container
var height = 600;
var width = 1000;

// margins
var margin = {
    top: 20,
    right: 40,
    bottom: 100,
    left: 100
};

// chart area minus margins
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select(".chart").append("svg")
    .attr("height", height)
    .attr("width", width);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenYAxis = "dataArray";

// // create axes, function used to update x and y Axis upon click
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
      .duration(1000)
      .call(bottomAxis);
    return xAxis;
  }

// function used for updating y-scale var upon click on axis label
function yScale(importedData, chosenYAxis) {
    // create y scales
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(importedData, d => d[chosenYAxis] - 2),
        d3.max(importedData, d => d[chosenYAxis] * 1.1)
        ])
        .range([chartHeight, 0]);
    return yLinearScale;
}

function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    yAxis.transition()
        .duration(80000)
        .call(leftAxis);
    return yAxis;
}
function renderYBars(barsGroup, newYScale, chosenYAxis) {
    barsGroup.transition()
        .duration(80000)
        .attr("y", d => newYScale(d[chosenYAxis]));
    return barsGroup;
}

// Import Data 
d3.json("/us_vaccines").then(function(importedData) {
    // parse the data
    importedData.forEach(function(data){
        data.age = +data.age;
        data.vax_dose_series = +data.vax_dose_series;
    })

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

    function sexData(series) {
        var data = {};
        series.map(obj => {
            var sex = obj.sex
            if (data[sex]) {
                data[sex]++
            }
            else {
                data[sex] = 1
            }
        })
    return data;
    };

    function ageData(series) {
        var data = {};
        series.map(obj => {
            var age = obj.age
            if (data[age]) {
                data[age]++
            }
            else {
                data[age] = 1
            }
        })
    return data;
    };

    // DATA Y ARRAY VALUES/ X CATEGORIES FOR: STATES PER DOSE SERIES
    var stateDefault = Object.keys(stateData(doseSeries1));
    var dataArray = Object.values(stateData(doseSeries1));
    var dataArray2 = Object.values(stateData(doseSeries2));
    var dataArray3 = Object.values(stateData(otherSeries));
    
    
    var dataCategories = Object.keys([stateData(doseSeries1), 
        stateData(doseSeries2), 
        stateData(otherSeries), 
        sexData(doseSeries1),
        sexData(doseSeries2),
        sexData(otherSeries),
        ageData(doseSeries1),
        ageData(doseSeries2),
        ageData(otherSeries)
    ]);
    
    
    // var dataCategories2 = Object.keys();
    // var dataCategories3 = Object.keys);

    // DATA Y ARRAY VALUES/ X CATEGORIES FOR: SEX PER DOSE SERIES
    // var sexDataArray = Object.values(sexData(doseSeries1));
    // var sexDataCategories = );

    // DATA Y ARRAY VALUES/ X CATEGORIES FOR: AGE PER DOSE SERIES
    // var ageDataArray = Object.values(ageData(doseSeries1));
    // var ageDataCategories = Object.keys();

    // // function used for updating x-scale var upon click on axis label
    // function xScale(importedData, dataCategories) {
    //     // create x scales
    //     var xLinearScale = d3.scaleBand()
    //         .domain([d3.min(importedData, d => d[dataCategories])* 0.9,
    //         d3.max(importedData, d => d[dataCategories]*1.05)
    //     ])
    //     .range([0, chartWidth])
    //     .padding([0.2]);
    // return xLinearScale;
    // }

    // scale x to chart width
    var xScale = d3.scaleBand()
        .domain(dataCategories)
        .range([0, chartWidth])
        .padding(0.1);

    // Create y scale function
    var yLinearScale = yScale(importedData, chosenYAxis);

    // // function used for updating y-scale var upon click on axis label
    // function yScale(importedData, dataArray) {
    //     // create y scales
    //     var yLinearScale = d3.scaleLinear()
    //         .domain([d3.min(importedData, d => d[dataArray] - 2),
    //         d3.max(importedData, d => d[dataArray] * 1.1)
    //         ])
    //         .range([chartHeight, 0]);
    //     return yLinearScale;
    // }

    // // scale y to chart height
    // var yScale = d3.scaleLinear()
    //     .domain([0, d3.max(dataArray)])
    //     .range([chartHeight, 0]);
    // // scale x to chart width

    // create axes
    // var yAxis = d3.axisLeft(yScale);
    // var xAxis = d3.axisBottom(xScale);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yLinearScale);
    
    
    // set x to the bottom of the chart
    chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    // set y to the y axis 
    var yAxis = chartGroup.append("g")
        .call(leftAxis);

    // Create the rectangles using data binding
    var barsGroup = chartGroup.selectAll("rect")
        .data(importedData)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(dataCategories[i]))
        .attr("y", d => yLinearScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", chartHeight)
        .attr("fill", "#008B8B");
        // d => chartHeight - yScale(d)
        // d => yLinearScale(d)


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
    
    // x axis labels event listener
    xLabelsGroup.selectAll("text")
        .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== stateDefault) {

            // replaces chosenXAxis with value
            chosenXAxis = value;

            // updates x scale for new data
            xLinearScale = xScale(importedData, stateDefault);

            // updates x axis with transition
            xAxis = renderXAxes(xLinearScale, xAxis);

            // updates bars with new x values
            barsGroup = renderXBars(barsGroup, xLinearScale, stateDefault);
            
            // changes classes to change bold text
            if (chosenXAxis === "age") {
            ageLabel
                .classed("active", true)
                .classed("inactive", false);
            sexLabel
                .classed("active", false)
                .classed("inactive", true);
            stateLabel
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
                .classed("active", true)
                .classed("inactive", false);
            sexLabel
                .classed("active", false)
                .classed("inactive", true);
            ageLabel
                .classed("active", false)
                .classed("inactive", true);
            }
        }  
    });

    // // Create group for y-axis labels

    var yLabelsGroup = chartGroup.append("g")
    .attr("transform", "rotate(-90)", `translate(${width}, ${height})`)

    var firstDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -40)
    .attr("value", dataArray) // value to grab for event listener
    .classed("active", true)
    .text("Vaccination Count (Dose 1)");

    var secDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -60)
    .attr("value", dataArray2) // value to grab for event listener
    .classed("inactive", true)
    .text("Vaccination Count (Dose 2)");

    var otherDoseLabel = yLabelsGroup.append("text")
    .attr("x", -180)
    .attr("y", -80)
    .attr("value", dataArray3) // value to grab for event listener
    .classed("inactive", true)
    .text("Vaccination Count (Uncategorized)");
    
    yLabelsGroup.selectAll("text")
        .on("click", function() {
            // get value of selection
            var value = d3.select(this).attr("value");
            if (value !== chosenYAxis) {

                // replaces chosenYAxis with value
                chosenYAxis = value;
                // updates x scale for new data
                yLinearScale = yScale(importedData, chosenYAxis);
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

    // Create the event listeners with transitions
    barsGroup.on("mouseover", function () {
        d3.select(this)
            .transition()
            .duration(2000)
            .attr("fill", "#FF8C00");
    })
        .on("mouseout", function () {
            d3.select(this)
                .transition()
                .duration(2000)
                .attr("fill", "#008B8B");
        });
}).catch(function (error) {
    console.log(error);
});