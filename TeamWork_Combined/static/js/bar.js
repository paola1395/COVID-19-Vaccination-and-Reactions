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

// Import Data
  
d3.json("/us_vaccines").then(function(importedData) {
  
    // parse the data
    importedData.forEach(function(data) {
        data.age = +data.age;
        data.vax_dose_series = +data.vax_dose_series;
        ;
      })
    
    var doseSeries1 = importedData.filter(obj => obj.vax_dose_series === 1);
    var doseSeries2 = importedData.filter(obj => obj.vax_dose_series === 2);
    var otherSeries = importedData.filter(obj => !obj.vax_dose_series);

console.log(doseSeries1);

      function chartData(series) {
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
      }
// data
var dataArray = Object.values(chartData(doseSeries1));

// var dataCategories = ["one", "two", "three"];
var dataCategories = Object.keys(chartData(doseSeries1));;
// doseSeries1.map(obj => {
//     var state = obj.state
//     if (!dataCategories.includes(state)){
//         dataCategories.push(state)
//     }
// })

// scale y to chart height
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([chartHeight, 0]);

// scale x to chart width
var xScale = d3.scaleBand()
    .domain(dataCategories)
    .range([0, chartWidth])
    .padding(0.1);

// create axes
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

// set x to the bottom of the chart
chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

// set y to the y axis
chartGroup.append("g")
    .call(yAxis);

// Create the rectangles using data binding
var barsGroup = chartGroup.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(dataCategories[i]))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => chartHeight - yScale(d))
    .attr("fill", "green");

// Create the event listeners with transitions
barsGroup.on("mouseover", function() {
  d3.select(this)
            .transition()
            .duration(1500)
            .attr("fill", "red");
})
    .on("mouseout", function() {
      d3.select(this)
            .transition()
            .duration(1500)
            .attr("fill", "green");
    });
})