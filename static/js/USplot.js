function init() {
    d3.json("/doseone").then(function(data) {
        // console.log(data);

        var symptomsDose1 = [];
        var countDose1 = [];
        var symptomsDose2 = [];
        var countDose2 = [];
        var otherSymp = [];
        var otherCount = [];
        // console.log(symptomsDose2);

        data.forEach(symptom => {
            Object.entries(symptom).forEach(([key, value]) =>{
                if (key === "symptom"){
                    symptomsDose1.push(value);
                }else{
                    countDose1.push(value);
                }
            });
        })

        // console.log(countDose1);
        // console.log(symptomsDose1);

        d3.json("/dosetwo").then(function(data) {
            // console.log(data);

            data.forEach(symptom => {
                Object.entries(symptom).forEach(([key, value]) =>{
                    if (key === "symptom"){
                        symptomsDose2.push(value);
                    }else{
                        countDose2.push(value);
                    }
                });
            })
        });

        d3.json("/otherdose").then(function(data) {
            // console.log(data);

            data.forEach(symptom => {
                Object.entries(symptom).forEach(([key, value]) =>{
                    if (key === "symptom"){
                        otherSymp.push(value);
                    }else{
                        otherCount.push(value);
                    }
                });
            }) 
        });

        // var symptomsDose1 = [];
        // var countDose1 = [];
        // var symptomsDose2 = [];
        // var countDose2 = [];
        // var otherSymp = [];
        // var otherCount = [];

        






        // Combine dose data for dropdown
        // var doseOneData = [symptomsDose1, countDose1];
        // var doseTwoData = [symptomsDose2, countDose2];
        // var otherData = [otherSymp, otherCount];
        
        // var allDoseData = [doseOneData, doseTwoData, otherData];
        // console.log(allDoseData);

        // Append options for dropdown menu
        allDoseData.forEach(x => {
            var dropDown = d3.select("#selDataset");
            var selectOption = dropDown.append("option");
            selectOption.attr("value", x).text(x);
          })
        
        // Call optionChanged function
        // Show first dose's plot
        optionChanged(allDoseData[0]);
});
}