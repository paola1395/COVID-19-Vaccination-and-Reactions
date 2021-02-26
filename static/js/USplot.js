// Use d3.json() to fetch data from JSON file
// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

// function getData() {
//     d3.json("/dose1data").then(function(data) {
//         var symptom = unpack(data.dataset.data, 1);
//         var sympCount = unpack(data.dataset.data, 2);

// }



d3.json("/dose1data").then(function(data) {
    var topSymptoms = data.slice(0, 5);

    function sympData(series) {
        var sympList = [];
        series.map(obj => {
            var symptom = obj.symptom
            if (sympList[symptom]) {
                sympList.push(symptom)
            }
            else {
                !sympList.push(symptom)
            }
        })
    return sympList;
    };

    // function sympData(series) {
    //     var sympList = [];
    //     series.map(obj => {
    //         var symptom = obj[0][1]
    //         if (sympList[symptom]) {
    //             sympList.push(symptom)
    //         }
    //         else {
    //             !sympList.push(symptom)
    //         }
    //     })
    // return sympList;
    // };

    // var topSymptom = Object.keys(sympData(topSymptoms));
    console.log(Object.keys(data));

});

        
    
    
    
    
    
    
    

    
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
//   

