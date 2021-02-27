// Initializes the page with a default plot
// function init() {
//     data = [{
//       x: ["Death", "Headache", "Pyrexia", "Dyspnoea", "Dizziness"],
//       y: [280, 246, 232, 222, 187] }];

//     Plotly.newPlot("plot", data);
//   }

data = [
    {
        type: 'scatterpolar',
        r: [280, 246, 232, 222, 187],
        theta: ["Death", "Headache", "Pyrexia", "Dyspnoea", "Dizziness"],
        fill: 'toself',
        name: 'Dose Series 1'
    },
    {
        type: 'scatterpolar',
        r: [61, 51, 48, 46, 44],
        theta: ["Pyrexia", "Headache", "Chills", "Pain", "Dyspnoes"],
        fill: 'toself',
        name: 'Dose Series 2'
    },
    {
        type: 'scatterpolar',
        r: [65, 64, 51, 47, 44],
        theta: ["Headache", "Pyrexia", "Death", "Pain", "Dyspnoes"],
        fill: 'toself',
        name: 'Dose Series Unknown'
    }
]

layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [20, 280]
        }
    }
}

Plotly.newPlot("myDiv", data, layout)

data1 = [
    {
        type: 'scatterpolar',
        // r: [280, 246, 232, 222, 187],
        r: [14, 12.3, 11.6, 11.1, 9.4],
        theta: ["Death", "Headache", "Pyrexia", "Dyspnoea", "Dizziness"],
        fill: 'toself',
        name: 'Dose Series 1'
    },
    {
        type: 'scatterpolar',
        // r: [61, 51, 48, 46, 44],
        r: [22.3, 18.7, 17.6, 16.8, 16.1],
        theta: ["Pyrexia", "Headache", "Chills", "Pain", "Dyspnoes"],
        fill: 'toself',
        name: 'Dose Series 2'
    },
    {
        type: 'scatterpolar',
        // r: [65, 64, 51, 47, 44],
        r: [11.5, 11.5, 9, 8.3, 7.8],
        theta: ["Headache", "Pyrexia", "Death", "Pain", "Dyspnoes"],
        fill: 'toself',
        name: 'Dose Series Unknown'
    }
]

layout1 = {
    polar: {
        radialaxis: {
            visible: true,
            range: [7, 23]
        }
    }
}

Plotly.newPlot("myDiv2", data1, layout1)