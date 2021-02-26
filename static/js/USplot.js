// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData

    // var sympOne = data.symptom1;
    // var sympTwo = data.symptom2;
    // var sympThree = data.symptom3;
    // var sympFour = data.symptom4;
    // var sympFive = data.symptom5;

//     function sympOneData(series) {
//         var data = {};
//         series.map(obj => {
//             var sympOne = obj.sympOne
//             if (data[sympOne]) {
//                 data[sympOne]++
//             }
//             else {
//                 data[sympOne] = 1
//             }
//         })
//     return data;
//     }

d3.json("/us_vaccines").then(function(data) {
    console.log(data);
})
 
        
    
    
    
    
    
    
    
    
    
    
    
    
    // var doseSeries1 = data.filter(obj => obj.vax_dose_series === "1");
        // var doseSeries2 = data.filter(obj => obj.vax_dose_series === "2");
        // var otherSeries = data.filter(obj => !obj.vax_dose_series);
    
    //     function sympOne(series) {
    //         var data = {};
    //         series.map(obj => {
    //             var sympOne = obj.sympOne
    //             if (data[sympOne]) {
    //                 data[sympOne]++
    //             }
    //             else {
    //                 data[sympOne] = 1
    //             }
    //         })
    //     return data;
    //     };

    //     function sympTwo(series) {
    //         var data = {};
    //         series.map(obj => {
    //             var sympTwo = obj.sympTwo
    //             if (data[sympTwo]) {
    //                 data[sympTwo]++
    //             }
    //             else {
    //                 data[sympTwo] = 1
    //             }
    //         })
    //     return data;
    //     };

    //     function sympThree(series) {
    //         var data = {};
    //         series.map(obj => {
    //             var sympThree = obj.sympThree
    //             if (data[sympThree]) {
    //                 data[sympThree]++
    //             }
    //             else {
    //                 data[sympThree] = 1
    //             }
    //         })
    //     return data;
    //     };

    //     function sympFour(series) {
    //         var data = {};
    //         series.map(obj => {
    //             var sympFour = obj.sympFour
    //             if (data[sympFour]) {
    //                 data[sympFour]++
    //             }
    //             else {
    //                 data[sympFour] = 1
    //             }
    //         })
    //     return data;
    //     };

    //     function sympFive(series) {
    //         var data = {};
    //         series.map(obj => {
    //             var sympFive = obj.sympFive
    //             if (data[sympFive]) {
    //                 data[sympFive]++
    //             }
    //             else {
    //                 data[sympFive] = 1
    //             }
    //         })
    //     return data;
    //     };

    //     var sympOneArray = Object.values(sympOne(doseSeries1));
    //     var sympTwoArray = Object.values(sympTwo(doseSeries1));
    //     var sympThreeArray = Object.values(sympThree(doseSeries1));
    //     var sympFourArray = Object.values(sympFour(doseSeries1));
    //     var sympFiveArray = Object.values(sympFive(doseSeries1));

    //     const allSymp = [sympOneArray, sympTwoArray, sympThreeArray, sympFourArray, sympFiveArray].reduce((acc, el) => {
    //         for (let key in el) {
    //           acc[key] = [...acc[key] || [], el[key]];
    //         };
    //         return acc;
    //       }, {})
          
    // console.log(allSymp);

        
        // Creating an array of Dose 1/2/other symptom data
        // var doseOneData = Object.values(symptomData(doseSeries1));
        // var doseTwoData = Object.values(symptomData(doseSeries2));
        // var otherDoseData = Object.values(symptomData(otherSeries));
        // var labels = Object.keys(symptomData(doseSeries1))

        // console.log(doseOneData);
        



    
    
    
    
    
    
//         // Extract the sample_values from the filtered id samples data
//     // Use slice to get the top 10 OTU values found in that individual
//     // Because it's in the 0 index, need to indicate that
//     var sampleValues = filteredSamples.map(x=>x.sample_values.slice(0,10))[0];
//     // Use reverse so the graph descend from more to less
//     var valueSorted = sampleValues.reverse();
//     console.log(valueSorted);



//     // Bubble Chart Values
//     // Get all sample values
//     var bubble_samples = filteredSamples.map(x=>x.sample_values)[0];
//     console.log(bubble_samples);

//     // Get all otu ids
//     var bubble_otuIds = filteredSamples.map(x=>x.otu_ids)[0];
//     console.log(bubble_otuIds);

//     // Get all otu labels
//     var bubble_otuLabels = filteredSamples.map(x=>x.otu_labels)[0];
//     console.log(bubble_otuLabels);


//     // Call on the bubbleChart function
//     bubbleChart(bubble_otuIds, bubble_samples, bubble_otuLabels);




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











// console.log(sympOneData);

    // function sympTwoData(series) {
    //     var data = {};
    //     series.map(obj => {
    //         var sympOne = obj.sympOne
    //         if (data[sympOne]) {
    //             data[sympOne]++
    //         }
    //         else {
    //             data[sympOne] = 1
    //         }
    //     })
    // return data;
    



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

// // Data used for chart DROPDOWN DOSE 1/2/UNKNOWN
// d3.json("/us_vaccines").then((importedData) => {
//     console.log(importedData);
// })








