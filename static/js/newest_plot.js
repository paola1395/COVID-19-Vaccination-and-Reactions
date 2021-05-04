// Import Data

d3.json("/us_vaccines").then(function(importedData) {
  
    // parse the data
    importedData.forEach(function(data) {
        data.age = +data.age;
        data.vax_dose_series = +data.vax_dose_series;
        ;
      })

    // var totalVacc = importedData.data.vax_dose_series
    // console.log(totalVacc);

    var doseSeries1 = importedData.filter(obj => obj.vax_dose_series === 1);
    // var doseSeries2 = importedData.filter(obj => obj.vax_dose_series === 2);
    // var otherSeries = importedData.filter(obj => !obj.vax_dose_series);

    console.log(doseSeries1);
    // console.log(doseSeries2);
    // console.log(otherSeries);

// Retrieve unique data for state, gender, and age
    // STATE
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

    var states = Object.keys(stateData(doseSeries1));
    console.log(states);

    // GENDER
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

    var gender = Object.keys(sexData(doseSeries1));
    console.log(gender);
    var genderCount = Object.values(sexData(doseSeries1))
    console.log(genderCount);

    // AGE
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

    var ages = Object.keys(ageData(doseSeries1));
    console.log(ages);



})