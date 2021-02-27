// function init() {
//     d3.json("/doseone").then(function (data) {
//         // console.log(data);

//         var symptomsDose1 = [];
//         var countDose1 = [];
//         var symptomsDose2 = [];
//         var countDose2 = [];
//         var otherSymp = [];
//         var otherCount = [];
//         // console.log(symptomsDose2);

//         data.forEach(symptom => {
//             Object.entries(symptom).forEach(([key, value]) => {
//                 if (key === "symptom") {
//                     symptomsDose1.push(value);
//                 } else {
//                     countDose1.push(value);
//                 }
//             });
//         })

//         // console.log(countDose1);
//         // console.log(symptomsDose1);

//         d3.json("/dosetwo").then(function (data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) => {
//                     if (key === "symptom") {
//                         symptomsDose2.push(value);
//                     } else {
//                         countDose2.push(value);
//                     }
//                 });
//             })
//         });

//         d3.json("/otherdose").then(function (data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) => {
//                     if (key === "symptom") {
//                         otherSymp.push(value);
//                     } else {
//                         otherCount.push(value);
//                     }
//                 });
//             })
//         });

//         // Combine dose data for dropdown
//         var doseOneData = [symptomsDose1, countDose1];
//         var doseTwoData = [symptomsDose2, countDose2];
//         var otherData = [otherSymp, otherCount];

//         var allDoseData = [doseOneData, doseTwoData, otherData];
//         console.log(allDoseData);

//         var topSymptoms = allDoseData[0][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts = allDoseData[0][1].slice(0, 10);
//         console.log(topCounts);

//         data = [{
//             x: topSymptoms,
//             y: topCounts
//             // mode = "markers"
//         }];

//         Plotly.newPlot("bubble", data);


//     });
// }

// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly() {
//     d3.json("/doseone").then(function (data) {
//         // console.log(data);
//         var dropdownMenu = d3.select("#selDataset");
//             // Assign the value of the dropdown menu option to a variable
//         var dataset = dropdownMenu.property("value");

//         var symptomsDose1 = [];
//         var countDose1 = [];
//         var symptomsDose2 = [];
//         var countDose2 = [];
//         var otherSymp = [];
//         var otherCount = [];
//         // console.log(symptomsDose2);

//         data.forEach(symptom => {
//             Object.entries(symptom).forEach(([key, value]) => {
//                 if (key === "symptom") {
//                     symptomsDose1.push(value);
//                 } else {
//                     countDose1.push(value);
//                 }
//             });
//         })

//         // console.log(countDose1);
//         // console.log(symptomsDose1);

//         d3.json("/dosetwo").then(function (data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) => {
//                     if (key === "symptom") {
//                         symptomsDose2.push(value);
//                     } else {
//                         countDose2.push(value);
//                     }
//                 });
//             })
//         });

//         d3.json("/otherdose").then(function (data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) => {
//                     if (key === "symptom") {
//                         otherSymp.push(value);
//                     } else {
//                         otherCount.push(value);
//                     }
//                 });
//             })
//         });

//         // Combine dose data for dropdown
//         var doseOneData = [symptomsDose1, countDose1];
//         var doseTwoData = [symptomsDose2, countDose2];
//         var otherData = [otherSymp, otherCount];

//         var allDoseData = [doseOneData, doseTwoData, otherData];
//         console.log(allDoseData);

//         var topSymptoms = allDoseData[0][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts = allDoseData[0][1].slice(0, 10);
//         console.log(topCounts);
//         var topSymptoms2 = allDoseData[1][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts2 = allDoseData[1][1].slice(0, 10);
//         console.log(topCounts);
//         var topSymptoms3 = allDoseData[2][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts3 = allDoseData[2][1].slice(0, 10);
//         console.log(topCounts);


//         // var dropdownMenu = d3.selectAll("#selDataset").node();
//         // // Assign the dropdown menu option to a variable
//         // var dataset = dropdownMenu.value;

//         // Initialize x and y arrays
//         if (dataset === "dose1") {
//             var x =topSymptoms;
//             var y =topCounts;
//             type = "pie";
//         }

//         else if (dataset === 'dose2') {
//             var x =  topSymptoms2;
//             var y = topCounts2;
//             type = "pie";
//         }
//         else {
//             var x =topSymptoms3;
//             var y = topCounts3;
//             type = "pie";
//         }

//         Plotly.restyle("bubble", "x", [x]);
//         Plotly.restyle("bubble", "y", [y]);
//         Plotly.restyle("bubble", "type", type);
//     })   
// };

// init();

// // Data to use for plot
// function buildCharts(allDoseSeries){
//     d3.json("/doseone").then(function(data) {

//         var symptomsDose1 = [];
//         var countDose1 = [];
//         var symptomsDose2 = [];
//         var countDose2 = [];
//         var otherSymp = [];
//         var otherCount = [];

//         data.forEach(symptom => {
//             Object.entries(symptom).forEach(([key, value]) =>{
//                 if (key === "symptom"){
//                     symptomsDose1.push(value);
//                 }else{
//                     countDose1.push(value);
//                 }
//             });
//         })

//         // console.log(countDose1);
//         // console.log(symptomsDose1);

//         d3.json("/dosetwo").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         symptomsDose2.push(value);
//                     }else{
//                         countDose2.push(value);
//                     }
//                 });
//             })
//         });

//         d3.json("/otherdose").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         otherSymp.push(value);
//                     }else{
//                         otherCount.push(value);
//                     }
//                 });
//             }) 
//         });

//         // Combine dose data for dropdown
//         var doseOneData = [symptomsDose1, countDose1];
//         var doseTwoData = [symptomsDose2, countDose2];
//         var otherData = [otherSymp, otherCount];

//         var allDoseData = [doseOneData, doseTwoData, otherData];
//         // console.log(allDoseData);

//         var topSymptoms = allDoseData[0][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts = allDoseData[0][1].slice(0, 10);
//         console.log(topCounts);

//         // BUBBLE CHART
//         // Call on bubble chart function
//         bubbleChart(topSymptoms, topCounts, topSymptoms);

//     });

// }

// // Function to create bubble chart
// function bubbleChart (xValue, yValue, textValue){
//     var trace1 = {
//         x: xValue,
//         y: yValue,
//         text: textValue,
//         mode: 'markers',
//         marker: {
//             color: xValue*5,
//             size: yValue
//         }
//     };

//     var layout = {
//         "titlefont":{
//             "size": 24
//         },
//         title: "Top 10 COVID-19 Vaccine Symptoms",
//         showlegend: false,
//         xaxis: {
//             title: "Symptom",
//             automargin: true
//         },
//         yaxis: {
//             title: "Symptom Count",
//             automargin: true
//         },
//         height: 600,
//         width: 1200
//     };

//     Plotly.newPlot('bubble', [trace1], layout);
// }

// init();

// function init() {
//     d3.json("/doseone").then(function(data) {
//         // console.log(data);

//         var symptomsDose1 = [];
//         var countDose1 = [];
//         var symptomsDose2 = [];
//         var countDose2 = [];
//         var otherSymp = [];
//         var otherCount = [];
//         // console.log(symptomsDose2);

//         data.forEach(symptom => {
//             Object.entries(symptom).forEach(([key, value]) =>{
//                 if (key === "symptom"){
//                     symptomsDose1.push(value);
//                 }else{
//                     countDose1.push(value);
//                 }
//             });
//         })

//         // console.log(countDose1);
//         // console.log(symptomsDose1);

//         d3.json("/dosetwo").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         symptomsDose2.push(value);
//                     }else{
//                         countDose2.push(value);
//                     }
//                 });
//             })
//         });

//         d3.json("/otherdose").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         otherSymp.push(value);
//                     }else{
//                         otherCount.push(value);
//                     }
//                 });
//             }) 
//         });

//         // // Combine dose data for dropdown
//         // var doseOneData = [symptomsDose1, countDose1];
//         // var doseTwoData = [symptomsDose2, countDose2];
//         // var otherData = [otherSymp, otherCount];

//         // var allDoseData = [doseOneData, doseTwoData, otherData];
//         // // console.log(allDoseData);

//         // var keys = ["Dose 1", "Dose 2", "Dose 3"];
//         // var valuesCount = [doseOneData.countDose1, doseTwoData.countDose2, otherData.otherCount];
//         // var sympData = [doseOneData.symptomsDose1, doseTwoData.symptomsDose2, otherData.otherSymp]
//         // var obj = {};








//         // Append options for dropdown menu
//         allDoseData.forEach(x => {
//             var dropDown = d3.select("#selDataset");
//             var selectOption = dropDown.append("option");
//             selectOption.attr("value", x).text(x);
//           })

//         // Call optionChanged function
//         // Show first dose's plot
//         optionChanged(allDoseData[0]);
// });
// }

// // Data and charts will change based on the dose series selected
// function optionChanged(allDoseSeries){
//     buildCharts(allDoseSeries);
//   }

// // Data to use for plot
// function buildCharts(allDoseSeries){
//     d3.json("/doseone").then(function(data) {

//         var symptomsDose1 = [];
//         var countDose1 = [];
//         var symptomsDose2 = [];
//         var countDose2 = [];
//         var otherSymp = [];
//         var otherCount = [];

//         data.forEach(symptom => {
//             Object.entries(symptom).forEach(([key, value]) =>{
//                 if (key === "symptom"){
//                     symptomsDose1.push(value);
//                 }else{
//                     countDose1.push(value);
//                 }
//             });
//         })

//         // console.log(countDose1);
//         // console.log(symptomsDose1);

//         d3.json("/dosetwo").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         symptomsDose2.push(value);
//                     }else{
//                         countDose2.push(value);
//                     }
//                 });
//             })
//         });

//         d3.json("/otherdose").then(function(data) {
//             // console.log(data);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) =>{
//                     if (key === "symptom"){
//                         otherSymp.push(value);
//                     }else{
//                         otherCount.push(value);
//                     }
//                 });
//             }) 
//         });

//         // Combine dose data for dropdown
//         var doseOneData = [symptomsDose1, countDose1];
//         var doseTwoData = [symptomsDose2, countDose2];
//         var otherData = [otherSymp, otherCount];

//         var allDoseData = [doseOneData, doseTwoData, otherData];
//         // console.log(allDoseData);

//         var topSymptoms = allDoseData[0][0].slice(0, 10);
//         // console.log(topSymptoms);
//         var topCounts = allDoseData[0][1].slice(0, 10);
//         console.log(topCounts);

//         // BUBBLE CHART
//         // Call on bubble chart function
//         bubbleChart(topSymptoms, topCounts, topSymptoms);

//     });

// }

// // Function to create bubble chart
// function bubbleChart (xValue, yValue, textValue){
//     var trace1 = {
//         x: xValue,
//         y: yValue,
//         text: textValue,
//         mode: 'markers',
//         marker: {
//             color: xValue*5,
//             size: yValue
//         }
//     };

//     var layout = {
//         "titlefont":{
//             "size": 24
//         },
//         title: "Top 10 COVID-19 Vaccine Symptoms",
//         showlegend: false,
//         xaxis: {
//             title: "Symptom",
//             automargin: true
//         },
//         yaxis: {
//             title: "Symptom Count",
//             automargin: true
//         },
//         height: 600,
//         width: 1200
//     };

//     Plotly.newPlot('bubble', [trace1], layout);
// }

// init();

// d3.json("/doseone").then(function (data) {
//             // console.log(data);
//             var dropdownMenu = d3.select("#selDataset");
//                 // Assign the value of the dropdown menu option to a variable
//             var dataset = dropdownMenu.property("value");

//             var symptomsDose1 = [];
//             var countDose1 = [];
//             var symptomsDose2 = [];
//             var countDose2 = [];
//             var otherSymp = [];
//             var otherCount = [];
//             // console.log(symptomsDose2);

//             data.forEach(symptom => {
//                 Object.entries(symptom).forEach(([key, value]) => {
//                     if (key === "symptom") {
//                         symptomsDose1.push(value);
//                     } else {
//                         countDose1.push(value);
//                     }
//                 });
//             })

//             // console.log(countDose1);
//             // console.log(symptomsDose1);

//             d3.json("/dosetwo").then(function (data) {
//                 // console.log(data);

//                 data.forEach(symptom => {
//                     Object.entries(symptom).forEach(([key, value]) => {
//                         if (key === "symptom") {
//                             symptomsDose2.push(value);
//                         } else {
//                             countDose2.push(value);
//                         }
//                     });
//                 })
//             });

//             d3.json("/otherdose").then(function (data) {
//                 // console.log(data);

//                 data.forEach(symptom => {
//                     Object.entries(symptom).forEach(([key, value]) => {
//                         if (key === "symptom") {
//                             otherSymp.push(value);
//                         } else {
//                             otherCount.push(value);
//                         }
//                     });
//                 })
//             });

//             // Combine dose data for dropdown
//             var doseOneData = [symptomsDose1, countDose1];
//             var doseTwoData = [symptomsDose2, countDose2];
//             var otherData = [otherSymp, otherCount];

//             var allDoseData = [doseOneData, doseTwoData, otherData];
//             console.log(allDoseData);

//             var topSymptoms =symptomsDose1.slice(0, 5);
//             console.log(topSymptoms);
//             var topCounts = countDose1.slice(0, 5);
//             console.log(topCounts);
//             var topSymptoms2 = symptomsDose2.slice(0, 5);
//             console.log(topSymptoms2);
//             var topCounts2 = countDose2.slice(0, 5);
//             console.log(topCounts2);
//             var topSymptoms3 = otherSymp.slice(0,5);
//             console.log(topSymptoms3);
//             var topCounts3 = otherCount.slice(0,5);
//             console.log(topCounts3);
//         });
// var dose1 = [];
function init(){
d3.json("/doseone").then(function (data) {
    console.log("dose1", data)
    // var dose1slice = data.count.slice(0,10)
    var symptomsDose1 = [];
    var countDose1 = [];

    var symptomsDose2 = [];
    var countDose2 = [];

    var symptomsDose3 = [];
    var countDose3 = [];

    data.forEach(symptom => {
        Object.entries(symptom).forEach(([key, value]) => {
            if (key === "symptom") {
                symptomsDose1.push(value);
            } else {
                countDose1.push(value);
            }
        });
    })
    // var sliced = testing.slice(0, 10);
    // console.log("slice1", sliced);
    // console.log ("symp", symptomsDose1 );
    // console.log("count",countDose1);
    var sympslice = symptomsDose1.slice(0, 10);
    var countslice = countDose1.slice(0, 10);
    console.log("symp", sympslice);
    console.log("count", countslice);

    d3.json("/dosetwo").then(function (data) {

        
        data.forEach(symptom => {
            Object.entries(symptom).forEach(([key, value]) => {
                if (key === "symptom") {
                    symptomsDose2.push(value);
                } else {
                    countDose2.push(value);
                }
            });
        })
        var sympslice2 = symptomsDose2.slice(0, 10);
        var countslice2 = countDose2.slice(0, 10);
        console.log("symp2", sympslice2);
        console.log("count2", countslice2);
    });

    d3.json("/otherdose").then(function (data) {
        // console.log("doseunk", data)
        data.forEach(symptom => {
            Object.entries(symptom).forEach(([key, value]) => {
                if (key === "symptom") {
                    symptomsDose3.push(value);
                } else {
                    countDose3.push(value);
                }
            });
        })
        var sympslice3 = symptomsDose3.slice(0, 10);
        var countslice3 = countDose3.slice(0, 10);
        console.log("symp3", sympslice3);
        console.log("count3", countslice3);
    });
    // var symptomsDose1 = [];
    // var countDose1 = [];

            data = [{
            values:  countDose1,
            labels: symptomsDose1,
            type:"pie"
        }];

        Plotly.newPlot("bubble", data);
     


});
};

init();


// d3.json("/dosetwo").then(function (data) {
//     console.log("dose2",data)
// });
// d3.json("/otherdose").then(function (data) {
//     console.log("doseunk", data)
// });
