const link = "../static/data/cleaned_dataset.geojson";
const boundaryLink = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

var streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

function chooseColor (x) {
    var color = "";
    if (x >= 4000000) {
        color = "green"
    }
    else if (x >= 2000000) {
        color = "orange"
    }
    else if (x >= 1000000){
        color = "yellow"
    }
    else if (x >= 100000){
        color = "purple"
    }
    else if (x >= 10000){
        color = "blue"
    }
    else {
        color = "red"
    }
    return color;
}

nfObject = new Intl.NumberFormat('en-US');

// date for layers: 1/18, 1/25, 2/1, 2/8
// Layer for 1/18
var jan18 = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    // console.log(all_coord);
    d3.json(link, function(data){
        var dataAll = data.features;
        var desiredDate = dataAll.filter(d=>d.properties.date === "2021-01-18");
        // console.log(data.features);
        desiredDate.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            // console.log(element.properties);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.people_fully_vaccinated)
                    }
                },
                onEachFeature: function(feature, layer) {
                    layer.on({
                        mouseover: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.9
                            });
                        },
                        mouseout: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.5
                            });
                        },
                        click: function(event) {
                            myMap.fitBounds(event.target.getBounds());
                        }
                    });
                    layer.bindPopup(element.properties.location + "<hr> " + "People Fully Vaccinated: " + nfObject.format(element.properties.people_fully_vaccinated) + "<br> " + "Total Vaccinations:" + nfObject.format(element.properties.total_vaccinations) + "<br> " + "Total Cases: " + nfObject.format(element.properties.total_cases) + "<br> " + "Total Deaths: " + nfObject.format(element.properties.total_deaths));
                    // bindPopup(element.properties.location + "<hr> " + "People Fully Vaccinated: " + nfObject.format(element.properties.people_fully_vaccinated) + "<br> " + "Total Cases: " + nfObject.format(element.properties.total_cases) + "<br> " + "Total Deaths: " + nfObject.format(element.properties.total_deaths));
                }, 
            }).addTo(jan18);               
        })
    })
})

// layer for 1/25
var jan25 = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    d3.json(link, function(data){
        var dataAll = data.features;
        var desiredDate = dataAll.filter(d=>d.properties.date === "2021-01-25");
        desiredDate.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            console.log(element.properties);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.people_fully_vaccinated)
                    }
                },
                onEachFeature: function(feature, layer) {
                    layer.on({
                        mouseover: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.9
                            });
                        },
                        mouseout: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.5
                            });
                        },
                        click: function(event) {
                            myMap.fitBounds(event.target.getBounds());
                        }
                    });
                    layer.bindPopup(element.properties.location + "<hr> " + "People Fully Vaccinated: " + nfObject.format(element.properties.people_fully_vaccinated) + "<br> " + "Total Vaccinations:" + nfObject.format(element.properties.total_vaccinations) + "<br> " + "Total Cases: " + nfObject.format(element.properties.total_cases) + "<br> " + "Total Deaths: " + nfObject.format(element.properties.total_deaths));
                }, 
            }).addTo(jan25);               
        })
    })
})

// layer for 2/1
var feb1 = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    d3.json(link, function(data){
        var dataAll = data.features;
        var desiredDate = dataAll.filter(d=>d.properties.date === "2021-02-01");
        desiredDate.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.people_fully_vaccinated)
                    }
                },
                onEachFeature: function(feature, layer) {
                    layer.on({
                        mouseover: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.9
                            });
                        },
                        mouseout: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.5
                            });
                        },
                        click: function(event) {
                            myMap.fitBounds(event.target.getBounds());
                        }
                    });
                    layer.bindPopup(element.properties.location + "<hr> " + "People Fully Vaccinated: " + nfObject.format(element.properties.people_fully_vaccinated) + "<br> " + "Total Vaccinations:" + nfObject.format(element.properties.total_vaccinations) + "<br> " + "Total Cases: " + nfObject.format(element.properties.total_cases) + "<br> " + "Total Deaths: " + nfObject.format(element.properties.total_deaths));
                }, 
            }).addTo(feb1);               
        })
    })
})

// layer for 2/8
var feb8 = L.layerGroup();

d3.json(boundaryLink, function(b){
    var all_coord = b.features;
    d3.json(link, function(data){
        var dataAll = data.features;
        var desiredDate = dataAll.filter(d=>d.properties.date === "2021-02-08");
        desiredDate.forEach(element => {
            var extra = all_coord.filter(d=>d.properties.ISO_A3===element.properties.iso_code);
            element.properties.extra = extra.map(d=>d.geometry);
            L.geoJSON(element.properties.extra, {
                style: function(feature) {
                    return {
                        color: "white",
                        weight: 1.5,
                        fillOpacity: 0.5,
                        fillColor: chooseColor(element.properties.people_fully_vaccinated)
                    }
                },
                onEachFeature: function(feature, layer) {
                    layer.on({
                        mouseover: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.9
                            });
                        },
                        mouseout: function(event) {
                            layer = event.target;
                            layer.setStyle({
                                fillOpacity: 0.5
                            });
                        },
                        click: function(event) {
                            myMap.fitBounds(event.target.getBounds());
                        }
                    });
                    layer.bindPopup(element.properties.location + "<hr> " + "People Fully Vaccinated: " + nfObject.format(element.properties.people_fully_vaccinated) + "<br> " + "Total Vaccinations:" + nfObject.format(element.properties.total_vaccinations) + "<br> " + "Total Cases: " + nfObject.format(element.properties.total_cases) + "<br> " + "Total Deaths: " + nfObject.format(element.properties.total_deaths));
                }, 
            }).addTo(feb8);               
        })
    })
})

// Layers 
var overlayMaps = {
    "2021-01-18": jan18,
    "2021-01-25": jan25,
    "2021-02-01": feb1,
    "2021-02-08": feb8
};

var myMap = L.map("map", {
    center: [52.2973333,-46.2556329],
    zoom: 3,
    layers: [streetMap, jan18]
});

L.control.layers(overlayMaps).addTo(myMap);

  
// Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        vaxTotals = [0, 10000, 100000, 1000000, 2000000, 4000000],
        labels = ['<strong>People Fully Vaccinated</strong>'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < vaxTotals.length; i++) {
        div.innerHTML +=
        labels.push(
            '<i style="background:' + chooseColor(vaxTotals[i] + 1) + '"></i> ' +
            nfObject.format(vaxTotals[i]) + (vaxTotals[i + 1] ? '&ndash;' + nfObject.format(vaxTotals[i + 1]) : '+'));
    }
    div.innerHTML = labels.join('<br>');

    return div;
};

legend.addTo(myMap);
