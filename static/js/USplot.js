// Use d3.json() to fetch data from JSON file
    // function symptoms(series) {
    //     var sympList = [];
    //     series.map(obj => {
    //         var i = 0
    //         var symptom = obj[0][0]
    //         if (sympList[symptom]) {
    //             sympList.push(symptom)
    //         }
    //         else {
    //             !sympList.push(symptom)
    //         }
    //     })
    // return sympList;
    // };

function init() {
    d3.json("/us_vaccines").then(function(importedData) {
  
        // parse the data
        importedData.forEach(function(data) {
            data.vax_dose_series = +data.vax_dose_series;
          })
        
        var doseSeries1 = importedData.filter(obj => obj.vax_dose_series === 1);
        var doseSeries2 = importedData.filter(obj => obj.vax_dose_series === 2);
        var otherSeries = importedData.filter(obj => !obj.vax_dose_series);
        
       var allDoseSeries = [doseSeries1, doseSeries2, otherSeries];
    //    console.log(allDoseSeries);

        // Append options for dropdown menu
        allDoseSeries.forEach(x => {
            var dropDown = d3.select("#selDataset");
            var selectOption = dropDown.append("option");
            selectOption.attr("value", x).text(x);
          })
        
        // Call optionChanged function
        // Show first dose's plot
        optionChanged(allDoseSeries[0]);
    });
}

// Plot will change based on Dose Series
function optionChanged(allDoseSeries){
    buildCharts(allDoseSeries);
}

// Data to use for plot
function buildCharts(allDoseSeries){
    d3.json("/dose1data").then(function(data) {
        // console.log(data);






    // Set up filter based on Dose Series + symptoms
    // // GET BACK TO THIS
    // var filteredSeries = 





// })



// DOSE 1 DATA, SYMPTOM COUNT
d3.json("/dose1data").then(function(data) {
    // Parse data
    data.forEach(function(data) {
        data.count = +data.count;
    })
    
    var topSymptomsOne = data.slice(0, 5);

    symptomListOne = [topSymptomsOne[0][0], topSymptomsOne[1][0], topSymptomsOne[2][0], topSymptomsOne[3][0], topSymptomsOne[4][0]];
    countArrayOne = [topSymptomsOne[0][1], topSymptomsOne[1][1], topSymptomsOne[2][1], topSymptomsOne[3][1], topSymptomsOne[4][1]];
    // console.log(countArray);
    
    // var symptoms = Object.keys(symptomList(countArray));
    // var symptomData = Object.values(symptomList(countArray));

    // console.log(Object.keys(data));
    // console.log(topSymptoms);

    })
});

// DOSE 2 DATA, SYMPTOM COUNT
d3.json("/dose2data").then(function(data) { 
    // Parse data
    data.forEach(function(data) {
        data.count = +data.count;
    })
    
    var topSymptomsTwo = data.slice(0, 5);

    symptomListTwo = [topSymptomsTwo[0][0], topSymptomsTwo[1][0], topSymptomsTwo[2][0], topSymptomsTwo[3][0], topSymptomsTwo[4][0]];
    countArrayTwo = [topSymptomsTwo[0][1], topSymptomsTwo[1][1], topSymptomsTwo[2][1], topSymptomsTwo[3][1], topSymptomsTwo[4][1]];

});

// NULL DOSE DATA, SYMPTOM COUNT
d3.json("/otherdosedata").then(function(data) {
    // Parse data
    data.forEach(function(data) {
        data.count = +data.count;
    })
    
    var topSymptomsOther = data.slice(0, 5);

    symptomListOther = [topSymptomsOther[0][0], topSymptomsOther[1][0], topSymptomsOther[2][0], topSymptomsOther[3][0], topSymptomsOther[4][0]];
    countArrayOther = [topSymptomsOther[0][1], topSymptomsOther[1][1], topSymptomsOther[2][1], topSymptomsOther[3][1], topSymptomsOther[4][1]];

})





    // Bubble Chart Values
    // Get all sample values
    var bubble_symptoms = filteredSamples.map(x=>x.sample_values)[0];
    console.log(bubble_symptoms);

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
//   
}
