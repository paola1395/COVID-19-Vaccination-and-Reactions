// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("/us_vaccines").then(function(incomingData) {
    var sympOne = incomingData.symptom1, 
        sympTwo = incomingData.symptom2,
        sympThree = incomingData.symptom3,
        sympFour = incomingData.symptom4,
        sympFive = incomingData.symptom5,
        symptoms = Object.assign({}, sympOne, sympTwo, sympThree, sympFour, sympFive);
    // console.log(symptoms);

})



// Initializes the page with a default plot & sets up dropdown
// function init() {
//     d3.json("/us_vaccines").then(function(data) {
//         // var sympOne = data.symptom1;
//         // var sympTwo = data.symptom2;
//         // var sympThree = data.symptom3;
//         // var sympFour = data.symptom4;
//         // var sympFive = data.symptom5;
//         var vaxDoses = data.vax_dose_series
//         var idNum = data.id

//         // Append options to the dropdown menu
//         vaxDoses.forEach(x => {
//             var dropDown = d3.select("#selDataset");
//             var selectOption = dropDown.append("option");
//             selectOption.attr("value", x).text(x)
//         })
        
//         // Call the optionChanged function to show the first ID's charts
//         optionChanged(idNum[0])
//     });
//   }

// // Data used for chart
// d3.json("/us_vaccines").then((importedData) => {
//     console.log(importedData);
// })

// function bubbleChart(valueSelect) {
//     var filterValue3 = data.samples.filter(value => value.id == valueSelect);
//     var ouid = filterValue3.map(v => v.otu_ids);
//     ouid = ouid[0];
//     var valueY = filterValue3.map(v => v.sample_values);
//     valueY = valueY[0];
  
//     var out_label = filterValue3.map(v => v.otu_labels);
//     out_label = treatBacName(out_label[0]);
  
//     var trace1 = {
//       x: ouid,
//       y: valueY,
//       mode: "markers",
//       marker: {
//         color: ouid,
//         size: valueY
//       },
//       text: out_label
//     };
  
//     var data2 = [trace1];
  
//     var layout = {
//       showlegend: false,
//       xaxis: { title: "OTU ID" }
//     };
   
   
//    Plotly.newPlot("bubble", data2, layout);
//   }








